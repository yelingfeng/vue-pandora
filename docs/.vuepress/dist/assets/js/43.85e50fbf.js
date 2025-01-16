;(window.webpackJsonp = window.webpackJsonp || []).push([
  [43],
  {
    834: function(e, a, l) {
      'use strict'
      l.r(a)
      l(100)
      var t = {
          name: 'VDetailDemo',
          data: function() {
            return {
              descColumn: 1,
              descData: [
                { label: '盘点单编号', fieldName: 'stocktakePlanNo', value: '' },
                { label: '盘点单状态', fieldName: 'stocktakeJobStatusLabel', value: '' },
                { label: '盘点负责人', fieldName: 'planStocktakeUserName', value: '' },
                { label: '计划盘点日期', fieldName: 'planStocktakeDate', value: '' },
                { label: '车间', fieldName: 'workshopLabel', value: '' },
                { label: '仓库', fieldName: 'warehouseName', value: '' },
                { label: '盘点所有物料', fieldName: 'originTypeListLabel', value: '' },
                { label: '备注', fieldName: 'createRemark', value: '', span: 4 }
              ]
            }
          },
          created: function() {
            var e = {
              id: '1498904492217241602',
              stocktakePlanNo: 'PD-YX-20220302002',
              workshopId: 301,
              workshopLabel: '压型车间',
              planStocktakeDate: '2022-03-03',
              warehouseId: 1,
              warehouseName: '压型电极仓',
              stocktakeJobStatus: 4,
              stocktakeJobStatusLabel: '待盘点录入',
              stocktakeType: 2,
              stocktakeTypeLabel: '临时盘点',
              originTypeList: '[1, 3]',
              originTypeListLabel: '在制品,合格品',
              planStocktakeUserName: '张三',
              planStocktakeUserId: 0,
              createRemark: '测试'
            }
            this.descData.map(function(a) {
              a.value = e[a.fieldName]
            })
          }
        },
        o = l(58),
        s = Object(o.a)(
          t,
          function() {
            var e = this,
              a = e.$createElement,
              l = e._self._c || a
            return l(
              'v-layout-page',
              [
                l(
                  'v-layout-page-item',
                  [
                    l(
                      'el-radio-group',
                      {
                        attrs: { size: 'small' },
                        model: {
                          value: e.descColumn,
                          callback: function(a) {
                            e.descColumn = a
                          },
                          expression: 'descColumn'
                        }
                      },
                      [
                        l('el-radio-button', { attrs: { label: 1 } }, [e._v('一行展示')]),
                        e._v(' '),
                        l('el-radio-button', { attrs: { label: 2 } }, [e._v('一行展示2项')]),
                        e._v(' '),
                        l('el-radio-button', { attrs: { label: 3 } }, [e._v('一行展示3项')]),
                        e._v(' '),
                        l('el-radio-button', { attrs: { label: 4 } }, [e._v('一行展示4项')])
                      ],
                      1
                    ),
                    e._v(' '),
                    l('v-detail', { attrs: { descData: e.descData, descColumn: e.descColumn } })
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
      a.default = s.exports
    }
  }
])
