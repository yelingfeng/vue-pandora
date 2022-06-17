;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    752: function(e, t, a) {
      'use strict'
      a.r(t)
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
                  { name: '姓名', value: 'name', width: 70, align: 'center' },
                  { name: '年龄', value: 'age', width: 100, align: 'center' },
                  { name: '性别', value: 'sex', width: 100, align: 'center' }
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
        i = a(39),
        l = Object(i.a)(
          n,
          function() {
            var e = this.$createElement,
              t = this._self._c || e
            return t(
              'el-row',
              { attrs: { type: 'flex', justify: 'center' } },
              [
                t(
                  'el-col',
                  { attrs: { span: 24 } },
                  [t('VTable', { attrs: { option: this.tableOpt, height: this.tableHeight } })],
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
      t.default = l.exports
    }
  }
])
