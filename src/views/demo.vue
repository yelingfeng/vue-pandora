<template>
  <div>
    <VForm :option="formObj" ref="form"></VForm>
    <VTable
      :option="tableOpt"
      :height="tableHeight"
      @handleSelectionChange="selectionChange"
    ></VTable>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import VForm from '../../packages/Form/index.vue'
import axios from 'axios'
@Component({})
export default class Demo extends Vue {
  private vaildStatus = true

  private listData: any = [
    {
      orderNum: 1,
      roomId: 33,
      businessBureauId: 33,
      mlrBusinessBureau: null,
      bureauName: 'TEST',
      roomName: 'T-机房',
      no: 'test',
      roomType: '0',
      roomAddress: 'TBD云集中心',
      positionX: 101.75119525,
      positionY: 36.63357597,
      area: null
    },
    {
      orderNum: 2,
      roomId: 43,
      businessBureauId: 33,
      mlrBusinessBureau: null,
      bureauName: 'TEST',
      roomName: '测试5',
      no: 'JF-6',
      roomType: '0',
      roomAddress: '',
      positionX: null,
      positionY: null,
      area: null
    },
    {
      orderNum: 3,
      roomId: 44,
      businessBureauId: 33,
      mlrBusinessBureau: null,
      bureauName: 'TEST',
      roomName: '测试6',
      no: 'JF-7',
      roomType: '0',
      roomAddress: '',
      positionX: null,
      positionY: null,
      area: null
    },
    {
      orderNum: 4,
      roomId: 46,
      businessBureauId: 1,
      mlrBusinessBureau: null,
      bureauName: 'JA',
      roomName: '机房1',
      no: 'JF-9',
      roomType: '0',
      roomAddress: '',
      positionX: null,
      positionY: null,
      area: null
    },
    {
      orderNum: 5,
      roomId: 47,
      businessBureauId: 86,
      mlrBusinessBureau: null,
      bureauName: 'JC',
      roomName: '机房c',
      no: 'JF-1',
      roomType: '1',
      roomAddress: '广东省深圳市',
      positionX: null,
      positionY: null,
      area: null
    },
    {
      orderNum: 6,
      roomId: 51,
      businessBureauId: 1,
      mlrBusinessBureau: null,
      bureauName: 'JA',
      roomName: 'JF',
      no: '机房',
      roomType: '0',
      roomAddress: '上海',
      positionX: null,
      positionY: null,
      area: null
    },
    {
      orderNum: 7,
      roomId: 52,
      businessBureauId: 91,
      mlrBusinessBureau: null,
      bureauName: 'JE',
      roomName: '机房测试',
      no: '机房测试',
      roomType: '1',
      roomAddress: '北京市昌平区北七家七北路TBD云集中心16号楼',
      positionX: null,
      positionY: null,
      area: null
    }
  ]

  defaultTime: string[] = ['2020-09-04 08:00:00', '2020-09-04 10:00:00']

  @Ref() readonly form!: VForm
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
          value: '',
          input(s: any) {
            console.log(s)
          },
          blur(e: any) {
            console.log(e)
          }
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
          type: 'datetimerange',
          disabled: false,
          width: '210',
          pickOptions: {}
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
          width: '310',
          startplaceholder: '开始',
          endplaceholder: '结束',
          rangeSeparator: '至',
          align: 'right',
          defaultTime: this.defaultTime,
          pickOptions: {}
        }
      },
      {
        label: '任务状态',
        type: 'select',
        comOpt: {
          id: 'taskStatusId',
          value: '0',
          width: 210,
          disabled: false,
          data: [
            { name: '全部', value: '0' },
            { name: '未提交', value: '1', biz: 'asdasda' },
            { name: '已提交', value: '2', biz: '12332' },
            { name: '查询中', value: '3', biz: '23424' },
            { name: '已完成', value: '4', biz: '4353534' }
          ],
          change(v: any, originData: any) {
            console.log(v, originData)
          }
        }
      }
    ],
    btns: [
      {
        comOpt: {
          id: 'iconTest',
          type: 'icon',
          title: 'this is icon test',
          className: 'el-icon-edit',
          click: this.iconClickAction
        }
      },
      {
        comOpt: {
          id: 'query',
          value: '查询',
          width: 210,
          disabled: false,
          click: this.querySearchAction.bind(this)
        }
      },
      {
        comOpt: {
          id: 'add',
          value: '新建',
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
    defaultSort: [{ prop: 'bureauName', order: 'descending' }],
    sortMode: 'single',
    sortChange: this.handleSortChange,
    highlightCurrentRow: true,
    column: [
      { name: '序号', value: 'orderNum', fixed: 'left', width: 50, align: 'center' },
      { name: '机房名称', value: 'roomName', fixed: 'left', align: 'center' },
      { name: '所属局别', value: 'bureauName', align: 'center', sortable: true },
      { name: '机房编码', value: 'no', align: 'center' },
      { name: '机房地址', value: 'roomAddress', align: 'center' },
      {
        name: '相关操作',
        value: '',
        align: 'center',
        fixed: 'right',
        width: 150,
        operations: [
          {
            label: '修改',
            type: 'icon',
            title: '修改',
            iconName: 'el-icon-edit tableIcon',
            disCallBack() {
              return false
            },
            handlerClick: this.editInfo
          },
          {
            label: '删除',
            type: 'icon',
            title: '删除',
            iconName: 'el-icon-delete tableIcon',
            disCallBack() {
              return false
            },
            handlerClick: this.deleteInfo
          }
        ]
      }
    ],
    data: [], //是否分页
    pagination: true, //分页参数
    pageOpt: {
      currentPage: 1,
      total: 0,
      pageSizes: [10, 20, 30, 40, 50],
      pageSize: 10
    }
  }

  editInfo() {}

  deleteInfo() {}

  handleSortChange(result: any) {
    console.log(result)
  }
  tableHeight = '400'

  querySearchAction() {
    // const formValue = this.form.getValue()
    // // 设置textGroup值
    // this.form.setShow([
    //   {
    //     id: 'taskGroup',
    //     value: !this.vaildStatus
    //   }
    // ])

    // 设置禁用
    this.form.setBtnDisabled([
      {
        id: 'add',
        value: true
      }
    ])

    // 设置动态必填
    // this.form.setRequired([{ id: 'taskName', value: !this.vaildStatus }])
    // this.vaildStatus = !this.vaildStatus

    // this.form.setShow([
    //   {
    //     id: 'taskStatusId',
    //     value: false
    //   }
    // ])
    // // 设置下拉框禁用
    // this.form.setDisabled([
    //   {
    //     id: 'taskStatusId',
    //     value: true
    //   }
    // ])
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
    this.tableOpt.data = this.listData
  }
}
</script>

<style lang="less"></style>
