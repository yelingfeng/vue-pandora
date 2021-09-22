declare namespace Table {
  export interface ISummaryOption {
    sumText?: string
    summaryMethod?: (param: any) => any[]
  }
  export interface ITableOption {
    // 是否隔行变色
    stripe: boolean
    // 是否显示表头
    isHeader?: boolean
    // 高亮当前行
    highlightCurrentRow?: boolean
    // 是否显示多选
    selection: boolean
    // 是否可选中的回调
    selectable?: (row: object, index: number) => void
    // 复现框的位置 前后 top 和 end
    selectionPos?: string
    // 选择模式 单选还是多选
    selectionMode?: string
    // 排序模式
    sortMode: string
    // 表格表头数据
    column: object[]
    // 表格数据
    data: object[]
    // 行点击事件
    rowClick?: (row: object, column: object, event: any) => void
    // 排序事件
    sortChange?: (row: object) => void
    // 行改变事件
    rowChange?: (row: object, index: number) => void
    // 是否分页
    pagination: boolean
    // 排序
    defaultSort?: object[]
    // 默认排序方向
    defaultOrder?: string
    // 汇总行属性
    summary?: ISummaryOption
    // 分页参数
    pageOpt: IPageOpt
  }

  // 分页参数
  export interface IPageOpt {
    // 分页高度
    height?: number
    // 当前页
    currentPage: number
    // 总数
    total: number
    // 每页显示条数选择数组
    pageSizes: number[]
    // 最大页码按钮数
    pageCount: number
    // 当前显示每页条数
    pageSize: number
    // 分页功能 默认显示完整功能 （可不传）
    layout?: string
  }
}

declare namespace Form {
  export type lP = 'right' | 'left' | 'top'
  export type ItemType =
    | 'select'
    | 'text'
    | 'date'
    | 'button'
    | 'radio'
    | 'upload'
    | 'formList'
    | 'checkbox'
    | 'cascade'
    | 'textGroup'
    | 'singleGroup'
    | 'autoComplete'

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
    buttonText?: string
    tipText?: string
    limit?: number
    // 是否显示已上传文件列表
    showFileList?: boolean
    // 是否在选取文件后立即进行上传
    autoUpload?: boolean
    fileList?: Array<any>
    httpRequest?: Function
    beforeUpload?: Function
    onPreview?: Function
    onRemove?: Function
    onFileChange?: Function
    onSuccess?: Function
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
    // element valueFormat
    valueFormat?: string
    // range getValue的分隔符属性
    valueSeparator?: string
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
    // 是否是数字文本框
    isNumberInput?: boolean
    disabled?: boolean
    placeholder?: string
    clearable?: boolean
    // 是否多选
    multiple?: boolean
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
    labelPosition?: lP
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
}
