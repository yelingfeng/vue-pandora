;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    751: function(e, a, t) {
      'use strict'
      t.r(a)
      var n = {
          name: 'table-demo01',
          data: function() {
            return {
              tableHeight: 200,
              tableOpt: {
                stripe: !0,
                isHeader: !0,
                column: [
                  { name: '序号', type: 'index', width: 50, align: 'center' },
                  { name: 'name', value: 'name', width: 70, align: 'center' },
                  { name: 'age', value: 'age', width: 100, align: 'center' }
                ],
                data: [
                  { name: '张三', age: '20' },
                  { name: '李四', age: '40' },
                  { name: '王五', age: '50' },
                  { name: '赵六', age: '60' }
                ],
                pagination: !0,
                pageOpt: { currentPage: 1, total: 0, pageSizes: [10, 20, 30, 40, 50], pageSize: 10 }
              }
            }
          }
        },
        i = t(39),
        l = Object(i.a)(
          n,
          function() {
            var e = this.$createElement,
              a = this._self._c || e
            return a(
              'div',
              [a('VTable', { attrs: { option: this.tableOpt, height: this.tableHeight } })],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      a.default = l.exports
    }
  }
])
