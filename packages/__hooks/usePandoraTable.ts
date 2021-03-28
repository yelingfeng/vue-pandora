import { reactive } from '@vue/composition-api'
import { IPandoraTableColumn, PandoraTableOption, ISortOption } from 'types/VTable'
import { tableOptionProp } from './propsSetting'
import { assign } from 'lodash-es'
/**
 * Pandora Table 通用hooks
 *
 * columns: IPandoraTableColumn 列数据
 */
export const usePandoraTable = (
  column: IPandoraTableColumn[],
  sortOption: ISortOption,
  tableOption?: Record<string, any>
) => {
  const opt = assign({}, tableOptionProp, tableOption ?? {})

  const tableOpt: PandoraTableOption = reactive({
    ...opt,
    column,
    defaultSort: sortOption.defaultSort,
    sortChange: sortOption.sortChange
  })
  return tableOpt
}
