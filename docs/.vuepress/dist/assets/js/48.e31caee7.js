;(window.webpackJsonp = window.webpackJsonp || []).push([
  [48],
  {
    841: function(t, e, n) {
      'use strict'
      n.r(e)
      var i = {
          data: function() {
            return {
              dialogSelectEnt: !1,
              entSelectType: '',
              entList: [
                {
                  id: 107,
                  entName: '上海某某电子商务有限公司',
                  entCode: '60003627',
                  entType: null,
                  entIdPcloud: '717380413542105088'
                }
              ]
            }
          },
          mounted: function() {
            this.entSelectType = this.entList[0].id
          },
          methods: {
            openDialog: function() {
              this.dialogSelectEnt = !0
            },
            selectType: function(t) {
              ;(this.entSelectType = t.id), (this.dialogSelectEnt = !1)
            },
            cancel: function() {
              this.dialogSelectEnt = !1
            }
          }
        },
        l = n(58),
        o = Object(l.a)(
          i,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'v-layout-page',
              [
                n(
                  'v-layout-page-item',
                  [
                    n('el-button', { attrs: { type: 'danger' }, on: { click: t.openDialog } }, [
                      t._v('基本弹窗')
                    ])
                  ],
                  1
                ),
                t._v(' '),
                n(
                  'v-dialog',
                  {
                    staticClass: 'ent-choose',
                    attrs: { title: '请选择企业', width: '40%', visible: t.dialogSelectEnt },
                    on: { 'update:visible': t.cancel }
                  },
                  [
                    n(
                      'div',
                      { staticClass: 'select-ent-box flex-box flex-col' },
                      t._l(t.entList, function(e) {
                        return n(
                          'div',
                          {
                            key: e.id,
                            staticClass: 'radio-line-item t-overflow-hidden',
                            class: t.entSelectType === e.id ? 'radioSelected' : '',
                            staticStyle: { width: '100%' },
                            on: {
                              click: function(n) {
                                return t.selectType(e)
                              }
                            }
                          },
                          [
                            t.entSelectType === e.id
                              ? n('i', { staticClass: 'el-icon-check icon-check' })
                              : t._e(),
                            t._v('\n        ' + t._s(e.entName) + '\n        '),
                            n('span', { staticStyle: { color: '#999' } }, [
                              t._v('(企业编码:' + t._s(e.entCode) + ')')
                            ])
                          ]
                        )
                      }),
                      0
                    ),
                    t._v(' '),
                    n(
                      'div',
                      { staticClass: 'dialog-footer', attrs: { slot: 'footer' }, slot: 'footer' },
                      [
                        n(
                          'el-button',
                          {
                            on: {
                              click: function(e) {
                                t.dialogSelectEnt = !1
                              }
                            }
                          },
                          [t._v('取 消')]
                        ),
                        t._v(' '),
                        n(
                          'el-button',
                          {
                            attrs: { type: 'primary' },
                            on: {
                              click: function(e) {
                                t.dialogSelectEnt = !1
                              }
                            }
                          },
                          [t._v('确 定')]
                        )
                      ],
                      1
                    )
                  ]
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
      e.default = o.exports
    }
  }
])
