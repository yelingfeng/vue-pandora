;(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    869: function(e, t, a) {
      'use strict'
      a.r(t)
      var i = {
          data: function() {
            return {
              table: {
                data: [
                  { id: 1, code: 1, name: '物料名称1', spec: '物料规格1', unitName: '吨' },
                  { id: 2, code: 2, name: '物料名称2', spec: '物料规格2', unitName: '吨' },
                  { id: 3, code: 3, name: '物料名称3', spec: '物料规格3', unitName: '吨' },
                  { id: 4, code: 4, name: '物料名称4', spec: '物料规格4', unitName: '吨' },
                  { id: 5, code: 5, name: '物料名称5', spec: '物料规格5', unitName: '吨' },
                  { id: 6, code: 6, name: '物料名称6', spec: '物料规格6', unitName: '吨' },
                  { id: 7, code: 7, name: '物料名称7', spec: '物料规格7', unitName: '吨' },
                  { id: 8, code: 8, name: '物料名称8', spec: '物料规格8', unitName: '吨' },
                  { id: 9, code: 9, name: '物料名称9', spec: '物料规格9', unitName: '吨' },
                  { id: 10, code: 10, name: '物料名称10', spec: '物料规格10', unitName: '吨' },
                  { id: 11, code: 11, name: '物料名称11', spec: '物料规格11', unitName: '吨' },
                  { id: 12, code: 12, name: '物料名称12', spec: '物料规格12', unitName: '吨' },
                  { id: 13, code: 13, name: '物料名称13', spec: '物料规格13', unitName: '吨' }
                ],
                columns: [
                  { label: '物料编号', width: '100px', prop: 'code' },
                  { label: '物料名称', width: '149px', prop: 'name' },
                  { label: '规格', width: '149px', prop: 'spec' },
                  { label: '单位', width: '110px', prop: 'unitName' },
                  { label: '物料编号1', width: '149px', prop: 'code' },
                  { label: '物料名称1', width: '149px', prop: 'name' },
                  { label: '规格1', width: '149px', prop: 'spec' },
                  { label: '单位1', width: '110px', prop: 'unitName' },
                  { label: '物料编号11', width: '149px', prop: 'code' },
                  { label: '物料名称11', width: '149px', prop: 'name' },
                  { label: '规格11', width: '149px', prop: 'spec' },
                  { label: '单位11', width: '110px', prop: 'unitName' },
                  { label: '物料编号111', width: '149px', prop: 'code' },
                  { label: '物料名称111', width: '149px', prop: 'name' },
                  { label: '规格111', width: '149px', prop: 'spec' },
                  { label: '单位111', width: '110px', prop: 'unitName' }
                ]
              }
            }
          },
          methods: {
            selectionChange: function(e, t) {
              console.log('复选框', e), console.log('复选框--id', t)
            },
            clear: function() {
              this.$refs.selectTable.clear()
            }
          }
        },
        l = a(58),
        p = Object(l.a)(
          i,
          function() {
            var e = this.$createElement,
              t = this._self._c || e
            return t(
              'v-layout-page',
              [
                t(
                  'v-layout-page-item',
                  { staticStyle: { display: 'flex', 'flex-direction': 'row' } },
                  [
                    t('v-select-table', {
                      ref: 'selectTable',
                      attrs: {
                        table: this.table,
                        columns: this.table.columns,
                        'max-height': 400,
                        keywords: { label: 'name', value: 'id' },
                        multiple: ''
                      },
                      on: { selectionChange: this.selectionChange }
                    }),
                    this._v(' '),
                    t(
                      'el-button',
                      {
                        staticStyle: { 'margin-left': '15px' },
                        attrs: { type: 'primary' },
                        on: { click: this.clear }
                      },
                      [this._v('清空选中')]
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
      t.default = p.exports
    }
  }
])
