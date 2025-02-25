;(window.webpackJsonp = window.webpackJsonp || []).push([
  [53],
  {
    849: function(e, l, t) {
      'use strict'
      t.r(l)
      t(194), t(11), t(77), t(137)
      var o = [
          { label: '前纺一车间', key: 'W1' },
          { label: '前纺二车间', key: 'W2' },
          { label: '前纺三车间', key: 'W3' }
        ],
        a = {
          name: 'queryData',
          data: function() {
            var e = this.$createElement
            return {
              loading: !1,
              queryData: {
                likeCargoNo: null,
                likeBookNo: null,
                likeTransportNo: null,
                likeCargoName: null,
                workshopNum: null,
                workshopNum1: null,
                date1: null
              },
              sexList: [],
              hobbyList: [],
              opts: {
                likeCargoNo: { label: '货源编号', comp: 'el-input' },
                likeBookNo: {
                  labelRender: function() {
                    return e(
                      'el-tooltip',
                      { attrs: { content: '自定义label', placement: 'top' } },
                      [e('div', ['订单编号'])]
                    )
                  },
                  placeholder: '自定义label',
                  comp: 'el-input'
                },
                likeTransportNo: {
                  label: '运单编号',
                  comp: 'el-input',
                  slotName: 'likeTransportNo'
                },
                likeCargoName: { label: '货品名称', comp: 'el-input', bind: {} },
                workshopNum1: {
                  label: '车间2',
                  comp: 'el-select',
                  child: o.reduce(function(e, l) {
                    return (
                      e.push({
                        comp: 'el-option',
                        value: l.key,
                        bind: { label: l.label, key: l.key }
                      }),
                      e
                    )
                  }, [])
                },
                workshopNum: {
                  label: '车间',
                  comp: 'el-select',
                  changeEvent: 'change',
                  bind: {},
                  child: [
                    { comp: 'el-option', value: 'W1', bind: { label: '前纺一车间', key: 'W1' } },
                    { comp: 'el-option', value: 'W2', bind: { label: '前纺二车间', key: 'W2' } },
                    { comp: 'el-option', value: 'W3', bind: { label: '前纺三车间', key: 'W3' } }
                  ]
                },
                date1: {
                  label: '日期',
                  comp: 'el-date-picker',
                  bind: { valueFormat: 'yyyy-MM-dd' }
                }
              },
              checkQuery: {}
            }
          },
          computed: {
            moreCheckList: function() {
              return [
                { label: '姓名', comp: 'el-input', prop: 'name' },
                { label: '年龄', comp: 'el-input', prop: 'age' },
                {
                  label: '性别',
                  comp: 'el-select',
                  prop: 'sex',
                  valueKey: 'value',
                  list: this.sexList
                },
                {
                  label: '爱好',
                  comp: 'v-select',
                  prop: 'hobby',
                  span: 2,
                  bind: { multiple: !0, optionSource: this.hobbyList, valueKey: 'value' }
                },
                { label: '合同号', comp: 'el-input', prop: 'contractNo' },
                { label: '供应商', comp: 'el-input', prop: 'supplier' },
                { label: '磅单号', comp: 'el-input', prop: 'balanceCode' },
                { label: '车牌号', comp: 'el-input', prop: 'license' },
                { label: '备注', comp: 'el-input', prop: 'remark' },
                { label: '检验员', comp: 'el-input', prop: 'inspector' },
                { label: '取样人', comp: 'el-input', prop: 'sampler' },
                { label: '审核人', comp: 'el-input', prop: 'reviewer' },
                { label: '其他检验项', comp: 'el-input', prop: 'physicsInspection' },
                { label: '实际数量', comp: 'el-input', prop: 'factQuantity' }
              ]
            }
          },
          watch: {
            checkQuery: {
              handler: function(e, l) {
                for (var t = 0; t < Object.keys(l).length; t++)
                  this.$delete(this.opts, Object.keys(l)[t])
                this.opts = Object.assign({}, this.opts, e)
                for (var o = 0; o < Object.keys(this.opts).length; o++)
                  this.queryData[Object.keys(this.opts)[o]] = null
              },
              deep: !0
            }
          },
          created: function() {
            this.getList()
          },
          methods: {
            getList: function() {
              ;(this.sexList = [
                { label: '男', value: '1' },
                { label: '女', value: '2' }
              ]),
                (this.hobbyList = [
                  { label: '吉他', value: '0' },
                  { label: '看书', value: '1' },
                  { label: '美剧', value: '2' },
                  { label: '旅游', value: '3' },
                  { label: '音乐', value: '4' }
                ])
            },
            getChildCheck: function(e) {
              this.checkQuery = e
            },
            conditionEnter: function(e) {
              var l = this
              ;(this.loading = !0),
                (this.queryData = e),
                console.log('最终条件', this.queryData),
                setTimeout(function() {
                  l.loading = !1
                }, 2e3)
            }
          }
        },
        n = t(58),
        i = Object(n.a)(
          a,
          function() {
            var e = this,
              l = e.$createElement,
              t = e._self._c || l
            return t(
              'v-layout-page',
              [
                t(
                  'v-layout-page-item',
                  [
                    t('v-query-condition', {
                      ref: 'queryCondition',
                      attrs: {
                        opts: e.opts,
                        isDropDownSelectMore: '',
                        loading: e.loading,
                        moreCheckList: e.moreCheckList
                      },
                      on: { submit: e.conditionEnter, getCheckList: e.getChildCheck },
                      scopedSlots: e._u([
                        {
                          key: 'likeTransportNo',
                          fn: function(l) {
                            var o = l.param
                            return [
                              t('el-input', {
                                attrs: { clearable: '', placeholder: '自定义插槽输入框' },
                                model: {
                                  value: o.likeTransportNo,
                                  callback: function(l) {
                                    e.$set(o, 'likeTransportNo', l)
                                  },
                                  expression: 'param.likeTransportNo'
                                }
                              })
                            ]
                          }
                        }
                      ])
                    })
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
      l.default = i.exports
    }
  }
])
