;(window.webpackJsonp = window.webpackJsonp || []).push([
  [78],
  {
    881: function(e, a, t) {
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
                  { name: '序号', type: 'index', minWidth: 50, align: 'center' },
                  { name: '姓名', value: 'name', minWidth: 70, align: 'center' },
                  { name: '年龄', value: 'age', minWidth: 100, align: 'center' },
                  { name: '性别', value: 'sex', minWidth: 100, align: 'center' }
                ],
                data: [
                  { name: '张三', age: '20', sex: '男' },
                  { name: '李四', age: '40', sex: '男' },
                  { name: '王五', age: '50', sex: '女' },
                  { name: '赵六', age: '60', sex: '女' }
                ],
                pagination: !0,
                pageOpt: {
                  currentPage: 1,
                  total: 10,
                  pageSizes: [10, 20, 30, 40, 50],
                  pageSize: 10
                }
              }
            }
          }
        },
        i = t(58),
        l = Object(i.a)(
          n,
          function() {
            var e = this.$createElement,
              a = this._self._c || e
            return a(
              'v-layout-page',
              [
                a(
                  'v-layout-page-item',
                  [a('VTable', { attrs: { option: this.tableOpt, height: this.tableHeight } })],
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
      a.default = l.exports
    }
  }
])
