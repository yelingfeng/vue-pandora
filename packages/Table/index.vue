<script lang="tsx">
// 分页高度
const PAGE_HEIGHT = 50

import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'
import pagination from './pagination.vue'

const enum OperateType {
  BUTTON = 'button',
  ICON = 'icon'
}
const defaultOption: Table.IPageOpt = {
  currentPage: 1,
  total: 0,
  pageSizes: [10, 20, 30, 40, 50],
  pageSize: 10
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
  private height: number
  // 表格详细数据
  private tableData: object[] = []
  private tableHeight: number

  @Watch('option.data')
  optionDataChange(newval: object[]) {
    this.$nextTick(() => {
      this.tableData = newval
      // this.$forceUpdate()
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
    this.setTableHeight(this.height)
    this.tableData = this.option.data
  }

  /**
   * @name: setTableHeight
   * @param {number} val 传入的表格高度
   * @return:
   * @description: 计算表格高度
   */
  setTableHeight(val: number) {
    const paginationHeight = this.option.pagination ? PAGE_HEIGHT : 0
    this.tableHeight = val - paginationHeight
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
            scopedSlots={{
              default: (props: any) => {
                const operations = item.operations.map((operate: any, index: number) => {
                  const type = operate.type || 'button'
                  let operateDom
                  if (OperateType.ICON === type) {
                    operateDom = (
                      <i
                        key={index}
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
      } else {
        com = (
          <el-table-column
            type={item.value}
            prop={item.value}
            label={item.name}
            width={item.width}
            fixed={item.fixed}
            align={item.align}
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
          height={this.tableHeight}
          data={this.tableData}
          show-header={this.option.isHeader}
          stripe={this.option.stripe}
          style={this.tableHeight}
          on-row-click={this.rowClick}
          on-selection-change={this.handleSelectionChange}
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
