import { PandoraUIComponent } from './component'

export declare class Table extends PandoraUIComponent {
  setTableHeight(val: number): void
}

export interface ITableOption {
  // 是否隔行变色
  stripe: boolean
  // 是否显示表头
  isHeader: boolean
  // 高亮当前行
  highlightCurrentRow: boolean
  // 是否显示多选
  selection: boolean
  // 排序模式
  sortMode: string
  // 表格表头数据
  column: object[]
  // 表格数据
  data: object[]
  // 行点击事件
  rowClick?: (row: object, column: object, event: any) => void
  // 排序事件
  sortChange?: (column: object) => void
  // 是否分页
  pagination: boolean
  // 排序
  defaultSort: object[]
  // 默认排序方向
  defaultOrder: string
  // 分页参数
  pageOpt: IPageOpt
}

// 分页参数
export interface IPageOpt {
  height: number
  // 当前页
  currentPage: number
  // 总数
  total: number
  // 每页显示条数选择数组
  pageSizes: number[]
  // 当前显示每页条数
  pageSize: number
  // 分页功能 默认显示完整功能 （可不传）
  layout?: string
}
