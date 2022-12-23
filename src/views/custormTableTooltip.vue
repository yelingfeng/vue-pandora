<script lang="tsx">
// @ is an alias to /src
import { Component, Vue, Ref } from 'vue-property-decorator'
import VTable from '../../packages/Table/index.vue'
import axios from 'axios'
const iconStyle = { display: 'inline-block', fontSize: '18px', color: '#1890ff' }

@Component({})
export default class CustormTableTooltip extends Vue {
  private vaildStatus = true

  @Ref() readonly table!: VTable

  private tableOpt: any = {
    stripe: true,
    isHeader: true,
    border: true,
    loading: true,
    size: 'mini',
    // 排序模式 single 独立排序 ,multi 多项排序
    sortMode: 'single',
    // 默认升序还是降序
    defaultOrder: 'descending',
    // 默认排序字段列
    defaultSort: [
      { prop: 'taskName', order: 'descending' },
      { prop: 'taskContent', order: 'ascending' },
      { prop: 'vd_count', order: 'ascending' },
      { prop: 'ivd_count', order: 'ascending' }
    ],
    sortChange: (column: object) => {
      console.log(column)
      this.getTableList()
    },
    rowChange: (row: object, index: number) => {
      console.log(row, index)
    },
    column: [
      {
        name: '',
        type: 'selection',
        fixed: 'left',
        width: 50,
        align: 'center'
      },
      {
        name: '任务名称2',
        value: 'taskName',
        fixed: 'left',
        width: 200,
        align: 'center',
        // formatter: (row: any) => {
        //   return `<span style='color:#1890ff;cursor:pointer;'>${row.taskName}</span>`
        // },
        isAdsTooltip: true,
        tooltipFormatter: {
          isShowContent: false,
          popperProp: {},
          linkProp: {},
          renderEvent: [
            {
              name: '复制',
              click: prop => {
                console.log(prop)
              }
            },
            {
              name: '查看',
              click: prop => {
                console.log(prop)
              }
            }
          ]
        }
      },
      { name: '采集总数', value: 'vd_count', minWidth: 70, sortable: true },
      { name: '违规总数', value: 'ivd_count', minWidth: 70, sortable: true },

      {
        name: '任务名称',
        value: 'taskName',
        // fixed: 'left',
        align: 'center',
        combo: [
          {
            name: 'el-image',
            style: 'width:20px; height: 20px',
            props: {
              // src:
              //   'data:image/png;base64,R0lGODlhDwAPAKECAAAAzMzM/////wAAACwAAAAADwAPAAACIISPeQHsrZ5ModrLlN48CXF8m2iQ3YmmKqVlRtW4MLwWACH+H09wdGltaXplZCBieSBVbGVhZCBTbWFydFNhdmVyIQAAOw=='
            },
            formatter: function(row: any, index: any) {
              return `data:image/png;base64,${row.appBase}`
            }
          },
          'taskName'
        ],
        sortable: true,
        formatter: (row: any) => {
          return `<span style='color:#1890ff;cursor:pointer;'>${row.taskName}</span>`
        }
      },
      {
        name: '嵌套测试',
        align: 'center',
        columns: [
          {
            name: '任务名称',
            value: 'taskName',
            // fixed: 'left',
            align: 'center',
            sortable: true
          },
          {
            name: '图标',
            value: 'appBase',
            align: 'left',
            width: 50,
            image: true,
            style: 'width:16px; height: 16px'
            // formatter: function(row: any, index: any) {
            //   return `data:image/png;base64,${row.appBase}`
            // }
          }
        ]
      },
      { name: '创建时间', value: 'createTime', align: 'center', minWidth: '100', sortable: true },
      { name: '更新时间', value: 'updateTime', align: 'center', sortable: true },
      {
        name: '图片截图',
        value: 'imageList',
        align: 'center',
        minWidth: '300',
        imageList: true,
        imageConfig: {
          lazy: true,
          style: 'width: 50px; height: 50px;',
          basePath: 'http://124.126.19.246:9004/v1/resource/image/'
        }
      },
      {
        name: '任务内容',
        value: 'taskContent',
        sortable: false,
        align: 'center',
        formatter: function(row: any, index: any) {
          return `<b>${row.taskContent}</b>`
        }
      },
      { name: '任务状态', value: 'taskStatusName', align: 'center' },
      { name: '任务结果', value: 'jobResult', align: 'center' },
      {
        name: '操作',
        value: '',
        align: 'center',
        fixed: 'right',
        width: 200,
        operations: [
          {
            label: '详情',
            type: 'butto',
            tooltip: false
            // title: '添加一个title属性',
            // tooltip: function(row: any) {
            //   return row.taskContent + '流量链接趋势'
            // }
          },
          {
            label: '详情',
            type: 'icon',
            // title: '添加一个title属性',
            tooltip: function(row: any) {
              return row.taskContent + '流量链接趋势'
            },
            tooltipDelay: 500,
            // tooltip: '1流量链接趋势',
            iconName: 'el-icon-eleme    ',
            handlerClick: (row: any) => {
              console.log(row)
            }
          },
          {
            label: '编辑',
            type: 'button',
            handlerClick: (row: any) => {
              console.log(row)
            }
          },
          {
            label: '删除',
            type: 'button',
            disCallBack(row: any) {},
            handlerClick: (row: any) => {}
          },
          {
            label: '查看',
            type: 'icon',
            iconName: 'el-icon-edit',
            disCallBack(row: any) {},
            handlerClick: (row: any) => {
              console.log(row)
            }
          }
        ]
      }
    ],
    data: [],
    // 是否分页
    pagination: true,
    // 分页参数
    pageOpt: {
      height: 20,
      currentPage: 1,
      total: 0,
      pageSizes: [10, 20, 30, 40, 50],
      pageSize: 10
    }
  }
  tableHeight = '400'

  demoClick() {
    this.table.initSort()
  }

  handleSizeChange(val) {
    console.log(val)
    this.getTableList()
  }

  handleCurrentChange(val) {
    console.log(val)
    this.getTableList()
  }

  selectionChange(row: any) {
    console.log(row)
  }
  iconClickAction() {
    console.log(1)
  }
  mounted() {
    this.getTableList()

    setTimeout(() => {
      this.tableOpt.loading = false
    }, 2000)
  }

  getTableList() {
    axios.get('/api/tablelist').then(resp => {
      const { data, totals } = resp.data
      const list = data.list as Array<object>
      console.log(list)
      this.tableOpt.data = list
      this.tableOpt.pageOpt.total = totals
    })
  }

  render() {
    const vprops: any = {
      props: {
        option: this.tableOpt,
        height: this.tableHeight
      },
      on: {
        handleSelectionChange: this.selectionChange,
        handleSizePageChange: this.handleSizeChange,
        handleCurrentPageChange: this.handleCurrentChange
      }
    }

    return <VTable ref="table" {...vprops}></VTable>
  }
}
</script>
