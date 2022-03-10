# API

## Form

主要包括 `FormOption`,`FormItemOpt`,`FormItemCompOpt` 三个主要属性

1. FormOption 构建整体 Form 的属性
2. FormItemOpt 构建一个 FormItem 的属性
3. FormItemCompOpt 构建一个 FormItem 内部组件的属性

### FormOption 说明

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

### FormItemOpt 说明

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

### FormItemCompOpt 说明

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

## Table

表格属性
完整例子：

```ts
private tableOpt: any = {
   stripe: true,
   isHeader: true,
   selection: true,
   defaultSort: { prop: 'createTime', order: 'descending' },
   column: [
     { name: '序号', value: 'index', fixed: 'left', width: 50, align: 'center' },
     { name: '任务名称', value: 'taskName', fixed: 'left', align: 'center' },
     { name: '创建时间', value: 'createTime', align: 'center' },
     { name: '更新时间', value: 'updateTime', align: 'center' },
     { name: '任务内容', value: 'taskContent', align: 'center' },
     { name: '任务结果', value: 'jobResult', align: 'center' },
     {
       name: '操作',
       value: '',
       align: 'center',
       fixed: 'right',
       width: 150,
       operations: [
         {
           label: '详情',
           type: 'icon',
           iconName: 'el-icon-eleme    ',
           handlerClick: (row: any) => {
             console.log(row)
           }
         },
         {
           label: '编辑',
           handlerClick: (row: any) => {
             console.log(row)
           }
         },
         {
           label: '删除',
           disCallBack(row: any) {},
           handlerClick: (row: any) => {}
         },
         {
           label: '查看',
           type: 'icon',
           iconName: 'el-icon-edit',
           disCallBack(row: any) {},
           handlerClick: (row: any) => {
             console.log(row)
           }
         }
       ]
     }
   ],
   data: [],
   // 是否分页
   pagination: false
   // 分页参数
   pageOpt: {
     currentPage: 1,
     total: 0,
     pageSizes: [10, 20, 30, 40, 50],
     pageSize: 10
   }
 }
```

### `stripe`

- 类型： `Boolean`
- 默认： `false`

是否隔行变色

### `loading`

- 类型： `Boolean`
- 默认： `false`

是否显示`loading`

### `isHeader`

- 类型： `Boolean`
- 默认： `true`

是否显示表头

### `selection`

- 类型： `Boolean`
- 默认： `false`

是否显示`selection`列 包括复选或者单选

### `selectionMode`

- 类型： `string`
- 默认值： `空`
- 可选值: `single`|`multi`

选择模式 单选还是多选 搭配 `selection` 属性使用

### `selectionPos`

- 类型： `string`
- 默认值： `空`
- 可选择: `top` 首列 | `end` 尾列

复现框的位置 在列前还是列后 搭配 `selection` 属性使用

例子

```ts
const tableOption = {
  selection: true,
  selectionPos: 'top',
  selectionMode: 'multi'
}
```

### `selectable`

- 类型： `{Function} (row: object, index: number) => void`
- `row` 行数据
- `index` 列 index

`selection`列 回调处理 可细化每行的`selection`项

例子

```ts
  selectable: function(row: any, index: any) {
    return index !== 4
  }
```

### `sortMode`

- 类型： `string`
- 默认值： `空`
- 可选值: `'single'` | `'multi'`

排序模式 支持二种排列模式 多列和单列

### `defaultSort`

- 类型： `Array`

默认排序字段列配置

```ts
defaultSort: [
  { prop: 'age', order: 'descending' },
  { prop: 'user', order: 'ascending' },
  { prop: 'phone', order: 'ascending' }
]
```

### `defaultOrder`

- 类型： `string`
- 默认值:`'descending'`

默认排序方向 配置优先级

> `defaultSort` > `defaultOrder`

### `sortChange`

- 类型： `{Function} (column: object) => void`

- `column`值: `{Object} key:`排序列定义 ,`value:`对应排序值 `descending` 还是 `ascending` 搭配`defaultSort`使用

排序回调事件

### `highlightCurrentRow`

- 类型: 同`element-ui`

### `rowClick`

- 类型： `{Function} (row: any, column: object, event: any) => void`

行点击事件

### `handleSelectionChange`

- 类型： `{Function} (val: any)`

复选框回调事件

### `pagination`

- 类型: `Boolean`
- 默认值: `true`

是否显示分页

### `pageOpt`

- 类型: `IPageOpt`
- 默认值: `{}`

### `column`

- 类型: `Array{Object}`
- 默认值: `[]`

Table `Column` 数据配置说明

### `data`

- 类型: `Array{Object}`
- 默认值: `[]`

数据

### `summary`

- 类型: `ISummaryOption`

汇总行属性

## IPageOpt

分页配置属性,同`element-ui`

| 属性        | 类型     | 说明                                                                         |
| :---------- | -------- | ---------------------------------------------------------------------------- |
| height      | number   | 分页高度                                                                     |
| currentPage | number   | 当前页 1                                                                     |
| total       | number   | 总数 0                                                                       |
| pageCount   | number   | 7                                                                            |
| pageSizes   | number[] | 每页显示条数选择数组 [10, 20, 30, 40, 50]                                    |
| pageSize    | number   | 当前显示每页条数 10                                                          |
| layout      | string   | 分页功能 默认显示完整功能 total, sizes, prev, pager, next, jumper （可不传） |

### `height`

- 类型: `number`
- 默认值: `50`

分页整体容器高度

### `currentPage`

- 类型: `number`
- 默认值: `1`

当前页

### `total`

- 类型: `number`
- 默认值: `0`

总数

### `pageCount`

- 类型: `number`
- 默认值: `7`

总数

### `pageSize`

- 类型: `number`
- 默认值: `10`

当前显示每页条数

### `pageSizes`

- 类型: `number[]`
- 默认值: `[10, 20, 30, 40, 50]`

每页显示条数选择数组

### `layout`

- 类型: `string`
- 默认值: `total, sizes, prev, pager, next, jumper`

分页功能 默认显示完整功能 （可不传）

## ISummaryOption
