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

### TableOption

| 属性        | 类型                                              | 说明         |
| :---------- | ------------------------------------------------- | ------------ |
| stripe      | boolean                                           | 是否隔行变色 |
| isHeader    | boolean                                           | 是否显示表头 |
| selection   | boolean                                           | 是否显示多选 |
| column      | object[]                                          | 表格表头数据 |
| data        | object[]                                          | 表格数据     |
| rowClick    | (row: object, column: object, event: any) => void | 行点击事件   |
| defaultSort | object                                            | 默认排序     |
| pagination  | boolean                                           | 是否分页     |
| pageOpt     | `IPageOpt`                                        | 分页参数     |

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

### IPageOpt

分页配置属性

| 属性        | 类型     | 说明                 |
| :---------- | -------- | -------------------- |
| height      | number   | 分页高度             |
| currentPage | number   | 当前页               |
| total       | number   | 总数                 |
| pageSizes   | number[] | 每页显示条数选择数组 |
| pageSize    | number   | 当前显示每页条数     |
| layout      | string   |                      | 分页功能 默认显示完整功能 （可不传） |
