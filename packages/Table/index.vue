<script lang="tsx">
// 分页高度
const PAGE_HEIGHT = 50

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { isFunction, hasClass, removeClass, addClass, trim } from '@/utils/common'
import pagination from './pagination.vue'
import { CreateElement } from 'vue/types/umd'
// 排序模式
const enum sortModeType {
  SINGLE = 'single',
  MULTI = 'multi'
}
const enum OperateType {
  BUTTON = 'button',
  ICON = 'icon',
  RADIO = 'radio'
}
const defaultOption: Table.IPageOpt = {
  height: PAGE_HEIGHT,
  currentPage: 1,
  total: 0,
  pageCount: 7,
  pageSizes: [10, 20, 30, 40, 50],
  pageSize: 10
}

// 复选框位置类型
const enum selectionPosType {
  TOP = 'top',
  END = 'end'
}

const ASC = 'ascending'
const DESC = 'descending'

const DEFAULT_SORT = 'descending'

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
  private activeSort: any = {}
  // 默认排序
  private defaultSortObj: any = {}
  // 第一次加载初始化状态 完成后 设置false
  private isStart = true

  private checked = false

  private _oldActiveSort: any = {}

  // 当前行index
  private _currentRowIndex: number
  private currentRowObject = {}

  @Watch('option.data')
  optionDataChange(newval: object[]) {
    this.tableData = newval
    this.$nextTick(() => {
      // this.$forceUpdate()
      if (this.isStart) {
        this.initDefaultOrder()
        this.isStart = false
      }
    })
  }

  @Watch('height')
  heightChange(newval: number) {
    this.setTableHeight(newval)
  }

  @Watch('currentRowObject')
  currentRowChange(newVal: object) {
    if (this.option.rowChange && isFunction(this.option.rowChange)) {
      this.option.rowChange(newVal, this._currentRowIndex)
    }
  }

  get tableColumn() {
    return this.option.column
  }

  mounted() {
    this.setTableHeight(this.height)
    this.tableData = this.option.data
  }

  /**
   * 获取默认配置sortable = true的列 对应的order属性
   * （ 列里定义的sortable=true ）
   * return {object}
   */
  _initDefaultOrderColumn() {
    const obj = Object.create([])
    this.tableColumn.map((item: any) => {
      // 配置了开启排序模式
      if (item.sortable && item.sortable !== undefined) {
        obj[item.value] = ''
      }
    })
    return obj
  }

  // 初始化 装载默认得排序对象
  private _initDefSortObj(): void {
    if (this.option.defaultSort) {
      this.option.defaultSort.forEach((item: any) => {
        this.defaultSortObj[item.prop] = item.order
      })
    }
  }

  initDefaultOrder() {
    const userColumnOrder = this._initDefaultOrderColumn()

    this._initDefSortObj()

    for (const column in userColumnOrder) {
      //  设置默认的排序
      if (this.defaultSortObj[column]) {
        userColumnOrder[column] = this.defaultSortObj[column]
      }
    }
    // 存一份副本
    this._oldActiveSort = Object.assign({}, userColumnOrder)
    // 存当前排序
    this.activeSort = Object.assign({}, userColumnOrder)

    this.initIconSort()
  }

  // 初始化sort
  initSort() {
    this._clearSortOrderService()
    this.initDefaultOrder()
    this.sortChange()
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
  rowClick(row: any, column: object, event: any) {
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
    const thNode = this.getTargetNode(e)
    // 如果是单排模式
    if (this._isSingleModel(this.option.sortMode)) {
      // 先清空所有activeSort
      this._clearSortOrderService()
    }

    this.changeSortOrderClass(thNode, order)
    this.sortOrderService(column.property, order)
    this.sortChange()
    e.stopPropagation()
    e.preventDefault()
  }

  /**
   * 处理sort icon 样式方法
   * @param {object} node dom节点对象
   * @param {string} order 目标排序order
   */
  private changeSortOrderClass(node: any, order: string) {
    this.removeAllSortOrderCls(node)
    addClass(node, order)
  }

  /**
   * 移除所有排序cls样式
   **/
  private removeAllSortOrderCls(node: any) {
    SORT_ARR.forEach(item => {
      removeClass(node, item)
    })
  }

  /**
   * 获取目标dom节点
   *
   */
  private getTargetNode(e: any) {
    const target = e.target
    let node
    // 点击了span
    if (target.className === 'caret-wrapper') {
      node = target.parentNode.parentNode.parentNode
    }
    // icon触发
    else if (target.nodeName === 'I') {
      node = target.parentNode.parentNode.parentNode.parentNode
    }
    // div rel header触发
    else if (target.nodeName === 'DIV' && target.attributes.getNamedItem('relid')) {
      node = target.parentNode.parentNode
    }
    // div cell
    else if (target.nodeName === 'DIV' && target.className == 'cell') {
      node = target.parentNode
    }
    return node
  }

  // 是否是单排模式
  private _isSingleModel(sortMode: string) {
    return sortModeType.SINGLE === sortMode
  }

  // 获取默认列的order 如果有默认值 取默认 没有默认返回降序
  private _getDefaultOrder(prop: string) {
    let order = ''
    if (this._oldActiveSort[prop]) {
      order = this._oldActiveSort[prop]
    } else {
      order = this.option.defaultOrder || DEFAULT_SORT
    }
    return order
  }

  /**
   * 表头事件回调
   */
  handleHeaderClick(column: any, e: any) {
    const target = e.target
    const prop = column.property
    if (!this.isNeedOrderChange(prop)) return

    const thNode = this.getTargetNode(e)
    const currentOrder = getCurrentSortKey(thNode.classList)

    let order = ''
    // 如果是单排模式
    if (this._isSingleModel(this.option.sortMode)) {
      // 先清空所有activeSort
      this._clearSortOrderService()
      // console.log(currentOrder, this.activeSort)
    }

    // 如果已经存在一个排序状态
    if (currentOrder !== '') {
      order = getTargetSortKey(currentOrder)
    } else {
      order = this._getDefaultOrder(prop)
    }
    // 去改变排序样式
    this.changeSortOrderClass(thNode, order)
    // 添加状态
    this.sortOrderService(prop, order)
    // 触发回调事件
    this.sortChange()
  }

  /**
   * 是否需要触发列排序  change
   *
   *  判断配置column中是否有指定的配置项sortable
   **/
  isNeedOrderChange(prop: string) {
    return this._oldActiveSort[prop]
  }

  /**
   * 排序处理服务
   * @param {string} column 排序列名
   * @param {string} order 排序字段
   */
  private sortOrderService(column: string, order: string): void {
    this.activeSort[column] = order
  }

  // 清除排序activeSort 状态
  private _clearSortOrderService() {
    for (const prop in this.activeSort) {
      this.activeSort[prop] = ''
      this.clearSortOrderCls(prop)
    }
  }

  /**
   * 清空所属icon样式
   * @param {string} column 排序列名
   */
  private clearSortOrderCls(column: string) {
    const thNode = this.getSortColDom(column)
    thNode.forEach((item: any) => {
      this.removeAllSortOrderCls(item.parentNode.parentNode)
    })
  }

  // 获取需要返给用户端的 排序值
  getActiveSortValue() {
    const obj = Object.create(null)
    for (const prop in this.activeSort) {
      if (this.activeSort[prop] !== '') {
        obj[prop] = this.activeSort[prop]
      }
    }
    return obj
  }
  /**
   * 排序回调
   */
  sortChange() {
    if (this.option.sortChange && isFunction(this.option.sortChange)) {
      // 判断数组curThead中是否存在当前节点的prop
      // console.log('sortChange ---', this.activeSort)
      this.option.sortChange(this.getActiveSortValue())
    }
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

  getTemplateRow(row: any, index: number) {
    this._currentRowIndex = index
    this.currentRowObject = row
  }

  // 图片处理
  _imageVNodeRender(props: any, item: any) {
    let dom = null
    let imageProp = Object.create(null)
    let url = ''
    if (item.formatter && isFunction(item.formatter)) {
      url = item.formatter(props.row, props.$index)
    }
    imageProp = {
      props: {
        src: url,
        fit: item.fit || 'fit'
      }
    }
    const style = item.style || 'width: 16px, height: 16px'
    dom = <el-image style={style} {...imageProp}></el-image>
    return dom
  }

  /**
   * 组合node渲染 (对象 、字符串 )2种模式
   * {
      name: 'el-image',
      style: 'width:20px; height: 20px',
      props: {
        src:
      },
      formatter: function(row: any, index: any) {
        return `data:image/png;base64,${row.appBase}`
      }
      },
    'taskName'
   *
   */
  _comboVNodeRender(props: any, item: any) {
    const vnodes = item.combo.map((it: any, index: number) => {
      let node = null
      if (it instanceof Object) {
        if (it.formatter && isFunction(it.formatter) && it.name === 'el-image') {
          it.props.src = it.formatter(props.row, props.$index)
        }
        node = this.$createElement(it.name, {
          props: it.props,
          style: it.style
        })
      } else if (typeof it === 'string') {
        node = this.$createElement('span', {}, [props.row[it]])
      }
      return node
    })
    return <div class="combo-wrapper">{vnodes}</div>
  }

  /**
   * 操作列vnode渲染
   */
  _operationsVNodeRender(props: any, item: any) {
    const operations = item.operations.map((operate: any, index: number) => {
      const type = operate.type || 'button'
      let tooltipProp = Object.create(null)
      tooltipProp = {
        props: {
          placement: 'top',
          content: '',
          'open-delay': operate.tooltipDelay || 1000
        }
      }
      if (operate.tooltip) {
        if (isFunction(operate.tooltip)) {
          tooltipProp.props.content = operate.tooltip(props.row, props.$index)
        } else if (typeof operate.tooltip === 'string') {
          tooltipProp.props.content = operate.tooltip
        } else if (operate.title && operate.title != '') {
          tooltipProp.props.content = operate.title
        } else {
          tooltipProp.props.content = operate.label
        }
      } else {
        tooltipProp.props.disabled = true
      }

      let operateDom
      const label = isFunction(operate.formatter)
        ? operate.formatter(props.row, props.$index)
        : operate.label
      if (OperateType.ICON === type) {
        operateDom = (
          <el-tooltip {...tooltipProp}>
            <i
              key={index}
              class={operate.iconName ? operate.iconName : 'el-icon-s-order'}
              on-click={() => operate.handlerClick(props.row, props.$index)}
            ></i>
          </el-tooltip>
        )
      } else if (OperateType.BUTTON === type) {
        operateDom = (
          <el-tooltip {...tooltipProp}>
            <el-button
              type="text"
              size="mini"
              key={index}
              disabled={operate.disCallBack && operate.disCallBack(props.row, props.$index)}
              on-click={() => operate.handlerClick(props.row, props.$index)}
            >
              {label}
            </el-button>
          </el-tooltip>
        )
      } else if (OperateType.RADIO == type) {
        operateDom = (
          <el-tooltip {...tooltipProp}>
            <el-radio
              v-model={this.checked}
              label={props.$index}
              on-change={() => this.getTemplateRow(props.row, props.$index)}
            ></el-radio>
          </el-tooltip>
        )
      }
      // 增加操作列回调 如果false 不显示
      if (
        operate.showCallback &&
        isFunction(operate.showCallback) &&
        !operate.showCallback(props.row, props.$index)
      ) {
        operateDom = null
      }

      return operateDom
    })
    return operations
  }

  // 渲染一列处理
  renderColumnProp(item: any) {
    let columnProps = Object.create(null)
    const tableOp = this.tableColumn
    const _getDefaultOp = (it: any) => {
      return Object.assign(
        {},
        {
          prop: it.value,
          label: it.name,
          width: it.width,
          fixed: it.fixed,
          align: it.align,
          'min-width': it.minWidth,
          'show-overflow-tooltip': true,
          formatter: it.formatter
        }
      )
    }
    columnProps = {
      props: _getDefaultOp(item)
    }

    // 图片列
    if (item.image) {
      columnProps.scopedSlots = {
        default: (props: any) => {
          return this._imageVNodeRender(props, item)
        }
      }
    }
    // 组合
    else if (item.combo && item.combo.length) {
      columnProps.scopedSlots = {
        default: (props: any) => {
          return this._comboVNodeRender(props, item)
        }
      }
    }
    // 操作列
    else if (item.operations) {
      columnProps.scopedSlots = {
        default: (props: any) => {
          return this._operationsVNodeRender(props, item)
        }
      }
    }

    if (item.formatter && isFunction(item.formatter)) {
      columnProps.scopedSlots = {
        default: (props: any) => {
          return <div domPropsInnerHTML={item.formatter(props.row, props.$index)} />
        }
      }
    }

    if (item.sortable) {
      columnProps.scopedSlots = {
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
      }
    }
    return columnProps
  }

  render() {
    let elColumn: any = {}
    elColumn = this.tableColumn.map((item: any, index: number) => {
      let elColumn = null
      let childColumn = null
      if (item.columns && item.columns.length) {
        childColumn = item.columns.map((it: any, i: number) => {
          return <el-table-column {...this.renderColumnProp(it)}></el-table-column>
        })
      }
      elColumn = <el-table-column {...this.renderColumnProp(item)}>{childColumn}</el-table-column>
      return elColumn
    })

    const columnList = []
    columnList.push(elColumn)

    if (this.option.selectionMode !== 'single') {
      if (this.option.selection) {
        const selectionElement = (
          <el-table-column
            type="selection"
            width="55"
            selectable={this.option.selectable || undefined}
          ></el-table-column>
        )
        if (selectionPosType.TOP === this.option.selectionPos) {
          columnList.unshift(selectionElement)
        } else {
          columnList.push(selectionElement)
        }
      }
    }

    // table属性
    const vprops: any = {
      props: {
        height: this.tableHeight,
        showHeader: this.option.isHeader,
        stripe: this.option.stripe,
        'highlight-current-row': this.option.highlightCurrentRow,
        data: this.tableData
      },
      on: {
        'row-click': this.rowClick,
        'selection-change': this.handleSelectionChange,
        'header-click': this.handleHeaderClick
      }
    }
    return (
      <div class="vpandora-table">
        <el-table ref="table" {...vprops}>
          {columnList}
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
