import { PandoraUIComponent } from './component'

export type lP = 'right' | 'left' | 'top'
export type ItemType =
  | 'select'
  | 'text'
  | 'date'
  | 'button'
  | 'radio'
  | 'upload'
  | 'formList'
  | 'cascade'
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

// 上传类型
export interface UpLoadType {
  buttonText: string
  tipText: string
  limit: number
  // 是否显示已上传文件列表
  showFileList: boolean
  // 是否在选取文件后立即进行上传
  autoUpload: boolean
  fileList: Array<any>
  httpRequest: Function
  beforeUpload: Function
  onPreview: Function
  onRemove: Function
  onFileChange: Function
  onSuccess: Function
}

// 日期类型
export interface DateOptionType {
  pickOptions?: object
  // 设置日期显示格式
  format?: string
  // 范围选择时选中日期所使用的当日内具体时刻
  defaultTime?: string[]
  // 是否显示清除按钮
  clearable?: boolean
  rangeSeparator?: string
  startplaceholder?: string
  endplaceholder?: string
}
// 级联配置类型
export interface CascadeOptionType {
  options?: object[]
  props?: object
  size?: string
  showAllLevels?: boolean
  separator?: string
}
/**
 * form 每个item对应内部组件接口类型
 */
export interface IFormItemCompOpt {
  id: string
  value: string | any
  type: string
  width?: string | number
  title?: string
  isAll?: boolean
  disabled?: boolean
  placeholder?: string
  // 是否多选
  multiple?: boolean
  // 设置日期显示格式
  format?: string
  // 日期align
  align?: string
  // formlist items
  items?: any[] | undefined
  data?: any[]
  tooltipDelay?: number
  className?: string
  // 日期option
  dateOption?: DateOptionType
  // 上传option
  uploadOption?: UpLoadType
  // 级联类型
  cascadeOption?: CascadeOptionType
  click?: Function | undefined
  change?: Function | undefined
  input?: Function | undefined
  blur?: Function | undefined
  focus?: Function | undefined
}

export interface IFormOption {
  // 行内表单模式
  inline?: boolean
  // 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
  labelPosition?: lP | undefined
  // 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto
  labelWidth?: string
  btnPos?: string
  // FormItem
  items: Array<IFormItemOpt>
  // BtnItem
  btns?: Array<IFormItemOpt>
  // 验证规则
  rules?: object
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

  setRequired: (data: Array<any>) => void
  // 验证方法
  validate: Function

  resetFields: Function

  clearValidate: Function
}

export interface IPandoraFormItems extends IFormItemOpt {
  comOpt: any
}
export type PandoraFormOption = Omit<Required<IFormOption>, 'rules'>
