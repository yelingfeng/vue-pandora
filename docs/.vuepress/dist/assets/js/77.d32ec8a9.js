;(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    880: function(t, e, a) {
      'use strict'
      a.r(e)
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
              for (var t = 0; t < 10; t++)
                this.table.data.push({
                  id: t + 1,
                  code: t + 1,
                  name: '物料名称' + t,
                  spec: '物料名称1' + t,
                  unitName: '吨'
                })
            },
            radioChange: function(t) {
              console.log('传给后台的值', t)
            },
            clear: function() {
              this.$refs.selectTable.clear()
            }
          }
        },
        o = a(58),
        n = Object(o.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
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
                        table: t.table,
                        columns: t.table.columns,
                        'max-height': 540,
                        keywords: { label: 'name', value: 'id' }
                      },
                      on: { radioChange: t.radioChange },
                      scopedSlots: t._u([
                        {
                          key: 'footer',
                          fn: function() {
                            return [
                              a(
                                'el-button',
                                {
                                  staticStyle: { 'margin-top': '15px' },
                                  attrs: { type: 'primary' },
                                  on: { click: t.clear }
                                },
                                [t._v('footer插槽')]
                              )
                            ]
                          },
                          proxy: !0
                        },
                        {
                          key: 'toolbar',
                          fn: function() {
                            return [
                              a(
                                'el-button',
                                {
                                  staticStyle: { 'margin-bottom': '15px' },
                                  attrs: { type: 'primary' },
                                  on: { click: t.clear }
                                },
                                [t._v('toolbar插槽')]
                              )
                            ]
                          },
                          proxy: !0
                        }
                      ])
                    }),
                    t._v(' '),
                    a(
                      'el-button',
                      {
                        staticStyle: { 'margin-left': '15px' },
                        attrs: { type: 'primary' },
                        on: { click: t.clear }
                      },
                      [t._v('清空选中')]
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
      e.default = n.exports
    }
  }
])
