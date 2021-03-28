import { reactive } from '@vue/composition-api'
import { IPandoraFormItems, PandoraFormOption } from 'types/VForm'
import { formOptionProp } from './propsSetting'
import { assign } from 'lodash-es'

/**
 * Pandora Table 通用hooks
 * @param items
 * @param btns
 * @param formOption 默认配置
 */
export const usePandoraForm = (
  items: IPandoraFormItems[],
  btns: any[],
  formOption?: Record<string, any>
) => {
  const opt = assign({}, formOptionProp, formOption ?? {})
  // 表单属性
  const formOpt: PandoraFormOption = reactive({ ...opt, items, btns })
  return formOpt
}
