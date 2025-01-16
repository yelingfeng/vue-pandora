;(window.webpackJsonp = window.webpackJsonp || []).push([
  [52],
  {
    846: function(e, o, n) {
      'use strict'
      n.r(o)
      n(62)
      var t = {
          name: 'linkageDemo',
          data: function() {
            return {
              queryData: {
                likeCargoNo: null,
                likeBookNo: null,
                likeTransportNo: null,
                likeCargoName: null,
                name: null
              },
              likeBookNoList: []
            }
          },
          computed: {
            opts: function() {
              var e = this
              return {
                likeCargoNo: {
                  label: '货源编号',
                  comp: 'el-input',
                  event: {
                    change: function(o) {
                      return e.handleBranchCode(o)
                    }
                  }
                },
                likeBookNo: {
                  label: 'v-select单选',
                  comp: 'v-select',
                  placeholder: '请先输入货源编号',
                  bind: function(o) {
                    return {
                      disabled: null == o.likeCargoNo || '' == o.likeCargoNo,
                      optionSource: e.likeBookNoList
                    }
                  }
                },
                likeTransportNo: { label: '运单编号', comp: 'el-input' },
                likeCargoName: { label: '货品名称', comp: 'el-input' },
                name: { label: '姓名', comp: 'el-input' }
              }
            },
            getQueryData: function() {
              var e = this.queryData
              return {
                likeCargoNo: e.likeCargoNo,
                likeBookNo: e.likeBookNo,
                likeTransportNo: e.likeTransportNo,
                likeCargoName: e.likeCargoName,
                name: e.name
              }
            }
          },
          methods: {
            handleBranchCode: function(e) {
              console.log('货源编号事件', e), this.recordStepsList()
            },
            recordStepsList: function(e) {
              this.likeBookNoList = [
                { label: '前纺一车间', key: 'W1' },
                { label: '前纺二车间', key: 'W2' },
                { label: '前纺三车间', key: 'W3' }
              ]
            },
            conditionEnter: function(e) {
              ;(this.queryData = e), console.log('最终条件', this.getQueryData)
            }
          }
        },
        l = n(58),
        r = Object(l.a)(
          t,
          function() {
            var e = this,
              o = e.$createElement,
              n = e._self._c || o
            return n(
              'v-layout-page',
              [
                n(
                  'v-layout-page-item',
                  [
                    n('v-query-condition', {
                      ref: 'queryCondition',
                      attrs: { opts: e.opts },
                      on: { submit: e.conditionEnter },
                      scopedSlots: e._u([
                        {
                          key: 'footerBtn',
                          fn: function() {
                            return [
                              n(
                                'el-button',
                                {
                                  attrs: { type: 'danger' },
                                  on: {
                                    click: function(o) {
                                      return e.$refs.queryCondition.resetHandle()
                                    }
                                  }
                                },
                                [e._v('重置')]
                              ),
                              e._v(' '),
                              n(
                                'el-button',
                                {
                                  attrs: { type: 'primary' },
                                  on: {
                                    click: function(o) {
                                      return e.$refs.queryCondition.checkHandle()
                                    }
                                  }
                                },
                                [e._v('查询')]
                              )
                            ]
                          },
                          proxy: !0
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
      o.default = r.exports
    }
  }
])
