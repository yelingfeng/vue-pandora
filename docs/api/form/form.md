# 属性说明

主要包括 `FormOption`,`FormItemOpt`,`FormItemCompOpt` 三个主要属性

1. FormOption 构建整体 Form 的属性
2. FormItemOpt 构建一个 FormItem 的属性
3. FormItemCompOpt 构建一个 FormItem 内部组件的属性

## FormOption 说明

| 属性          | 类型                | 说明                  |
| :------------ | ------------------- | --------------------- |
| inline        | boolean             | 行内表单模式          |
| labelPosition | string(left,right ) | 表单 label 标签的位置 |
| labelWidth    | string              | 表单 label 标签的宽度 |
| btnPos        | string              | 按钮位置 默认 right   |
| items         | `FormItemOpt`       | 数组对象              |
| btns          | `FormItemOpt`       | 数组对象              |

```ts

 private formObj: FormOption = {
   inline: true,
   labelPosition: 'right',
   labelWidth: '100',
   btnPos: 'right',
   items: [...],
   btns:[...]
 }

```

## FormItemOpt 说明

| 属性      | 类型              | 说明       |
| :-------- | ----------------- | ---------- |
| label     | string            | label 名称 |
| type      | `ItemType`        | item 类型  |
| required? | boolean           | 是否必填项 |
| wrap?     | boolean           | 是否换行   |
| show?     | boolean           | 是否显示   |
| comOpt    | `FormItemCompOpt` | 对象       |

```ts
type ItemType = 'select' | 'text' | 'date' | 'button' | 'radio' | 'checkbox' | 'autoComplete'

items: [
  {
    label: '任务名称',
    type: 'text',
    comOpt: {
      id: 'taskName',
      width: 210,
      disabled: false,
      show: true,
      placeholder: '',
      value: ''
    }
  }
]
```

## FormItemCompOpt 说明

| 属性         | 类型     | 说明             |
| :----------- | -------- | ---------------- |
| id           | string   | id               |
| value        | string   | any              | value |
| type         | string   | 类型             |
| width?       | string   | number           |
| isAll?       | boolean  | 是否全选         |
| disabled?    | boolean  | 是否禁用         |
| placeholder? | string   | 占位符           |
| format       | string   | 设置日期显示格式 |
| clearable    | boolean  | 是否显示清除按钮 |
| data         | any[]    | 数据             |
| className?   | string   | iconclassname    |
| click?       | Function | click 事件回调   |
| change?      | Function | change 事件回调  |

```ts
    comOpt: {
      id: 'queryUpdateTime',
      clearable: false,
      value: '',
      type: 'datetimerange',
      disabled: false,
      width: '210',
      pickOptions: {}
    }
```
