<template>
  <div :class="nameList.container">
    <el-tabs v-model="activeName" class="pageTabs">
      <el-tab-pane label="已启用名单">
        <div :class="nameList.formBox">
          <VForm :option="formObj1" ref="form1" class="pageForm nameListForm1"></VForm>
        </div>
        <div :class="nameList.contentBox">
          <div :class="nameList.operBox">
            <div :class="nameList.operButton" @click="handleExportBtn">
              <i :class="nameList.icon"></i>
              <span>导出</span>
            </div>
          </div>
          <div :class="nameList.tableBox">
            <VTable
              ref="table1"
              :option="tableOpt1"
              :height="tableHeight"
              @handleCurrentPageChange="handleCurrentChange1"
              @handleSizePageChange="handleSizeChange1"
            ></VTable>
          </div>
          <el-dialog
            title="查看详情"
            :visible.sync="dialogVisible1"
            width="570px"
            :close-on-click-modal="closeOnClickModal"
          >
            <div :class="nameList.detailCon">
              <DetailCon :data="detailData1"></DetailCon>
            </div>
          </el-dialog>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已停用名单">
        <div :class="nameList.formBox">
          <VForm :option="formObj2" ref="form2" class="pageForm"></VForm>
        </div>
        <div :class="nameList.contentBox">
          <div :class="nameList.operBox">
            <div :class="nameList.operButton" @click="handleExportBtn">
              <i :class="nameList.icon"></i>
              <span>导出</span>
            </div>
          </div>
          <div :class="nameList.tableBox">
            <VTable
              ref="table2"
              :option="tableOpt2"
              :height="tableHeight"
              @handleCurrentPageChange="handleCurrentChange2"
              @handleSizePageChange="handleSizeChange2"
            ></VTable>
          </div>
          <el-dialog
            title="查看详情"
            :visible.sync="dialogVisible1"
            width="570px"
            :close-on-click-modal="closeOnClickModal"
          >
            <div :class="nameList.detailCon">
              <DetailCon :data="detailData1"></DetailCon>
            </div>
          </el-dialog>
        </div>
      </el-tab-pane>
      <el-tab-pane label="即将到期名单">
        <div :class="nameList.formBox">
          <VForm :option="formObj3" ref="form3" class="pageForm nameListForm2"></VForm>
        </div>
        <div :class="nameList.contentBox">
          <div :class="nameList.operBox">
            <div :class="nameList.operButton" @click="handleExportBtn">
              <i :class="nameList.icon"></i>
              <span>导出</span>
            </div>
          </div>
          <div :class="nameList.tableBox">
            <VTable
              ref="table3"
              :option="tableOpt3"
              :height="tableHeight"
              @handleCurrentPageChange="handleCurrentChange3"
              @handleSizePageChange="handleSizeChange3"
            ></VTable>
          </div>
          <el-dialog
            title="查看详情"
            :visible.sync="dialogVisible1"
            width="570px"
            :close-on-click-modal="closeOnClickModal"
          >
            <div :class="nameList.detailCon">
              <DetailCon :data="detailData1"></DetailCon>
            </div>
          </el-dialog>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { Form } from './../../types/VForm'
interface ISelectList {
  name: string
  value: string
}

@Component({
  components: {}
})
export default class NameList extends Vue {
  @Ref() readonly form1!: Form
  @Ref() readonly form2!: Form
  @Ref() readonly form3!: Form

  private closeOnClickModal = false
  private activeName = 0
  private timeList = [1, 7, 30]

