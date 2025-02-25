;(window.webpackJsonp = window.webpackJsonp || []).push([
  [139],
  {
    943: function(n, e, a) {
      'use strict'
      a.r(e)
      var t = a(58),
        l = Object(t.a)(
          {},
          function() {
            var n = this,
              e = n.$createElement,
              a = n._self._c || e
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': n.$parent.slotKey } },
              [
                a('h1', { attrs: { id: 'usage' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#usage' } }, [n._v('#')]),
                  n._v(' Usage')
                ]),
                n._v(' '),
                a('h2', { attrs: { id: 'demo' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#demo' } }, [n._v('#')]),
                  n._v(' demo')
                ]),
                n._v(' '),
                a(
                  'common-democode',
                  { attrs: { title: '基本用法', description: '基本table用法' } },
                  [
                    a(
                      'highlight-code',
                      { attrs: { slot: 'codeText', lang: 'vue' }, slot: 'codeText' },
                      [
                        a('div', { staticClass: 'language- extra-class' }, [
                          a('pre', [
                            a('code', [
                              n._v(
                                "<template>\n  <el-row :gutter=\"20\">\n    <el-col :span=\"16\" :offset=\"4\">\n      <h1>demo01</h1>\n      <VForm :option=\"formObj\" ref=\"form\"></VForm>\n      <VTable :option=\"tableOpt\" :height=\"tableHeight\"></VTable>\n    </el-col>\n  </el-row>\n</template>\n<script lang=\"ts\">\n  // @ is an alias to /src\n  import { Component, Vue, Ref } from 'vue-property-decorator'\n  import axios from 'axios'\n  @Component({})\n  export default class Demo01 extends Vue {\n    @Ref() readonly form!: any\n    formObj: any = {\n      inline: true,\n      labelPosition: 'right',\n      labelWidth: '100',\n      btnPos: 'right',\n      items: [\n        {\n          label: '任务名称',\n          type: 'text',\n          comOpt: {\n            id: 'taskName',\n            width: 210,\n            disabled: false,\n            show: true,\n            placeholder: '',\n            value: ''\n          }\n        },\n        {\n          label: '任务内容',\n          type: 'text',\n          comOpt: {\n            id: 'taskContent',\n            width: 210,\n            disabled: false,\n            show: false,\n            placeholder: '',\n            value: ''\n          }\n        },\n        {\n          label: '目标',\n          type: 'text',\n          comOpt: {\n            id: 'targetIpInfo',\n            width: 210,\n            disabled: false,\n            show: true,\n            placeholder: '',\n            value: ''\n          }\n        },\n        {\n          label: '创建日期',\n          type: 'date',\n          comOpt: {\n            id: 'queryCreateTime',\n            clearable: false,\n            value: '',\n            type: 'datetimerange',\n            disabled: false,\n            width: '210',\n            pickOptions: {}\n          }\n        },\n        {\n          label: '更新日期',\n          type: 'date',\n          comOpt: {\n            id: 'queryUpdateTime',\n            clearable: false,\n            value: '',\n            type: 'datetimerange',\n            disabled: false,\n            width: '210',\n            pickOptions: {}\n          }\n        },\n        {\n          label: '任务状态',\n          type: 'select',\n          comOpt: {\n            id: 'taskStatusId',\n            value: '0',\n            width: 210,\n            disabled: false,\n            data: [\n              { name: '全部', value: '0' },\n              { name: '未提交', value: '1' },\n              { name: '已提交', value: '2' },\n              { name: '查询中', value: '3' },\n              { name: '已完成', value: '4' }\n            ]\n          }\n        },\n        {\n          label: '文件状态',\n          type: 'select',\n          wrap: true,\n          comOpt: {\n            id: 'fileStatusId',\n            value: '0',\n            width: 210,\n            disabled: false,\n            show: true,\n            data: [\n              { name: '全部', value: '0' },\n              { name: '未下载', value: '1' },\n              { name: '已下载', value: '2' }\n            ]\n          }\n        }\n      ],\n      btns: [\n        {\n          comOpt: {\n            id: 'query',\n            value: '查询',\n            width: 210,\n            disabled: false,\n            click: this.querySearchAction\n          }\n        },\n        {\n          comOpt: {\n            id: 'query',\n            value: '新建',\n            width: 210,\n            disabled: false,\n            click: this.addSearchAction\n          }\n        }\n      ]\n    }\n    private tableOpt: any = {\n      stripe: true,\n      column: [\n        { name: '序号', value: 'index', fixed: 'left', width: 50, align: 'center' },\n        { name: '任务名称', value: 'taskName', fixed: 'left', align: 'center' },\n        { name: '创建时间', value: 'createTime', align: 'center' },\n        { name: '更新时间', value: 'updateTime', align: 'center' },\n        { name: '任务状态', value: 'taskStatusName', align: 'center' },\n        { name: '任务内容', value: 'taskContent', align: 'center' },\n        { name: '任务结果', value: 'jobResult', align: 'center' },\n        {\n          name: '操作',\n          value: '',\n          align: 'center',\n          fixed: 'right',\n          width: 150,\n          operations: [\n            {\n              label: '详情',\n              type: 'label',\n              disCallBack() {\n                return false\n              },\n              handlerClick: (row: any) => {\n                console.log(row)\n              }\n            },\n            {\n              label: '编辑',\n              type: 'label',\n              handlerClick: (row: any) => {\n                console.log(row)\n              }\n            },\n            {\n              label: '删除',\n              type: 'label',\n              disCallBack(row: any) {},\n              handlerClick: (row: any) => {}\n            }\n          ]\n        }\n      ],\n      data: [],\n      // 是否分页\n      pagination: true,\n      // 分页参数\n      pageOpt: {\n        currentPage: 1,\n        total: 0,\n        pageSizes: [10, 20, 30, 40, 50],\n        pageSize: 10\n      }\n    }\n    tableHeight = 400\n\n    querySearchAction() {\n      const formValue = this.form.getValue()\n      console.log(this, formValue)\n    }\n    addSearchAction() {\n      this.$message.info('add')\n    }\n\n    mounted() {\n      axios.get('/api/tablelist').then(resp => {\n        const list = resp.data.data.list as Array<object>\n        this.tableOpt.data = list\n      })\n    }\n  }\n  </script>\n"
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = l.exports
    }
  }
])
