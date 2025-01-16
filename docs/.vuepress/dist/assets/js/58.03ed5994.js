;(window.webpackJsonp = window.webpackJsonp || []).push([
  [58],
  {
    856: function(e, l, a) {
      'use strict'
      a.r(l)
      var t = {
          data: function() {
            return {
              selectVlaue: null,
              stepList: [
                { label: '开始', id: 1 },
                { label: 'POSUI', id: 2 },
                { label: '11', id: 3 },
                { label: 'GX123', id: 4 },
                { label: '烘干破碎', id: 5 },
                { label: '车间仓库', id: 6 },
                { label: 'ui3333', id: 7 },
                { label: 'hhh333', id: 8 }
              ]
            }
          },
          methods: {
            selectChange: function(e) {
              console.log('selectChange', e, this.selectVlaue)
            }
          }
        },
        n = a(58),
        s = Object(n.a)(
          t,
          function() {
            var e = this,
              l = e.$createElement,
              a = e._self._c || l
            return a(
              'v-layout-page',
              [
                a(
                  'v-layout-page-item',
                  [
                    a('v-select', {
                      attrs: {
                        placeholder: '请选择工序',
                        optionSource: e.stepList,
                        valueKey: 'label'
                      },
                      on: { change: e.selectChange },
                      model: {
                        value: e.selectVlaue,
                        callback: function(l) {
                          e.selectVlaue = l
                        },
                        expression: 'selectVlaue'
                      }
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
      l.default = s.exports
    }
  }
])
