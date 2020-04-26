<script lang="tsx">
// 分页高度
const PAGE_HEIGHT = 50

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { isFunction, hasClass, removeClass, addClass, trim } from '@/utils/common'
import pagination from './pagination.vue'

const enum OperateType {
  BUTTON = 'button',
  ICON = 'icon'
}
const defaultOption: Table.IPageOpt = {
  height: PAGE_HEIGHT,
  currentPage: 1,
  total: 0,
  pageSizes: [10, 20, 30, 40, 50],
  pageSize: 10
}

const ASC = 'ascending'
const DESC = 'descending'

// 自定义排序属性
const SORT_CODE = 'custom'
// 排序字段集合
const SORT_ARR: string[] = [ASC, DESC]

// 获取指定order的 非当前排序字段
const getTargetSortKey = (order: string) => {
  const index = SORT_ARR.findIndex((value, index, arr) => {
    return value !== order
  })
  return SORT_ARR[index]
}

/**
 * 取当前th上的className 排序order字段
 */
const getCurrentSortKey = (classList: any): string => {
  let currentOrder = ''
  const reg = `${ASC}|${DESC}`
  for (let i = 0; i < classList.length; i++) {
    if (new RegExp(reg).test(classList[i])) {
      currentOrder = trim(classList[i])
    }
  }
  return currentOrder
}

type sortChangeCb = {
  column: object
  prop: string
  order: string | null
}
type activeSortType = {
  [key: string]: any
}
type defaultSortType = {
  prop: string
  order: string
}

@Component({
  components: {
    pagination
  }
})
export default class VTable extends Vue {
  // 传入的表格相关数据
  @Prop()
  private option: Table.ITableOption
  @Prop()
  private height: number | string
  // 表格详细数据
  private tableData: object[] = []
  private tableHeight: number | string

  // 当前排序
  private activeSort: any
  // 默认排序
  private defaultObj: any

  @Watch('option.data')
  optionDataChange(newval: object[]) {
    this.tableData = newval
    this.$nextTick(() => {
      // this.$forceUpdate()
      this.setTableHeight(this.height)
      this.initDefaultOrder()
    })
  }

  @Watch('height')
  heightChange(newval: number) {
    this.setTableHeight(newval)
  }

  get tableColumn() {
    return this.option.column
  }

  mounted() {
    this.activeSort = Object.create([])
    this.defaultObj = Object.create([])
    this.tableData = this.option.data
  }

  initDefaultOrder() {
    const defaultSort = this.option.defaultSort
    defaultSort.forEach((item: defaultSortType) => {
      this.defaultObj[item.prop] = item.order
    })
    this.tableColumn.map((item: any) => {
      // 默认设置值
      if (item.sortable !== undefined && item.sortable === SORT_CODE) {
        this.activeSort[item.value] = this.defaultObj[item.value]
      }
    })
    this.initIconSort()
  }

  /**
   * 获取当前排序列的th Dom
   */
  getSortColDom(order: string) {
    const tableEl = (this.$refs.table as any).$el
    return tableEl.querySelectorAll(`div[relid=${order}]`)
  }

  // 初始化icon按钮状态
  initIconSort() {
    for (const key in this.activeSort) {
      const thNode = this.getSortColDom(key)
      thNode.forEach((item: any) => {
        addClass(item.parentNode.parentNode, this.activeSort[key])
      })
    }
  }

  /**
   * @name: setTableHeight
   * @param {number|string} val 传入的表格高度 字符串则高度 100%
   * @return:
   * @description: 计算表格高度
   */
  setTableHeight(val: number | string) {
    let paginationHeight
    if (typeof val === 'string') {
      paginationHeight = val
      this.tableHeight = paginationHeight
    } else {
      paginationHeight = this.option.pagination ? this.option.pageOpt.height : 0
      this.tableHeight = val - paginationHeight
    }
    this.$forceUpdate()
  }

  /**
   * @name: handleSelectionChange
   * @param {Array} val 当前选中的行数据
   * @return:
   * @description: 复选框change事件
   */
  handleSelectionChange(val: any) {
    this.$emit('handleSelectionChange', val)
  }

  /**
   * @name: rowClick
   * @param {object} row 当前点击行的行数据
   * @param {object} column 当前点击列的列属性
   * @param {any} event 当前鼠标点击信息
   * @return:
   * @description: 表格行点击事件
   */
  rowClick(row: object, column: object, event: any) {
    if (this.option.rowClick && isFunction(this.option.rowClick)) {
      this.option.rowClick(row, column, event)
    }
  }

  /**
   * icon click事件
   * @param {object} order 排序字段
   * @param {object} column 当前列对象
   * @param {any} e 当前事件
   */
  private sortIconClick(e: any, column: any, order: string) {
    const thNode = e.target.parentNode.parentNode.parentNode.parentNode

    // 清除对立active
    const targetOrder = getTargetSortKey(order)
    if (hasClass(thNode, targetOrder)) {
      removeClass(thNode, targetOrder)
    }

    addClass(thNode, order)

    this.sortOrderService(column.property, order)
    // console.log('sortIconClick--->', column.property + ',' + order)
    // console.log(this.activeSort)

    this.sortChange()
    e.stopPropagation()
    e.preventDefault()
  }

