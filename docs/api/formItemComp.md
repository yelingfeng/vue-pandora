# IFormItemCompOpt

- 类型: `Object{}`

`FormItem` 映射的组件属性配置类型

## id

- 类型: `string`

业务 id

## data

- 类型 : `Array`
- 默认值 : `[]`

数据 一般下拉框等组件 使用

## type

- 类型: `string`
- 默认值 : ``

组件类型

## value

- 类型: `string | [] | number | any`
- 默认值 : `''`

组件默认值

## width

- 类型: `number | string`

组件宽度

## placeholder

- 类型: `string`

组件 placeholder

## clearable

- 类型: `boolean`
- 默认值: 'false'

是否带 clear 按钮

## disabled

- 类型: `boolean`
- 默认值: 'false'

是否禁用组件

## click

- 类型： `{Function} (row: any, e: any) => void`
- `row`:
- `e`:

click 事件

## change

- 类型： `{Function} (val: any, origindata: any) => void`
- `val`
- `origindata`

change 事件

## focus

- 类型： `{Function} (val: any, origindata: any) => void`
- `val`
- `origindata`

focus 事件

## blur

- 类型： `{Function} (val: any, origindata: any) => void`
- `val`
- `origindata`

blur 事件

## input

- 类型： `{Function} (val: any, origindata: any) => void`
- `val`
- `origindata`

input 事件

##
