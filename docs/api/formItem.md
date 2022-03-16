# IFormItemOpt

- 类型: `Object{}`

单个`FormItem`配置类型

```ts
{
    label: string
    type: ItemType
    required?: boolean
    wrap?: boolean
    show?: boolean | null
    comOpt: IFormItemCompOpt
}

```

## label

- 类型： `string`
- 默认值：`-`
- 可选值：`-`

label 名称

## type

- 类型： `ItemType`
- 默认值：`-`
- 可选值：`select|text|date|button|radio|upload|formList|checkbox|cascade|textGroup|autoComplete`

`formItem`类型 不同类型映射不同的子组件

```ts
type ItemType =
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
```

## required

- 类型： `Boolean`
- 默认值：`false`

是否必填 目前为效果的 没有验证框架需要手动处理

## show

- 类型： `Boolean`
- 默认值：`true`

是否显示

## wrap

- 类型： `Boolean`
- 默认值：`false`

是否换行 设置当前`FormItem`项为 true 的话 下一个`FormItem` 换行显示

## comOpt

- 类型: `IFormItemCompOpt`

组件属性 一般为`element-ui`组件的属性配置
