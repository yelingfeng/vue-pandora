;(window.webpackJsonp = window.webpackJsonp || []).push([
  [50],
  {
    842: function(e, t, a) {
      'use strict'
      a.r(t)
      var o = {
          name: 'queryData',
          data: function() {
            return {
              queryData: {
                likeCargoNo: null,
                likeBookNo: null,
                likeTransportNo: null,
                likeCargoName: null,
                workshopNum: null,
                workshopNum1: null,
                date1: null,
                date2: null,
                date3: null,
                date: null
              }
            }
          },
          computed: {
            opts: function() {
              return {
                workshopNum1: {
                  label: '日期选择',
                  comp: 't-date-picker',
                  defaultVal: '2022-12-09'
                },
                likeCargoNo: { label: '周选择', comp: 't-date-picker', bind: { type: 'week' } },
                workshopNum: { label: '月份选择', comp: 't-date-picker', bind: { type: 'month' } },
                date1: { label: '年份选择', comp: 't-date-picker', bind: { type: 'year' } },
                date: {
                  label: '日期范围',
                  comp: 't-date-picker',
                  span: 2,
                  bind: { type: 'daterange' }
                },
                likeBookNo: {
                  label: '日期范围时分秒',
                  comp: 't-date-picker',
                  span: 2,
                  bind: { type: 'daterange', plusTime: !0 }
                },
                likeTransportNo: {
                  label: '月份-快捷方式',
                  comp: 't-date-picker',
                  span: 2,
                  bind: { type: 'monthrange', isPickerOptions: !0 }
                },
                likeCargoName: {
                  label: '选择时间-快捷',
                  comp: 't-date-picker',
                  span: 2,
                  bind: { type: 'datetime', isPickerOptions: !0 }
                },
                date2: {
                  label: '时间范围-快捷',
                  comp: 't-date-picker',
                  span: 2,
                  bind: { type: 'datetimerange', isPickerOptions: !0 }
                },
                date3: {
                  label: '默认时间',
                  comp: 't-date-picker',
                  span: 2,
                  bind: {
                    type: 'datetimerange',
                    isPickerOptions: !0,
                    'default-time': ['12:00:00', '08:00:00']
                  }
                }
              }
            },
            getQueryData: function() {
              var e = this.queryData
              return {
                likeCargoNo: e.likeCargoNo,
                likeBookNo: e.likeBookNo,
                likeTransportNo: e.likeTransportNo,
                likeCargoName: e.likeCargoName,
                workshopNum: e.workshopNum,
                workshopNum1: e.workshopNum1,
                date1: e.date1,
                date: e.date,
                date2: e.date2,
                date3: e.date3
              }
            }
          },
          methods: {
            conditionEnter: function(e) {
              console.log('查询条件', e),
                (this.queryData = e),
                console.log('最终条件', this.getQueryData)
            }
          }
        },
        i = a(58),
        n = Object(i.a)(
          o,
          function() {
            var e = this.$createElement,
              t = this._self._c || e
            return t(
              'v-layout-page',
              [
                t(
                  'v-layout-page-item',
                  [
                    t('v-query-condition', {
                      ref: 'queryCondition',
                      attrs: { isShowOpen: !1, opts: this.opts },
                      on: { submit: this.conditionEnter }
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
      t.default = n.exports
    }
  }
])
