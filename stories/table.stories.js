import VTable from '../packages/Table/index.vue'

export default { title: 'Table' }

export const Default = () => ({
  name: 'VTableDefault',
  components: {
    VTable
  },
  template: `
    <VTable ref="table"  :option="tableOpt" :height="tableHeight"></VTable>
  `,
  data() {
    return {
      tableHeight: '400',
      tableOpt: {
        stripe: true,
        isHeader: true,
        selection: true,
        rowChange: (row, index) => {
          console.log(row, index)
        },
        column: [
          {
            name: '序号',
            value: 'index',
            fixed: 'left',
            width: 50,
            align: 'center'
          },
          {
            name: '任务名称',
            value: 'taskName',
            fixed: 'left',
            align: 'center',
            sortable: true
          },
          {
            name: '创建时间',
            value: 'createTime',
            align: 'center',
            minWidth: '100',
            sortable: true
          },
          { name: '更新时间', value: 'updateTime', align: 'center', sortable: true },
          {
            name: '任务内容',
            value: 'taskContent',
            sortable: true,
            align: 'center'
          },
          { name: '任务状态', value: 'taskStatusName', align: 'center' },
          { name: '任务结果', value: 'jobResult', align: 'center' }
        ],
        data: [],
        // 是否分页
        pagination: true,
        // 分页参数
        pageOpt: {
          height: 40,
          currentPage: 1,
          total: 0,
          pageSizes: [10, 20, 30, 40, 50],
          pageSize: 10
        }
      }
    }
  }
})