  /**
   * 表头事件回调
   */
  handleHeaderClick(column: any, e: any) {
    const thNode = e.target.parentNode.parentNode
    const currentOrder = getCurrentSortKey(thNode.classList)
    if (currentOrder !== '') {
      const prop = column.property
      const targetOrder = getTargetSortKey(currentOrder)
      // console.log('handleHeaderClick--当前order->', currentOrder)
      // console.log('handleHeaderClick--目标order->', targetOrder)
      if (hasClass(thNode, currentOrder)) {
        removeClass(thNode, currentOrder)
      }
      addClass(thNode, targetOrder)
      this.sortOrderService(prop, targetOrder)
    }
    this.sortChange()
  }

  /**
   * 排序处理服务
   * @param {string} column 排序列名
   * @param {string} order 排序字段
   */
  private sortOrderService(column: string, order: string): void {
    this.activeSort[column] = order
  }

  /**
   * 排序回调
   */
  sortChange() {
    if (this.option.sortChange && isFunction(this.option.sortChange)) {
      // 判断数组curThead中是否存在当前节点的prop
      // console.log('sortChange ---', this.activeSort)
      this.option.sortChange(this.activeSort)
    }
  }
  handleTheadAddClass(val: any) {
    const column = val.column
  }
  /**
   * @name: handleCurrentChange
   * @param {number} val 切换的页码
   * @return:
   * @description: 页码切换功能
   */
  handleCurrentChange(val: number) {
    this.$emit('handleCurrentPageChange', val)
  }

  /**
   * @name: handleSizeChange
   * @param {number} val 每页显示条数
   * @return:
   * @description: 每页显示条数切换功能
   */
  handleSizeChange(val: number) {
    this.$emit('handleSizePageChange', val)
  }

  render() {
    let elColumn: any = {}
    elColumn = this.tableColumn.map((item: any) => {
      let com
      if (item.operations) {
        com = (
          <el-table-column
            type={item.value}
            prop={item.value}
            label={item.name}
            width={item.width}
            fixed={item.fixed}
            align={item.align}
            sortable={item.sortable}
            min-width={item.minWidth}
            formatter={item.formatter}
            scopedSlots={{
              default: (props: any) => {
                const operations = item.operations.map((operate: any, index: number) => {
                  const type = operate.type || 'button'
                  let operateDom
                  if (OperateType.ICON === type) {
                    operateDom = (
                      <i
                        key={index}
                        title={operate.title || ''}
                        class={operate.iconName ? operate.iconName : 'el-icon-s-order'}
                        on-click={() => operate.handlerClick(props.row, props.$index)}
                      ></i>
                    )
                  } else {
                    operateDom = (
                      <el-button
                        type="text"
                        size="mini"
                        key={index}
                        disabled={
                          operate.disCallBack && operate.disCallBack(props.row, props.$index)
                        }
                        on-click={() => operate.handlerClick(props.row, props.$index)}
                      >
                        {operate.label}
                      </el-button>
                    )
                  }
                  return operateDom
                })
                return operations
              }
            }}
          ></el-table-column>
        )
      } else if (item.sortable === SORT_CODE) {
        com = (
          <el-table-column
            type={item.value}
            prop={item.value}
            label={item.name}
            width={item.width}
            fixed={item.fixed}
            align={item.align}
            min-width={item.minWidth}
            formatter={item.formatter}
            show-overflow-tooltip={item.tooltip}
            scopedSlots={{
              header: (props: any) => {
                const column = props.column
                const customHeader = (
                  <div relId={column.property}>
                    {column.label}
                    <span class="caret-wrapper">
                      <i
                        class="sort-caret ascending"
                        on-click={(e: any) => this.sortIconClick(e, column, 'ascending')}
                      ></i>
                      <i
                        class="sort-caret descending"
                        on-click={(e: any) => this.sortIconClick(e, column, 'descending')}
                      ></i>
                    </span>
                  </div>
                )
                return customHeader
              }
            }}
          ></el-table-column>
        )
      } else {
        com = (
          <el-table-column
            type={item.value}
            prop={item.value}
            label={item.name}
            width={item.width}
            fixed={item.fixed}
            sortable={item.sortable}
            align={item.align}
            min-width={item.minWidth}
            formatter={item.formatter}
            show-overflow-tooltip={item.tooltip}
          ></el-table-column>
        )
      }
      return com
    })
    let elColumnSelection
    if (this.option.selection) {
      elColumnSelection = <el-table-column type="selection" width="55"></el-table-column>
    }
    return (
      <div class="vpandora-table">
        <el-table
          ref="table"
          height={this.tableHeight}
          data={this.tableData}
          show-header={this.option.isHeader}
          stripe={this.option.stripe}
          style={this.tableHeight}
          on-row-click={this.rowClick}
          on-selection-change={this.handleSelectionChange}
          on-header-click={this.handleHeaderClick}
        >
          {elColumnSelection}
          {elColumn}
        </el-table>
        <pagination
          v-show={this.option.pagination}
          option={this.option.pageOpt || defaultOption}
          ref="pagination"
          on-handleSizeChange={this.handleSizeChange}
          on-handleCurrentChange={this.handleCurrentChange}
        ></pagination>
      </div>
    )
  }
}
</script>
