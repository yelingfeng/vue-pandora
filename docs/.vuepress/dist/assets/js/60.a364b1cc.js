;(window.webpackJsonp = window.webpackJsonp || []).push([
  [60],
  {
    859: function(e, l, t) {
      'use strict'
      t.r(l)
      var a = {
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
        n = t(58),
        c = Object(n.a)(
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
                    t('v-select', {
                      attrs: {
                        placeholder: '选中值将以对象形式返回',
                        optionSource: e.stepList,
                        valueKey: 'id',
                        'value-key': 'id',
                        returnObject: ''
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
      l.default = c.exports
    }
  }
])
