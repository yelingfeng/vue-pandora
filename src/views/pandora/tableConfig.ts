import { IPandoraTableColumn } from '../../../types/VTable'
import { cloneDeep } from 'lodash-es'
const columns = [
  { name: '序号', value: 'orderNum', width: 60, align: 'center' },
  { name: 'APP图标', value: 'appIcon', width: 80, align: 'center' },
  { name: 'APP名称', value: 'appName', minWidth: 120, align: 'center' },
  { name: '版本', value: 'versionName', minWidth: 80, align: 'center' },
  { name: '属地', value: 'provinceName', minWidth: 80, align: 'center' },
  { name: '上报商店', value: 'appStoreName', minWidth: 200, align: 'center' },
  { name: '主办单位', value: 'appDevInfo', minWidth: 100, align: 'center' },
  { name: '首次上架时间', value: 'fisrtOnlineTime', minWidth: 120, align: 'center' },
  { name: '最近更新时间', value: 'updateTime', minWidth: 100, align: 'center' },
  { name: '类别', value: 'appCategory', minWidth: 100, align: 'center' },
  {
    name: '下载量',
    value: 'download',
    minWidth: 100,
    align: 'center',
    sortable: true,
    formatter: (row: any) => {
      return String(row.download)
    }
  },
  { name: '在架状态', value: 'onlineStatus', minWidth: 100, align: 'center' }
]
const operationsColumn = {
  name: '操作',
  value: '',
  align: 'center',
  fixed: 'right',
  width: 110,
  operations: [
    {
      label: '详情',
      disCallBack() {
        return false
      },
      type: 'button',
      iconName: 'detIcon iconWiringCommon',
      handlerClick: (e: any) => {}
    }
  ]
}
// 排序
export const getTableSortOption = () => {
  return {
    defaultSort: [{ prop: 'download', order: 'descending' }]
  }
}
// 正常列
export const getTableColumns = () => {
  return cloneDeep(columns) as IPandoraTableColumn[]
}

// 操作列
export const getTableOperationsColumns = (click: Function) => {
  operationsColumn.operations[0].handlerClick = (e: any) => {
    click(e)
  }
  return operationsColumn as IPandoraTableColumn
}
