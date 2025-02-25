;(window.webpackJsonp = window.webpackJsonp || []).push([
  [26],
  {
    795: function(e, t, o) {},
    815: function(e, t, o) {
      'use strict'
      o(795)
    },
    831: function(e, t, o) {
      'use strict'
      o.r(t)
      o(100), o(139), o(23)
      var a = {
          name: 'TTableMix',
          data: function() {
            var e = this,
              t = this.$createElement
            return {
              queryData: {
                likeCargoNo: null,
                likeBookNo: null,
                likeTransportNo: null,
                likeCargoName: null,
                workshopNum: null,
                workshopNum1: null,
                date: null
              },
              table: {
                data: [],
                operator: [
                  { text: '新增', fun: this.add },
                  { text: '编辑', fun: this.edit },
                  {
                    text: '删除',
                    render: function(o, a) {
                      return t(
                        'el-popconfirm',
                        {
                          attrs: { title: '你确定要删除吗？' },
                          on: {
                            confirm: function() {
                              return e.del(a)
                            }
                          }
                        },
                        [t('div', { slot: 'reference', attrs: { type: 'link' } }, ['删除'])]
                      )
                    }
                  }
                ],
                operatorConfig: { fixed: 'right', width: 280, label: '操作' },
                columns: [
                  { prop: 'id', label: '序列', minWidth: 80, fixed: !0 },
                  { prop: 'name', label: '姓名', minWidth: 120 },
                  { prop: 'code', label: 'code', minWidth: 80 },
                  { prop: 'address', label: '地址', minWidth: 240 },
                  { prop: 'address', label: '地址', minWidth: 240 },
                  { prop: 'address', label: '地址', minWidth: 240 },
                  { prop: 'status', label: '状态', minWidth: 120 }
                ]
              },
              ADDRESS_TYPES: [
                { label: '前纺一车间', key: 'W1' },
                { label: '前纺二车间', key: 'W2' },
                { label: '前纺三车间', key: 'W3' }
              ],
              ADDRESS_TYPES1: [
                { name: '前纺一车间', id: 'W1' },
                { name: '前纺二车间', id: 'W2' },
                { name: '前纺三车间', id: 'W3' },
                { name: '前纺四车间', id: 'W4' }
              ]
            }
          },
          computed: {
            opts: function() {
              return {
                workshopNum1: {
                  label: 'v-select单选',
                  comp: 'v-select',
                  bind: { optionSource: this.ADDRESS_TYPES }
                },
                workshopNum: {
                  label: 'v-select多选',
                  comp: 'v-select',
                  span: 2,
                  bind: {
                    multiple: !0,
                    optionSource: this.ADDRESS_TYPES1,
                    valueKey: 'id',
                    labelKey: 'name'
                  }
                },
                date: {
                  label: '日期范围',
                  comp: 'el-date-picker',
                  span: 2,
                  bind: {
                    type: 'daterange',
                    rangeSeparator: '-',
                    startPlaceholder: '开始日期',
                    endPlaceholder: '结束日期',
                    valueFormat: 'yyyy-MM-dd'
                  }
                },
                likeCargoNo: { label: '货源编号', comp: 'el-input' },
                likeBookNo: { label: '订单编号', comp: 'el-input' },
                likeTransportNo: { label: '运单编号', comp: 'el-input' },
                likeCargoName: { label: '货品名称', comp: 'el-input' }
              }
            },
            getQueryData: function() {
              var e = this.queryData,
                t = e.likeCargoNo,
                o = e.likeBookNo,
                a = e.likeTransportNo,
                l = e.likeCargoName,
                n = e.workshopNum,
                i = e.workshopNum1,
                r = e.date
              return {
                likeCargoNo: t,
                likeBookNo: o,
                likeTransportNo: a,
                likeCargoName: l,
                workshopNum: n,
                workshopNum1: i,
                beginDate: r && r[0] ? r[0] : null,
                endDate: r && r[1] ? r[1] : null
              }
            }
          },
          created: function() {
            this.getData()
          },
          methods: {
            getData: function() {
              this.table.data = Array.from({ length: 1e4 }).map(function(e, t) {
                return {
                  id: t + 1,
                  code: t + 1,
                  status: '待维修' + t,
                  name: '张三' + t,
                  address: '广东省广东省广州市白云广东省广州市白云广州市白云区' + t
                }
              })
            },
            add: function(e) {
              console.log('新增', e)
            },
            del: function(e) {
              var t = this
              this.$confirm('是否永久删除该项, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              })
                .then(function() {
                  console.log('删除', e)
                })
                .catch(function() {
                  t.$message.info('已取消删除')
                })
            },
            edit: function(e) {
              console.log('点击table编辑', e)
            },
            conditionEnter: function(e) {
              console.log('查询条件', e),
                (this.queryData = e),
                console.log('最终条件', this.getQueryData)
            }
          }
        },
        l = (o(815), o(58)),
        n = Object(l.a)(
          a,
          function() {
            var e = this.$createElement
            return (this._self._c || e)('v-adaptive-page', {
              staticClass: 'v-adaptive-page_virtual',
              attrs: {
                opts: this.opts,
                title: '虚拟列表demo',
                isCopy: '',
                tablePageStyle: { marginTop: 0 },
                table: this.table,
                'use-virtual': '',
                maxHeight: 400,
                columns: this.table.columns
              },
              on: { submit: this.conditionEnter }
            })
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = n.exports
    }
  }
])
