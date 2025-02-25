;(window.webpackJsonp = window.webpackJsonp || []).push([
  [55],
  {
    851: function(o, e, t) {
      'use strict'
      t.r(e)
      var l = {
          name: 'linkageDemo',
          data: function() {
            return {
              queryData: {
                likeCargoNo: null,
                likeBookNo: null,
                likeTransportNo: null,
                likeCargoName: null
              },
              likeBookNoList: []
            }
          },
          computed: {
            opts: function() {
              var o = this
              return {
                likeCargoNo: {
                  label: '货源编号',
                  comp: 'el-input',
                  event: {
                    change: function(e) {
                      return o.handleBranchCode(e)
                    }
                  }
                },
                likeBookNo: {
                  label: 'v-select单选',
                  comp: 'v-select',
                  placeholder: '请先输入货源编号',
                  bind: function(e) {
                    return {
                      disabled: null == e.likeCargoNo || '' == e.likeCargoNo,
                      optionSource: o.likeBookNoList
                    }
                  }
                },
                likeTransportNo: { label: '运单编号', comp: 'el-input' },
                likeCargoName: { label: '货品名称', comp: 'el-input' }
              }
            },
            getQueryData: function() {
              var o = this.queryData
              return {
                likeCargoNo: o.likeCargoNo,
                likeBookNo: o.likeBookNo,
                likeTransportNo: o.likeTransportNo,
                likeCargoName: o.likeCargoName
              }
            }
          },
          methods: {
            handleBranchCode: function(o) {
              console.log('货源编号事件', o), this.recordStepsList()
            },
            recordStepsList: function(o) {
              this.likeBookNoList = [
                { label: '前纺一车间', key: 'W1' },
                { label: '前纺二车间', key: 'W2' },
                { label: '前纺三车间', key: 'W3' }
              ]
            },
            conditionEnter: function(o) {
              console.log('查询条件', o),
                (this.queryData = o),
                console.log('最终条件', this.getQueryData)
            }
          }
        },
        n = t(58),
        i = Object(n.a)(
          l,
          function() {
            var o = this.$createElement,
              e = this._self._c || o
            return e(
              'v-layout-page',
              [
                e(
                  'v-layout-page-item',
                  [
                    e('v-query-condition', {
                      ref: 'queryCondition',
                      attrs: { opts: this.opts },
                      on: { submit: this.conditionEnter }
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
      e.default = i.exports
    }
  }
])
