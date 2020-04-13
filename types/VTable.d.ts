import { PandoraUIComponent } from './component'

export declare class Table extends PandoraUIComponent {
  setTableHeight(val: number): void
}

export interface ITableOption {
  // 是否隔行变色
  stripe: boolean
  // 表格表头数据
  column: object[]
  // 表格数据
  data: object[]
  // 行点击事件
  rowClick?: (row: object, column: object, event: any) => void
  // 是否分页
  pagination: boolean
  // 分页参数
  pageOpt: object
}

// 分页参数
export interface IPageOpt {
  // 当前页
  currentPage: number
  // 总数
  total: number[]
  // 每页显示条数选择数组
  pageSizes: Array<number>
  // 当前显示每页条数
  pageSize: number
  // 分页功能 默认显示完整功能 （可不传）
  layout?: string
}
