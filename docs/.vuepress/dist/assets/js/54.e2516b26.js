;(window.webpackJsonp = window.webpackJsonp || []).push([
  [54],
  {
    850: function(e, o, t) {
      'use strict'
      t.r(o)
      var l = {
          name: 'labelRenderDemo',
          data: function() {
            return {
              queryData: {
                likeCargoNo: null,
                likeBookNo: null,
                likeTransportNo: null,
                likeCargoName: null
              }
            }
          },
          computed: {
            opts: function() {
              var e = this.$createElement
              return {
                likeCargoNo: { label: '货源编号', comp: 'el-input' },
                likeBookNo: {
                  labelRender: function() {
                    return e(
                      'el-tooltip',
                      { attrs: { content: '自定义label', placement: 'top' } },
                      [e('div', { style: 'color:blue;' }, ['订单编号'])]
                    )
                  },
                  placeholder: '自定义label',
                  comp: 'el-input'
                },
                likeTransportNo: { label: '运单编号', comp: 'el-input' },
                likeCargoName: { label: '货品名称', comp: 'el-input' }
              }
            },
            getQueryData: function() {
              var e = this.queryData
              return {
                likeCargoNo: e.likeCargoNo,
                likeBookNo: e.likeBookNo,
                likeTransportNo: e.likeTransportNo,
                likeCargoName: e.likeCargoName
              }
            }
          },
          methods: {
            conditionEnter: function(e) {
              console.log('查询条件', e),
                (this.queryData = e),
                console.log('最终条件', this.getQueryData)
            }
          }
        },
        n = t(58),
        a = Object(n.a)(
          l,
          function() {
            var e = this.$createElement,
              o = this._self._c || e
            return o(
              'v-layout-page',
              [
                o(
                  'v-layout-page-item',
                  [
                    o('v-query-condition', {
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
      o.default = a.exports
    }
  }
])
