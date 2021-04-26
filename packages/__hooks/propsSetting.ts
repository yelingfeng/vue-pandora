import { PandoraFormOption } from 'types/VForm'
import { PandoraTableOption } from 'types/VTable'
export const formOptionProp: PandoraFormOption = {
  inline: true,
  labelPosition: 'right',
  labelWidth: '120',
  btnPos: 'right',
  items: [],
  btns: []
}

export const tableOptionProp: PandoraTableOption = {
  stripe: true,
  selection: false,
  // selectionPos: 'top',
  defaultSort: [],
  sortChange: undefined,
  // sigle 独立排序， multi 多项排序
  sortMode: 'single',
  column: [],
  data: [],
  // 是否分页
  pagination: true,
  // 分页参数
  pageOpt: {
    height: 50,
    currentPage: 1,
    total: 0,
    pageSizes: [10, 15, 20, 30, 40, 50, 100],
    layout: 'total, sizes, prev, pager, next',
    pageSize: 20,
    pageCount: 5
  }
}
