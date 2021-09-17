<template>
  <div>
    <el-button @click.native="demoClick">手动table排序重置</el-button>
    <VForm :option="formObj" ref="form"></VForm>
    <VTable
      ref="table"
      :option="tableOpt"
      :height="tableHeight"
      @handleSelectionChange="selectionChange"
      @handleSizePageChange="handleSizeChange"
      @handleCurrentPageChange="handleCurrentChange"
    ></VTable>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Ref } from 'vue-property-decorator'
import VForm from '../../packages/Form/index.vue'
import VTable from '../../packages/Table/index.vue'
import axios from 'axios'

const iconStyle = { display: 'inline-block', fontSize: '18px', color: '#1890ff' }

@Component({})
export default class Default extends Vue {
  private vaildStatus = true

  @Ref() readonly form!: VForm
  @Ref() readonly table!: VTable
  formObj: any = {
    inline: true,
    labelPosition: 'right',
    labelWidth: '100',
    btnPos: 'right',
    items: [
      {
        label: '任务名称',
        type: 'text',
        required: true,
        wrap: true,
        comOpt: {
          id: 'taskName',
          width: 210,
          disabled: false,
          show: true,
          placeholder: '',
          value: ''
        }
      },
      {
        label: '任务内容',
        type: 'text',
        required: true,
        show: true,
        comOpt: {
          id: 'taskContent',
          width: 210,
          disabled: false,
          placeholder: '',
          value: ''
        }
      },
      {
        label: '文本Group',
        type: 'textGroup',
        required: true,
        show: true,
        comOpt: {
          id: 'taskGroup',
          width: 310,
          disabled: false,
          placeholder: '',
          value: '1,2'
        }
      },
      {
        label: '创建日期',
        type: 'date',
        comOpt: {
          id: 'queryCreateTime',
          clearable: false,
          value: '',
          type: 'daterange',
          disabled: false,
          width: '210',
          pickOptions: {
            format: 'yyyy-MM-dd HH:mm:ss'
          }
        }
      },
      {
        label: '更新日期',
        type: 'date',
        comOpt: {
          id: 'queryUpdateTime',
          clearable: false,
          value: '',
          type: 'datetimerange',
          disabled: false,
          width: '210',
          pickOptions: {}
        }
      },
      {
        label: '任务状态',
        type: 'select',
        comOpt: {
          id: 'taskStatusId',
          value: ['0', '1'],
          width: 210,
          collapseTags: true,
          multiple: true,
          disabled: false,
          change: function(val: any) {},
          focus: function(val: any, origindata: any) {
            console.log(val, origindata)
          },
          blur: function(val: any, origindata: any) {
            // console.log(val, origindata)
          },
          data: [
            { name: '全部', value: '0' },
            { name: '未提交', value: '1' },
            { name: '已提交', value: '2' },
            { name: '查询中', value: '3' },
            { name: '已完成', value: '4' }
          ]
        }
      }
    ],
    btns: [
      {
        comOpt: {
          id: 'iconTest',
          type: 'icon',
          title: 'this is icon test',
          tooltipDelay: 500,
          className: 'el-icon-edit',
          click: this.iconClickAction
        }
      },
      {
        comOpt: {
          id: 'query',
          value: '查询',
          width: 210,
          icon: 'el-icon-search',
          disabled: false,
          click: this.querySearchAction
        }
      },
      {
        comOpt: {
          id: 'query',
          value: '新建',
          icon: 'el-icon-plus',
          width: 210,
          disabled: false,
          click: this.addSearchAction
        }
      }
    ]
  }
  private tableOpt: any = {
    stripe: true,
    isHeader: true,
    // selection: true,
    // // 复选框位置 前还是后 top ，end
    // selectionPos: 'top',
    // selectionMode: 'multi',
    // selectable: function(row: any, index: any) {
    //   console.log(row, index)
    //   return index !== 4
    // },
    // 排序模式 single 独立排序 ,multi 多项排序
    sortMode: 'multi',
    // 默认升序还是降序
    defaultOrder: 'descending',
    // 默认排序字段列
    defaultSort: [
      { prop: 'taskName', order: 'descending' },
      { prop: 'taskContent', order: 'ascending' }
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
        name: '序号',
        type: 'index',
        fixed: 'left',
        width: 50,
        align: 'center'
      },
      {
        name: '任务名称2',
        value: 'taskName2',
        fixed: 'left',
        width: 200,
        align: 'center',
        links: {
          dataRef: {
            value: 'tid',
            name: 'tname'
          },
          props: {
            type: 'danger'
          },
          click: (row: any, e: any) => {
            console.log(row, e)
          }
        }
      },
      {
        name: '任务名称',
        value: 'taskName',
        fixed: 'left',
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
        ]
      },
      {
        name: '嵌套测试',
        align: 'center',
        columns: [
          {
            name: '任务名称',
            value: 'taskName',
            fixed: 'left',
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
      // {
      //   name: '权限测试',
      //   value: 'permissionList',
      //   align: 'center',
      //   popFormatter(row) {
      //     // console.log(row)
      //     const result = row.permissionList.map(item => {
      //       const nums = item.nums
      //       const time = item.lastTime
      //       const name = item.permissionName
      //       let dom = `<span style='font-size:16px'>${name}</span>`
      //       dom += '</br>'
      //       dom += `访问次数:${nums};最近访问:${time}`
      //       return `<div>${dom}</div>`
      //     })
      //     return result.join('<br/>')
      //   },
      //   iconList: [
      //     { class: 'el-icon-message', key: 'Sms', style: iconStyle },
      //     { class: 'el-icon-user', key: 'Contacts', style: iconStyle },
      //     { class: 'el-icon-microphone', key: 'MediaRecorder', style: iconStyle },
      //     { class: 'el-icon-camera', key: 'AutoCamera', style: iconStyle },
      //     { class: 'el-icon-location-information', key: 'GetLocationInfo', style: iconStyle }
      //   ]
      // },
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
            type: 'radio',
            // title: '添加一个title属性',
            tooltip: function(row: any) {
              return row.taskContent + '流量链接趋势'
            }
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
      height: 40,
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

  querySearchAction() {
    const formValue = this.form.getValue()
    console.log(formValue)
    // 设置textGroup值
    this.form.setShow([
      {
        id: 'taskGroup',
        value: !this.vaildStatus
      }
    ])

    // 设置动态必填
    this.form.setRequired([{ id: 'taskName', value: !this.vaildStatus }])
    this.vaildStatus = !this.vaildStatus

    // 设置下拉框禁用
    this.form.setDisabled([
      {
        id: 'taskStatusId',
        value: true
      }
    ])
  }
  addSearchAction() {
    this.$message.info('add')
    this.form.setValue([{ id: 'taskContent', value: 'testtest' }])
    this.form.setDisabled([{ id: 'taskContent', value: true }])
    console.log(this.form.getValue())
  }

  selectionChange(row: any) {
    console.log(row)
  }
  iconClickAction() {
    console.log(1)
  }
  mounted() {
    this.getTableList()
  }

  getTableList() {
    axios.get('/api/tablelist').then(resp => {
      const { data, totals } = resp.data
      const list = data.list as Array<object>
      this.tableOpt.data = list
      this.tableOpt.pageOpt.total = totals
    })
  }
}
</script>

<style lang="less"></style>
