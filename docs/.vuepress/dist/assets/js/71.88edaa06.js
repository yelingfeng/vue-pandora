;(window.webpackJsonp = window.webpackJsonp || []).push([
  [71],
  {
    872: function(e, t, a) {
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
                  { label: '物料名称', width: '149px', prop: 'name' },
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
              for (var e = 0; e < 1e4; e++)
                this.table.data.push({
                  id: e,
                  code: e,
                  name: '物料名称' + e,
                  spec:
                    '物料名称物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名称' +
                    e,
                  unitName: '吨'
                })
            },
            selectionChange: function(e, t) {
              console.log('复选框', e), console.log('复选框--id', t)
            }
          }
        },
        n = a(58),
        i = Object(n.a)(
          l,
          function() {
            var e = this.$createElement,
              t = this._self._c || e
            return t(
              'v-layout-page',
              [
                t(
                  'v-layout-page-item',
                  [
                    t('v-select-table', {
                      attrs: {
                        table: this.table,
                        columns: this.table.columns,
                        'use-virtual': '',
                        keywords: { label: 'name', value: 'id' },
                        multiple: ''
                      },
                      on: { selectionChange: this.selectionChange }
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
      t.default = i.exports
    }
  }
])