  private labelList: Array<ISelectList> = []
  private auditUserList: Array<ISelectList> = []
  private applyUserList: Array<ISelectList> = []
  private buildUserList: Array<ISelectList> = []
  private formItems1 = {
    strategyType: '',
    target: '',
    source: '',
    performSys: '',
    gkSEndTime: this.currentTime(0),
    gkEEndTime: this.currentTime(1),
    gkSStartTime: this.currentTime(0),
    gkEStartTime: this.currentTime(1),
    label: '',
    takeEffectSTime: this.currentTime(0),
    takeEffectETime: this.currentTime(1)
  }
  private formObj1: any = {
    inline: true,
    btnPos: 'right',
    labelWidth: 90,
    items: [
      {
        label: '处置类型：',
        type: 'select',
        comOpt: {
          id: 'strategyType',
          value: this.formItems1.strategyType,
          width: 240,
          disabled: false,
          data: [
            { name: '全部', value: '' },
            { name: 'IP', value: 1 },
            { name: 'DOMAIN/DNS', value: 2 },
            { name: 'URL', value: 3 }
          ]
        }
      },
      {
        label: '关键词：',
        type: 'text',
        comOpt: {
          id: 'target',
          width: 240,
          disabled: false,
          show: true,
          placeholder: '请输入检索内容',
          value: this.formItems1.target
        }
      },
      {
        label: '来源：',
        type: 'select',
        comOpt: {
          id: 'source',
          value: this.formItems1.source,
          width: 240,
          disabled: false,
          data: [
            { name: '全部', value: '' },
            { name: '互联网FZ', value: 1 },
            { name: '网安', value: 2 },
            { name: '工业互联网', value: 3 }
          ]
        },
        wrap: true
      },
      {
        label: '处置方式：',
        type: 'select',
        comOpt: {
          id: 'performSys',
          value: this.formItems1.performSys,
          width: 240,
          disabled: false,
          data: [
            { name: '全部', value: '' },
            { name: '省口GK', value: 1 },
            { name: 'IDC/ISP系统', value: 2 },
            { name: 'DNS系统', value: 3 }
          ]
        }
      },
      {
        label: 'GK到期时间：',
        type: 'date',
        comOpt: {
          id: 'gkEndTime',
          type: 'datetimerange',
          clearable: false,
          value: [this.formItems1.gkSEndTime, this.formItems1.gkEEndTime],
          disabled: false,
          width: 240
        }
      },
      {
        label: 'GK开始时间：',
        type: 'date',
        comOpt: {
          id: 'gkStartTime',
          type: 'datetimerange',
          clearable: false,
          value: [this.formItems1.gkSStartTime, this.formItems1.gkEStartTime],
          disabled: false,
          width: 240
        },
        wrap: true
      },
      {
        label: '标签：',
        type: 'select',
        comOpt: {
          id: 'label',
          value: this.formItems1.label,
          width: 240,
          disabled: false,
          placeholder: '请选择标签',
          data: this.labelList
        }
      },
      {
        label: '拦截次数：',
        type: 'text',
        comOpt: {
          id: 'intercept',
          width: 115,
          disabled: false,
          show: true,
          placeholder: ' ',
          value: ''
        }
      },
      {
        label: '-',
        type: 'text',
        comOpt: {
          id: 'intercept2',
          width: 100,
          disabled: false,
          show: true,
          placeholder: ' ',
          value: ''
        },
        wrap: true
      },
      {
        label: '生效时间：',
        type: 'radio',
        comOpt: {
          id: 'timeSelect',
          data: [
            { name: '最近一天', value: 0 },
            { name: '最近一周', value: 1 },
            { name: '最近一月', value: 2 }
          ],
          value: 0,
          change: this.handleNewTimeBtn
        }
      },
      {
        label: '',
        type: 'date',
        comOpt: {
          id: 'takeEffectTime',
          type: 'datetimerange',
          clearable: false,
          value: [this.formItems1.takeEffectSTime, this.formItems1.takeEffectETime],
          disabled: false,
          width: 240
        }
      }
    ],
    btns: [
      {
        comOpt: {
          id: 'query',
          value: '查询',
          width: 90,
          disabled: false,
          click: this.handleQueryBtn
        }
      },
      {
        comOpt: {
          id: 'reset',
          value: '重置',
          width: 90,
          disabled: false,
          click: this.handleResetBtn
        }
      }
    ]
  }
  private tableHeight = 'calc(100% - 42px)'
  private tableOpt1: any = {
    stripe: true,
    column: [
      { name: '内容', value: 'target', align: 'left', width: 250, tooltip: true, fixed: true },
      { name: '处置类型', value: 'strategyType', align: 'left', fixed: true },
      {
        name: '处置方式',
        value: 'performSys',
        align: 'left',
        width: 150,
        tooltip: true,
        fixed: true
      },
      { name: '拦截次数', value: 'intercept', align: 'left', fixed: true },
      { name: '生效时间', value: 'takeEffectTime', align: 'left', sortable: true, width: 160 },
      { name: '来源', value: 'source', align: 'left', width: 200 },
      { name: '标签', value: 'label', align: 'left' },
      { name: 'GK开始时间', value: 'gkStartTime', align: 'left', sortable: true, width: 160 },
      { name: 'GK到期时间', value: 'gkEndTime', align: 'left', sortable: true, width: 160 },
      {
        name: '操作',
        value: '',
        align: 'center',
        fixed: 'right',
        width: 130,
        operations: [
          {
            label: '查看详情',
            handlerClick: (row: any) => {
              this.handleRowDetail(row)
            }
          }
        ]
      }
    ],
    defaultSort: [{ prop: 'takeEffectTime', order: 'descending' }],
    sortMode: 'single',
    data: [],
    pagination: true,
    pageOpt: {
      currentPage: 1,
      total: 0,
      pageSizes: [10, 20, 30, 40, 50],
      pageSize: 50
    },
    sortChange: this.handleSortChange1
  }
  private dialogVisible1 = false
  private detailData1: any = {}
  private formItems2 = {
    strategyType: '',
    target: '',
    source: '',
    performSys: '',
    gkSEndTime: this.currentTime(0),
    gkEEndTime: this.currentTime(1),
    gkSStartTime: this.currentTime(0),
    gkEStartTime: this.currentTime(1),
    label: '',
    auditUser: '',
    applySTime: this.currentTime(0),
    applyETime: this.currentTime(1),
    applyUser: '',
    takeEffectSTime: this.currentTime(0),
    takeEffectETime: this.currentTime(1)
  }
  private formObj2: any = {
    inline: true,
    btnPos: 'right',
    labelWidth: 98,
    items: [
      {
        label: '处置类型：',
        type: 'select',
        comOpt: {
          id: 'strategyType',
          value: this.formItems2.strategyType,
          width: 240,
          disabled: false,
          data: [
            { name: '全部', value: '' },
            { name: 'IP', value: 1 },
            { name: 'DOMAIN/DNS', value: 2 },
            { name: 'URL', value: 3 }
          ]
        }
      },
      {
        label: '关键词：',
        type: 'text',
        comOpt: {
          id: 'target',
          width: 240,
          disabled: false,
          show: true,
          placeholder: '请输入检索内容',
          value: this.formItems2.target
        }
      },
      {
        label: '来源：',
        type: 'select',
        comOpt: {
          id: 'source',
          value: this.formItems2.source,
          width: 240,
          disabled: false,
          data: [
            { name: '全部', value: '' },
            { name: '互联网FZ', value: 1 },
            { name: '网安', value: 2 },
            { name: '工业互联网', value: 3 }
          ]
        },
        wrap: true
      },
      {
        label: '处置方式：',
        type: 'select',
        comOpt: {
          id: 'performSys',
          value: this.formItems2.performSys,
          width: 240,
          disabled: false,
          data: [
            { name: '全部', value: '' },
            { name: '省口GK', value: 1 },
            { name: 'IDC/ISP系统', value: 2 },
            { name: 'DNS系统', value: 3 }
          ]
        }
      },
      {
        label: 'GK到期时间：',
        type: 'date',
        comOpt: {
          id: 'gkEndTime',
          type: 'datetimerange',
          clearable: false,
          value: [this.formItems2.gkSEndTime, this.formItems2.gkEEndTime],
          disabled: false,
          width: 240
        }
      },
      {
        label: 'GK开始时间：',
        type: 'date',
        comOpt: {
          id: 'gkStartTime',
          type: 'datetimerange',
          clearable: false,
          value: [this.formItems2.gkSStartTime, this.formItems2.gkEStartTime],
          disabled: false,
          width: 240
        },
        wrap: true
      },
      {
        label: '标签：',
        type: 'select',
        comOpt: {
          id: 'label',
          value: this.formItems2.label,
          width: 240,
          disabled: false,
          placeholder: '请选择标签',
          data: this.labelList
        }
      },
      {
        label: '停用审核人员：',
        type: 'select',
        comOpt: {
          id: 'auditUser',
          value: this.formItems2.auditUser,
          width: 240,
          disabled: false,
          data: this.auditUserList
        }
      },
      {
        label: '停用申请时间：',
        type: 'date',
        comOpt: {
          id: 'applyTime',
          type: 'datetimerange',
          clearable: false,
          value: [this.formItems2.applySTime, this.formItems2.applyETime],
          disabled: false,
          width: 240
        },
        wrap: true
      },
      {
        label: '申请人员：',
        type: 'select',
        comOpt: {
          id: 'applyUser',
          value: this.formItems2.applyUser,
          width: 240,
          disabled: false,
          data: this.applyUserList
        }
      },
      {
        label: '停用生效时间：',
        type: 'radio',
        comOpt: {
          id: 'timeSelect',
          data: [
            { name: '最近一天', value: 0 },
            { name: '最近一周', value: 1 },
            { name: '最近一月', value: 2 }
          ],
          value: 0,
          change: this.handleNewTimeBtn
        }
      },
      {
        label: '',
        type: 'date',
        comOpt: {
          id: 'takeEffectTime',
          type: 'datetimerange',
          clearable: false,
          value: [this.formItems2.takeEffectSTime, this.formItems2.takeEffectETime],
          disabled: false,
          width: 240
        }
      }
    ],
    btns: [
      {
        comOpt: {
          id: 'query',
          value: '查询',
          width: 90,
          disabled: false,
          click: this.handleQueryBtn
        }
      },
      {
        comOpt: {
          id: 'reset',
          value: '重置',
          width: 90,
          disabled: false,
          click: this.handleResetBtn
        }
      }
    ]
  }
  private tableOpt2: any = {
    stripe: true,
    column: [
      { name: '内容', value: 'target', align: 'left', width: 250, tooltip: true, fixed: true },
      { name: '处置类型', value: 'strategyType', align: 'left', fixed: true },
      {
        name: '处置方式',
        value: 'performSys',
        align: 'left',
        width: 150,
        tooltip: true,
        fixed: true
      },
      {
        name: '停用生效时间',
        value: 'takeEffectTime',
        align: 'left',
        sortable: 'custom',
        width: 160,
        fixed: true
      },
      { name: '停用审核人员', value: 'auditUser', align: 'left', width: 110 },
      { name: '停用申请时间', value: 'applyTime', align: 'left', sortable: 'custom', width: 160 },
      { name: '申请人员', value: 'applyUser', align: 'left', width: 100 },
      { name: '来源', value: 'source', align: 'left', width: 200 },
      { name: '标签', value: 'label', align: 'left' },
      { name: 'GK开始时间', value: 'gkStartTime', align: 'left', sortable: 'custom', width: 160 },
      { name: 'GK到期时间', value: 'gkEndTime', align: 'left', sortable: 'custom', width: 160 },
      {
        name: '操作',
        value: '',
        align: 'center',
        fixed: 'right',
        width: 130,
        operations: [
          {
            label: '查看详情',
            handlerClick: (row: any) => {
              this.handleRowDetail(row)
            }
          }
        ]
      }
    ],
    defaultSort: [{ prop: 'takeEffectTime', order: 'descending' }],
    sortMode: 'single',
    data: [],
    pagination: true,
    pageOpt: {
      currentPage: 1,
      total: 0,
      pageSizes: [10, 20, 30, 40, 50],
      pageSize: 50
    },
    sortChange: this.handleSortChange2
  }
  private formItems3 = {
    strategyType: '',
    target: '',
    source: '',
    examineType: '',
    label: '',
    gkSStartTime: this.currentTime(0),
    gkEStartTime: this.currentTime(1),
    buildUser: '',
    performSys: '',
    gkSEndTime: this.currentTime(0),
    gkEEndTime: this.currentTime(1),
    takeEffectSTime: this.currentTime(0),
    takeEffectETime: this.currentTime(1)
  }
  private formObj3: any = {
    inline: true,
    btnPos: 'right',
    labelWidth: 90,
    items: [
      {
        label: '处置类型：',
        type: 'select',
        comOpt: {
          id: 'strategyType',
          value: this.formItems3.strategyType,
          width: 240,
          disabled: false,
          data: [
            { name: '全部', value: '' },
            { name: 'IP', value: 1 },
            { name: 'DOMAIN/DNS', value: 2 },
            { name: 'URL', value: 3 }
          ]
        }
      },
      {
        label: '关键词：',
        type: 'text',
        comOpt: {
          id: 'target',
          width: 240,
          disabled: false,
          show: true,
          placeholder: '请输入检索内容',
          value: this.formItems3.target
        }
      },
      {
        label: '来源：',
        type: 'select',
        comOpt: {
          id: 'source',
          value: this.formItems3.source,
          width: 240,
          disabled: false,
          data: [
            { name: '全部', value: '' },
            { name: '互联网FZ', value: 1 },
            { name: '网安', value: 2 },
            { name: '工业互联网', value: 3 }
          ]
        },
        wrap: true
      },
      {
        label: '指令类型：',
        type: 'select',
        comOpt: {
          id: 'examineType',
          value: this.formItems3.examineType,
          width: 240,
          disabled: false,
          data: [
            { name: '全部', value: '' },
            { name: '封堵', value: 1 },
            { name: '停用', value: 2 }
          ]
        }
      },
      {
        label: '标签：',
        type: 'select',
        comOpt: {
          id: 'label',
          value: this.formItems3.label,
          width: 240,
          disabled: false,
          placeholder: '请选择标签',
          data: this.labelList
        }
      },
      {
        label: 'GK开始时间：',
        type: 'date',
        comOpt: {
          id: 'gkStartTime',
          type: 'datetimerange',
          clearable: false,
          value: [this.formItems3.gkSStartTime, this.formItems3.gkEStartTime],
          disabled: false,
          width: 240
        },
        wrap: true
      },
      {
        label: '新建人员：',
        type: 'select',
        comOpt: {
          id: 'buildUser',
          value: this.formItems3.buildUser,
          width: 240,
          disabled: false,
          data: this.buildUserList
        }
      },
      {
        label: '处置方式：',
        type: 'select',
        comOpt: {
          id: 'performSys',
          value: this.formItems3.performSys,
          width: 240,
          disabled: false,
          data: [
            { name: '全部', value: '' },
            { name: '省口GK', value: 1 },
            { name: 'IDC/ISP系统', value: 2 },
            { name: 'DNS系统', value: 3 }
          ]
        }
      },
      {
        label: 'GK即将到期：',
        type: 'date',
        comOpt: {
          id: 'gkEndTime',
          type: 'datetimerange',
          clearable: false,
          value: [this.formItems3.gkSEndTime, this.formItems3.gkEEndTime],
          disabled: false,
          width: 240
        },
        wrap: true
      },
      {
        label: '拦截次数：',
        type: 'text',
        comOpt: {
          id: 'intercept',
          width: 115,
          disabled: false,
          show: true,
          placeholder: ' ',
          value: ''
        }
      },
      {
        label: '-',
        type: 'text',
        comOpt: {
          id: 'intercept2',
          width: 100,
          disabled: false,
          show: true,
          placeholder: ' ',
          value: ''
        }
      },
      {
        label: '生效时间：',
        type: 'date',
        comOpt: {
          id: 'takeEffectTime',
          type: 'datetimerange',
          clearable: false,
          value: [this.formItems3.takeEffectSTime, this.formItems3.takeEffectETime],
          disabled: false,
          width: 240
        }
      }
    ],
    btns: [
      {
        comOpt: {
          id: 'query',
          value: '查询',
          width: 90,
          disabled: false,
          click: this.handleQueryBtn
        }
      },
      {
        comOpt: {
          id: 'reset',
          value: '重置',
          width: 90,
          disabled: false,
          click: this.handleResetBtn
        }
      }
    ]
  }
  private tableOpt3: any = {
    stripe: true,
    column: [
      { name: '内容', value: 'target', align: 'left', width: 250, tooltip: true, fixed: true },
      { name: '处置类型', value: 'strategyType', align: 'left', fixed: true },
      {
        name: '处置方式',
        value: 'performSys',
        align: 'left',
        width: 150,
        tooltip: true,
        fixed: true
      },
      {
        name: 'GK到期时间',
        value: 'gkEndTime',
        align: 'left',
        sortable: 'custom',
        width: 160,
        fixed: true
      },
      { name: '拦截次数', value: 'intercept', align: 'left', fixed: true },
      { name: '来源', value: 'source', align: 'left', width: 200 },
      { name: 'GK开始时间', value: 'gkStartTime', align: 'left', sortable: 'custom', width: 160 },
      { name: '生效时间', value: 'takeEffectTime', align: 'left', sortable: 'custom', width: 160 },
      {
        name: '操作',
        value: '',
        align: 'center',
        fixed: 'right',
        width: 130,
        operations: [
          {
            label: '查看详情',
            handlerClick: (row: any) => {
              this.handleRowDetail(row)
            }
          }
        ]
      }
    ],
    defaultSort: [{ prop: 'gkEndTime', order: 'ascending' }],
    sortMode: 'single',
    data: [],
    pagination: true,
    pageOpt: {
      currentPage: 1,
      total: 0,
      pageSizes: [10, 20, 30, 40, 50],
      pageSize: 50
    },
    sortChange: this.handleSortChange3
  }
  currentTime(num: number) {
    const time = [
      // dayjs()
      //   .subtract(1, 'day')
      //   .format('YYYY-MM-DD HH:mm:ss'),
      // dayjs().format('YYYY-MM-DD HH:mm:ss')
    ]
    // return time[num]
  }
  handleNewTimeBtn(flag: number) {
    const time = [
      // dayjs()
      //   .subtract(this.timeList[flag], 'day')
      //   .format('YYYY-MM-DD HH:mm:ss'),
      // dayjs().format('YYYY-MM-DD HH:mm:ss')
    ]
    // this.form1.setValue([{ id: 'takeEffectTime', value: time }])
  }
  handleQueryBtn() {}
  handleResetBtn() {}
  handleExportBtn() {}
  handleRowDetail(row: object) {}
  handleSortChange1(obj: any) {
    console.log('1', obj)
  }
  handleSortChange2(obj: any) {
    console.log('2', obj)
  }
  handleSortChange3(obj: any) {
    console.log('3', obj)
  }
  handleCurrentChange1() {}
  handleSizeChange1() {}
  handleCurrentChange2() {}
  handleSizeChange2() {}
  handleCurrentChange3() {}
  handleSizeChange3() {}
  mounted() {
    this.form1.setValue([{ id: 'timeSelect', value: 0 }])
  }
}
</script>

<style module="nameList">
.container {
  width: 100%;
  height: 100%;
}
.formBox {
  width: 100%;
  border: 1px solid rgba(229, 229, 229, 1);
  margin-bottom: 20px;
  padding: 10px;
  background: #ffffff;
}
.contentBox {
  width: 100%;
  height: calc(100% - 274px);
  border: 1px solid rgba(229, 229, 229, 1);
  padding: 15px 20px 0 20px;
  background: #ffffff;
}
.operBox {
  width: 100%;
  height: 30px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}
.tableBox {
  width: 100%;
  height: calc(100% - 35px);
}
.detailCon {
  width: 100%;
}
.operButton {
  font-size: 16px;
  font-weight: 400;
  color: #4d4d4d;
  line-height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 5px;
}
.operButton:hover {
  background: #cce4f6;
}
.operButton i {
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 5px;
}
.icon {
  /* background: url('~@/assets/images/oper/export.png') no-repeat; */
}
</style>
