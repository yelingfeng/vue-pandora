;(window.webpackJsonp = window.webpackJsonp || []).push([
  [41],
  {
    832: function(e, a, t) {
      'use strict'
      t.r(a)
      t(100)
      var l = {
          name: 'VDetailDemo',
          data: function() {
            return {
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
        o = t(58),
        s = Object(o.a)(
          l,
          function() {
            var e = this.$createElement,
              a = this._self._c || e
            return a(
              'v-layout-page',
              [a('v-layout-page-item', [a('v-detail', { attrs: { descData: this.descData } })], 1)],
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
