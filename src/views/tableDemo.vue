<template>
  <div>
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
@Component({})
export default class TableDemo extends Vue {
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
            valueFormat: 'yyyy-MM-dd HH:mm:ss'
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
    // 排序模式 single 独立排序 ,multi 多项排序
    sortMode: 'single',
    // 默认升序还是降序
    // defaultOrder: 'descending',
    defaultSort: [{ prop: 'findTime', order: 'descending' }],
    sortChange: undefined,
    rowChange: (row: object, index: number) => {
      console.log(row, index)
    },
    column: [
      { name: '序号', type: 'index', width: 55, align: 'left' },
      { name: '标题', value: 'username', minWidth: 100 },
      { name: '来源', value: 'c_timestamp', minWidth: 180, align: 'left' },
      { name: '发布时间', value: 'user_level', minWidth: 120 },
      { name: '采集时间', value: 'group_id', minWidth: 150 },
      { name: '作者', value: 'nickname', minWidth: 100 },
      { name: '点击量', value: 'email', minWidth: 150 },
      { name: '播放量', value: 'tel', minWidth: 150 },
      { name: '视频封皮', value: 'user_desc', minWidth: 150 },
      { name: '任务', value: 'user_desc1', minWidth: 150 },
      { name: '标签', value: 'user_desc2', minWidth: 150 }
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
    console.log(this.table)
    //this.getTableList()
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
