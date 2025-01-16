;(window.webpackJsonp = window.webpackJsonp || []).push([
  [62],
  {
    863: function(e, t, a) {
      'use strict'
      a.r(t)
      a(77)
      var l = {
          data: function() {
            return {
              table: {
                data: [],
                columns: [
                  { label: '物料编号', width: '100px', prop: 'code' },
                  { label: '物料名称', width: '149px', prop: 'name', noShowTip: !0 },
                  { label: '规格', width: '149px', prop: 'spec' },
                  { label: '单位', width: '110px', prop: 'unitName' }
                ]
              }
            }
          },
          created: function() {
            this.initData()
          },
          methods: {
            initData: function() {
              for (var e = 0; e < 10; e++)
                this.table.data.push({
                  id: e + 1,
                  code: e + 1,
                  name:
                    '物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名称1' +
                    e,
                  spec: '物料名称1' + e,
                  unitName: '吨'
                })
            },
            radioChange: function(e, t) {
              console.log('传给后台的值', e, t)
            },
            clear: function() {
              this.$refs.selectTable.clear()
            }
          }
        },
        n = a(58),
        i = Object(n.a)(
          l,
          function() {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t
            return a(
              'v-layout-page',
              [
                a(
                  'v-layout-page-item',
                  { staticStyle: { display: 'flex', 'flex-direction': 'row' } },
                  [
                    a('v-select-table', {
                      ref: 'selectTable',
                      staticStyle: { width: '50%' },
                      attrs: {
                        table: e.table,
                        columns: e.table.columns,
                        'max-height': 540,
                        keywords: { label: 'name', value: 'id' }
                      },
                      on: {
                        radioChange: function() {
                          for (var t = [], a = arguments.length; a--; ) t[a] = arguments[a]
                          return e.radioChange(t, '单选')
                        }
                      }
                    }),
                    e._v(' '),
                    a(
                      'el-button',
                      {
                        staticStyle: { 'margin-left': '15px' },
                        attrs: { type: 'primary' },
                        on: { click: e.clear }
                      },
                      [e._v('清空选中')]
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
      t.default = i.exports
    }
  }
])
