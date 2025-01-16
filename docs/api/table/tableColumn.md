# VTable Column

`column`列配置 字段使用说明

```ts
column: [
  {
    name: '',
    type: 'selection',
    fixed: 'left',
    width: 50,
    align: 'center'
  },
  {
    name: '序号',
    type: 'index',
    // fixed: 'left',
    width: 50,
    align: 'center'
  },
  { name: '采集总数', value: 'vd_count', minWidth: 70, sortable: true },
  { name: '违规总数', value: 'ivd_count', minWidth: 70, sortable: true }
]
```

## `type`

- 类型: `String`
- 默认值： `空`
- 可选值: `'selection'|'index'`

可设置`selection` 属性 同`element-ui`

## `name`

- 类型: `String`
- 默认值： `空`

列名称

## `value`

- 类型: `String`
- 默认值： `空`

对应业务字段值

## `width`

- 类型: `Number`
- 默认值： ``

列宽度,同`element-ui`

## `fixed`

- 类型: `String`
- 默认值： ``

锁列 同`element-ui`

## `align`

- 类型: `String`
- 默认值： `空`

位置属性 居中、 居左、 居右,同`element-ui`

## `minWidth`

- 类型: `Number`
- 默认值： ``

列最小宽度 同`element-ui`

## `sortable`

- 类型: `Boolean`
- 默认值： `false`

开启后 采用插件固有排序模式 详情参考`sortMode`相关属性

## `showTooltip`

- 类型: `Boolean`
- 默认值： `true`

tooltip 、默认为`element-ui show-overflow-tooltip` 属性

## `formatter`

- 类型: `{Function} (row: any) => void`
- `row`: 列数据

formatter 格式化处理 同`element-ui`

## `operations`

- 类型 `[Array Object{}]`
- 操作列属性配置

```ts
operations: [
  {
    label: '详情',
    type: 'radio',
    // title: '添加一个title属性',
    tooltip: function(row: any) {
      return row.taskContent + '流量链接趋势'
    }
  },
  {
    label: '详情',
    type: 'icon',
    // title: '添加一个title属性',
    tooltip: function(row: any) {
      return row.taskContent + '流量链接趋势'
    },
    tooltipDelay: 500,
    // tooltip: '1流量链接趋势',
    iconName: 'el-icon-eleme    ',
    handlerClick: (row: any) => {
      console.log(row)
    }
  },
  {
    label: '编辑',
    type: 'button',
    handlerClick: (row: any) => {
      console.log(row)
    }
  },
  {
    label: '删除',
    type: 'button',
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
```

### label

- 类型：`string`
- 默认：``

按钮或者图标名称

### type

- 类型：`string`
- 默认值：`button`
- 可选值：`button / icon / radio / text`

按钮类型

### title

- 类型：`string`
- 默认值：``

默认用于显示 tooltip 内容

### iconName

- 类型：`string`
- 默认值：`el-icon-s-order`

图标按钮类型`iconName`

### formatter

- 类型: `{Function} (row: any) => void`

格式化处理 label 信息

### tooltip

- 类型：`string / Function{}(row: any)=>void`

tooltip 设置 有 2 种方式

1. 字符串类型
2. 函数形式,支持回调处理

```ts
tooltip: function(row: any) {
  return row.taskContent + '流量链接趋势'
}

```

`tooltip content 说明`

1. 优先级

> tooltip{Fn} > tooltip{string} > title > label > 缺省处理

2. 缺省值

> 注意: 取不到值设置 disabled

### tooltipDelay

- 类型：`Number`
- 默认值: `1000`

tooltip 的延迟设置 对应`open-delay`属性

### handlerClick

- 类型：`{Function} (row: any,$index:number) => void`

操作按钮 click 事件

### disCallBack

- 类型：`{Function} (row: any,$index:number) => void`

操作列是否禁用回调事件

### showCallback

- 类型：`{Function} (row: any,$index:number) => void`

操作列是否显示回调事件

## image

- 类型：`Boolean`

`图片列`当设置 `image`属性时候 进行图片列处理

```ts
 {
    name: '图标',
    value: 'appBase',
    align: 'left',
    width: 50,
    image: true,
    style: 'width:16px; height: 16px'
    formatter: function(row: any, index: any) {
      return `data:image/png;base64,${row.appBase}`
    }
  }
```

### style

- 类型： `string`
- 默认值：`'width: 16px, height: 16px'`

`el-image`的`style`属性

### fit

- 类型： `string`
- 默认值：`'fit'`

`el-image`的`fit`属性

### lazy

- 类型： `Boolean`
- 默认值：`false`

`el-image`的`lazy`属性 懒加载

### formatter

- 类型: `{Function} (row: any,$index:number) => void`

格式化处理

## imageList

- 类型：`Boolean`

`imageList` 图片集合属性

```ts
{
  name: '图片截图',
  value: 'imageList',
  align: 'center',
  minWidth: '300',
  imageList: true,
  imageConfig: {
    lazy: true,
    style: 'width: 50px; height: 50px;',
    basePath: 'http://xxxx/image/'
  }
}

```

### imageConfig

- 类型：`Object{}`

- `style`: 默认`'width: 16px; height: 16px'`
- `basePath`: 根路径 `basePath+图片地址`
- `lazy`:同`image` 默认 `false`
- `fiz`:同`image` 默认 `fit`

图片集配置信息

## links

- 类型: `Object`

多数据 link 节点处理 带跳转功能

```ts
{
  name: '任务名称2',
  value: 'taskName2',
  ...,
  links: {
    dataRef: {
      value: 'tid',
      name: 'tname'
    },
    props: {
      type: 'danger'
    },
    click: (row: any, e: any) => {
      console.log(row, e)
    }
  }
```

### dataRef

- 类型: `{Object}`
- `value`: 值映射
- `name`: 显示名称映射
  数据映射 显示用`name`映射的字段

### prop

- 类型 :`Object`
- 默认 : `el-link`的属性

### click

- 类型 : `{Function} (row: any,e:any) => void`
- `row`: link 数据
- `e`: 事件
