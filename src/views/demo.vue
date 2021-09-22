<template>
  <div>
    <VForm :option="formObj" ref="form" isShow="isFormShow"></VForm>
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

  private isFormShow = true

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

  private cascadeOp = [
    {
      value: 'zhinan',
      label: '指南',
      children: [
        {
          value: 'shejiyuanze',
          label: '设计原则',
          children: [
            {
              value: 'yizhi',
              label: '一致'
            },
            {
              value: 'fankui',
              label: '反馈'
            },
            {
              value: 'xiaolv',
              label: '效率'
            },
            {
              value: 'kekong',
              label: '可控'
            }
          ]
        },
        {
          value: 'daohang',
          label: '导航',
          children: [
            {
              value: 'cexiangdaohang',
              label: '侧向导航'
            },
            {
              value: 'dingbudaohang',
              label: '顶部导航'
            }
          ]
        }
      ]
    },
    {
      value: 'zujian',
      label: '组件',
      children: [
        {
          value: 'basic',
          label: 'Basic',
          children: [
            {
              value: 'layout',
              label: 'Layout 布局'
            },
            {
              value: 'color',
              label: 'Color 色彩'
            },
            {
              value: 'typography',
              label: 'Typography 字体'
            },
            {
              value: 'icon',
              label: 'Icon 图标'
            },
            {
              value: 'button',
              label: 'Button 按钮'
            }
          ]
        },
        {
          value: 'form',
          label: 'Form',
          children: [
            {
              value: 'radio',
              label: 'Radio 单选框'
            },
            {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            },
            {
              value: 'input',
              label: 'Input 输入框'
            },
            {
              value: 'input-number',
              label: 'InputNumber 计数器'
            },
            {
              value: 'select',
              label: 'Select 选择器'
            },
            {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            },
            {
              value: 'switch',
              label: 'Switch 开关'
            },
            {
              value: 'slider',
              label: 'Slider 滑块'
            },
            {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            },
            {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            },
            {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            },
            {
              value: 'upload',
              label: 'Upload 上传'
            },
            {
              value: 'rate',
              label: 'Rate 评分'
            },
            {
              value: 'form',
              label: 'Form 表单'
            }
          ]
        },
        {
          value: 'data',
          label: 'Data',
          children: [
            {
              value: 'table',
              label: 'Table 表格'
            },
            {
              value: 'tag',
              label: 'Tag 标签'
            },
            {
              value: 'progress',
              label: 'Progress 进度条'
            },
            {
              value: 'tree',
              label: 'Tree 树形控件'
            },
            {
              value: 'pagination',
              label: 'Pagination 分页'
            },
            {
              value: 'badge',
              label: 'Badge 标记'
            }
          ]
        },
        {
          value: 'notice',
          label: 'Notice',
          children: [
            {
              value: 'alert',
              label: 'Alert 警告'
            },
            {
              value: 'loading',
              label: 'Loading 加载'
            },
            {
              value: 'message',
              label: 'Message 消息提示'
            },
            {
              value: 'message-box',
              label: 'MessageBox 弹框'
            },
            {
              value: 'notification',
              label: 'Notification 通知'
            }
          ]
        },
        {
          value: 'navigation',
          label: 'Navigation',
          children: [
            {
              value: 'menu',
              label: 'NavMenu 导航菜单'
            },
            {
              value: 'tabs',
              label: 'Tabs 标签页'
            },
            {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            },
            {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            },
            {
              value: 'steps',
              label: 'Steps 步骤条'
            }
          ]
        },
        {
          value: 'others',
          label: 'Others',
          children: [
            {
              value: 'dialog',
              label: 'Dialog 对话框'
            },
            {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            },
            {
              value: 'popover',
              label: 'Popover 弹出框'
            },
            {
              value: 'card',
              label: 'Card 卡片'
            },
            {
              value: 'carousel',
              label: 'Carousel 走马灯'
            },
            {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }
          ]
        }
      ]
    },
    {
      value: 'ziyuan',
      label: '资源',
      children: [
        {
          value: 'axure',
          label: 'Axure Components'
        },
        {
          value: 'sketch',
          label: 'Sketch Templates'
        },
        {
          value: 'jiaohu',
          label: '组件交互文档'
        }
      ]
    }
  ]

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
          isNumberInput: true,
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
          type: 'password',
          autocomplete: 'on',
          value: ''
        }
      },
      {
        label: '测试select',
        type: 'select',
        comOpt: {
          id: 'mountSelect',
          width: 310,
          disabled: false,
          placeholder: '',
          value: 3,
          data: [
            {
              name: '1月',
              value: 1
            },
            {
              name: '2月',
              value: 2
            },
            {
              name: '3月',
              value: 3
            }
          ],
          change: this.changeDisabled.bind(this)
        }
      },
      {
        label: '测试cascade',
        type: 'cascade',
        comOpt: {
          id: 'cascadeTest',
          width: 310,
          placeholder: '请输入',
          disabled: false,
          value: '',
          data: [],
          cascadeOption: {
            options: []
          }
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
          change(v: any) {
            console.log(v)
          },
          dateOption: {
            startplaceholder: '开始日期',
            endplaceholder: '结束日期',
            pickOptions: {},
            valueSeparator: '.',
            valueFormat: 'timestamp'
          }
        }
      },
      {
        label: '测试日期',
        type: 'date',
        comOpt: {
          id: 'queryTest',
          value: '',
          type: 'date',
          disabled: false,
          width: '210',
          change(v: any) {
            console.log(v)
          },
          dateOption: {
            startplaceholder: '开始日期',
            endplaceholder: '结束日期',
            pickOptions: {},
            valueFormat: 'yyyy-MM-dd'
          }
        }
      },
      {
        label: '测试年',
        type: 'date',
        comOpt: {
          id: 'queryTestYear',
          value: '',
          type: 'year',
          disabled: false,
          width: '210',
          dateOption: {
            valueFormat: 'yyyy'
          },
          change(v: any) {
            console.log(v)
          }
        }
      },
      {
        label: '测试月',
        type: 'date',
        comOpt: {
          id: 'queryTestMonth',
          type: 'month',
          width: '210',
          change(v: any) {
            console.log(v)
          },
          dateOption: {
            format: 'M',
            valueFormat: 'MM'
          }
        }
      },
      {
        label: '测试Radio',
        type: 'radio',
        required: true,
        comOpt: {
          id: 'queryRadio',
          value: '1',
          disabled: false,
          width: '210',
          data: [
            { value: '1', name: 'B1' },
            { value: '2', name: 'B2' },
            { value: '3', name: 'B3' }
          ],
          change(v: any) {
            console.log(v)
          }
        }
      },
      {
        label: '测试checkbox',
        type: 'checkbox',
        required: true,
        comOpt: {
          id: 'queryCheckbox',
          value: ['1', '2', '3'],
          disabled: false,
          width: '210',
          data: [
            { value: '1', name: 'CHECK1' },
            { value: '2', name: 'CHECK2' },
            { value: '3', name: 'CHECK3' }
          ],
          change(v: any) {
            console.log(v)
          }
        }
      },
      {
        label: '附件',
        type: 'upload',
        show: true,
        comOpt: {
          id: 'uploadComp',
          disabled: false,
          uploadOption: {
            buttonText: '选择文件',
            tipText: '只能上传jpg、png、gif、bmp、jpeg、doc、docx、pdf、lxs、xlsx、zip、rar文件',
            limit: 5,
            //是否显示已上传文件列表
            showFileList: false,
            // 是否在选取文件后立即进行上传
            autoUpload: true,
            httpRequest: function(file: any) {
              console.log(file)
            },
            beforeUpload: function(file: any) {
              console.log(file)
              // 判断文件格式
              if (file.name.split('.')[1] != 'xls' && file.name.split('.')[1] != 'xlsx') {
                return false
              }
            },
            onPreview: function() {},
            onRemove: function() {},
            onFileChange: function() {},
            onSuccess: function() {}
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
    // 汇总航
    summary: {
      sumText: '提现总数',
      summaryMethod: function(param: any) {
        const { columns, data } = param
        const sums: any = []
        columns.forEach((column: any, index: number) => {
          if (index === 0) {
            sums[index] = '提现总数'
            return
          }
          const values = data.map((item: any) => Number(item[column.property]))
          if (!values.every((value: any) => isNaN(value))) {
            sums[index] = values.reduce((prev: any, curr: any) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
            sums[index] += ' 元'
          } else {
            sums[index] = 'N/A'
          }
        })
        console.log(sums)
        const s = ['', '', '', '提现总数', '0 元', '']
        return s
      }
    },
    column: [
      { name: '序号', value: 'orderNum', fixed: 'left', width: 50, align: 'center' },
      { name: '机房名称', value: 'roomName', fixed: 'left', align: 'center' },
      { name: '所属局别', value: 'bureauName', align: 'center', sortable: true },
      { name: '机房编码', value: 'no', align: 'center' },
      { name: '机房地址', value: 'roomAddress', align: 'center' },
      {
        name: '相关操作',
        align: 'center',
        // fixed: 'right',
        width: 180,
        showOverflowTooltip: false,
        operations: [
          {
            label: '修改',
            tooltip: false,
            handlerClick: this.handleEdit
          },
          {
            label: '删除',
            tooltip: false,
            handlerClick: this.deleteEvent
          },
          {
            label: '启用',
            tooltip: false,
            disCallBack(rows: any, index: any) {
              return rows.isChecked
            },
            handlerClick: this.switchEvent
          },
          {
            label: '禁用',
            tooltip: false,
            disCallBack(rows: any, index: any) {
              return !rows.isChecked
            },
            handlerClick: this.switchEvent
          }
        ]
      }
      // operations: [
      //   {
      //     label: '自定义',
      //     type: 'icon',
      //     tooltip: '自定义',
      //     iconName: 'el-icon-user',
      //     showCallback(row: any, index: number) {
      //       return row.orderNum !== 4
      //     }
      //   },
      //   {
      //     label: '修改',
      //     type: 'icon',
      //     title: '修改',
      //     iconName: 'el-icon-eleme',
      //     disCallBack() {
      //       return false
      //     },
      //     handlerClick: this.editInfo
      //   },
      //   {
      //     label: '删除',
      //     type: 'icon',
      //     title: '删除',
      //     iconName: 'el-icon-delete',
      //     disCallBack() {
      //       return false
      //     },
      //     handlerClick: this.deleteInfo
      //   },
      //   {
      //     label: '删除',
      //     type: 'button',
      //     disCallBack(row: any, index: number) {
      //       return index === 3
      //     },
      //     formatter(row: any, index: number) {
      //       return index === 4 ? '123' : row.roomName
      //     },
      //     handlerClick: this.deleteInfo
      //   }
      // ]
      // }
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

  handleEdit() {}
  switchEvent() {}

  deleteEvent() {}

  editInfo() {}

  deleteInfo() {}

  changeDisabled(prop: any) {
    console.log(prop)

    this.form.setDisabled([{ id: 'cascadeTest', value: prop === 1 }])
  }

  handleSortChange(result: any) {
    console.log(result)
  }
  tableHeight = '400'

  querySearchAction() {
    const formValue = this.form.getValue()
    console.log(formValue)
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

    this.form.setItemData('cascadeTest', this.cascadeOp)
  }
}
</script>

<style lang="less"></style>
