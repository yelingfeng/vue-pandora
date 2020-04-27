import { PandoraUIComponent } from './component'

export type lP = 'right' | 'left' | 'top'
export type ItemType =
  | 'select'
  | 'text'
  | 'date'
  | 'button'
  | 'radio'
  | 'checkbox'
  | 'autoComplete'
  | 'singleGroup'
  | 'textGroup'

/**
 * form 每个item的对象类型
 */
export interface IFormItemOpt {
  label: string
  type: ItemType
  required?: boolean
  wrap?: boolean
  show?: boolean | null
  comOpt: IFormItemCompOpt
}

/**
 * form 每个item对应内部组件接口类型
 */
export interface IFormItemCompOpt {
  id: string
  value: string | any
  type: string
  title?: string
  width?: string | number
  isAll?: boolean
  disabled?: boolean
  placeholder?: string
  pickOptions?: object
  // 设置日期显示格式
  format?: string
  // 是否显示清除按钮
  clearable?: boolean
  data?: any[]
  className?: string
  click?: Function | undefined
  change?: Function | undefined
}

export interface IFormOption {
  // 行内表单模式
  inline?: boolean
  // 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
  labelPosition?: lP
  // 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto
  labelWidth?: string
  btnPos?: string
  // FormItem
  items: Array<IFormItemOpt>
  // BtnItem
  btns?: Array<IFormItemOpt>
}

export declare class Form extends PandoraUIComponent {
  // 获取vform所有组件值
  getValue: Function
  // 为组件里面赋值
  setValue: (data: Array<any>) => void
  //  清空value
  clearValue: () => void
  // 设置指定item值
  setItemData: (id: string, data: Array<any>) => void
  // 设置一组是否可显示
  setShow: (data: Array<any>) => void
  // 设置一组是否禁用
  setDisabled: (data: Array<any>) => void
}
