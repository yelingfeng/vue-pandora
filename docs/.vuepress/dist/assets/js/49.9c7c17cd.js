;(window.webpackJsonp = window.webpackJsonp || []).push([
  [49],
  {
    840: function(e, t, a) {
      'use strict'
      a.r(t)
      var l = {
          name: 'form-base01',
          data: function() {
            return {
              formOption: {
                inline: !0,
                labelPosition: 'right',
                labelWidth: '100',
                btnPos: 'right',
                items: [
                  {
                    label: '任务名称',
                    type: 'text',
                    required: !0,
                    wrap: !0,
                    comOpt: {
                      id: 'taskName',
                      width: 210,
                      disabled: !1,
                      show: !0,
                      placeholder: '',
                      value: ''
                    }
                  },
                  {
                    label: '任务内容',
                    type: 'text',
                    required: !0,
                    show: !0,
                    comOpt: {
                      id: 'taskContent',
                      width: 210,
                      disabled: !1,
                      placeholder: '',
                      value: ''
                    }
                  },
                  {
                    label: '创建日期',
                    type: 'date',
                    comOpt: {
                      id: 'queryCreateTime',
                      clearable: !1,
                      value: '',
                      type: 'daterange',
                      disabled: !1,
                      width: '210',
                      pickOptions: { valueFormat: 'yyyy-MM-dd HH:mm:ss' }
                    }
                  },
                  {
                    label: '更新日期',
                    type: 'date',
                    comOpt: {
                      id: 'queryUpdateTime',
                      clearable: !1,
                      value: '',
                      type: 'datetimerange',
                      disabled: !1,
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
                      collapseTags: !0,
                      multiple: !0,
                      disabled: !1,
                      change: function(e) {},
                      focus: function(e, t) {
                        console.log(e, t)
                      },
                      blur: function(e, t) {},
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
                      className: 'el-icon-edit'
                    }
                  },
                  {
                    comOpt: {
                      id: 'query',
                      value: '查询',
                      width: 210,
                      icon: 'el-icon-search',
                      disabled: !1
                    }
                  },
                  {
                    comOpt: {
                      id: 'query',
                      value: '新建',
                      icon: 'el-icon-plus',
                      width: 210,
                      disabled: !1
                    }
                  }
                ]
              }
            }
          }
        },
        i = a(58),
        o = Object(i.a)(
          l,
          function() {
            var e = this.$createElement,
              t = this._self._c || e
            return t(
              'v-layout-page',
              [t('v-layout-page-item', [t('VForm', { attrs: { option: this.formOption } })], 1)],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = o.exports
    }
  }
])
