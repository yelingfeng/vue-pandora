# Column

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
