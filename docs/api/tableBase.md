# 基础配置

表格属性 主要包括基础属于同`element-ui`相同，自身属性包括`data`,`column`,`pageOpt`等

<demo-block>
:::slot source
<table-base></table-base>
:::

这是一个基础的 demo 例子

:::slot highlight

```vue
<template>
  <div>
    <VTable :option="tableOpt" :height="tableHeight"></VTable>
  </div>
</template>
<script>
export default {
  name: 'table-demo01',
  data() {
    return {
      tableHeight: 200,
      tableOpt: {
        stripe: true,
        isHeader: true,
        columns: [
          { name: '序号', type: 'index', width: 50, align: 'center' },
          { name: 'name', value: 'name', width: 70, align: 'center' },
          { name: 'age', value: 'age', width: 100, align: 'center' }
        ],
        data: [
          { name: '张三', age: '20' },
          { name: '李四', age: '40' },
          { name: '王五', age: '50' },
          { name: '赵六', age: '60' }
        ],
        pagination: true,
        // 分页参数
        pageOpt: {
          currentPage: 1,
          total: 0,
          pageSizes: [10, 20, 30, 40, 50],
          pageSize: 10
        }
      }
    }
  }
}
</script>
```

:::
</demo-block>

## `stripe`

- 类型： `Boolean`
- 默认： `false`

是否隔行变色

## `loading`

- 类型： `Boolean`
- 默认： `false`

是否显示`loading`

## `isHeader`

- 类型： `Boolean`
- 默认： `true`

是否显示表头

## `border`

- 类型： `Boolean`
- 默认： `false`

是否带有纵向边框

## `fix`

- 类型： `Boolean`
- 默认： `true`

列的宽度是否自撑开

## `size`

- 类型： `String`
- 默认： `-`
- 可选值： `medium / small / mini`

Table 的尺寸

## `selection`

- 类型： `Boolean`
- 默认： `false`

是否显示`selection`列 包括复选或者单选

## `selectionMode`

- 类型： `string`
- 默认值： `空`
- 可选值: `single`|`multi`

选择模式 单选还是多选 搭配 `selection` 属性使用

## `selectionPos`

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

## `selectable`

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

## `sortMode`

- 类型： `string`
- 默认值： `空`
- 可选值: `'single'` | `'multi'`

排序模式 支持二种排列模式 多列和单列

## `defaultSort`

- 类型： `Array`

默认排序字段列配置

```ts
defaultSort: [
  { prop: 'age', order: 'descending' },
  { prop: 'user', order: 'ascending' },
  { prop: 'phone', order: 'ascending' }
]
```

## `defaultOrder`

- 类型： `string`
- 默认值:`'descending'`

默认排序方向 配置优先级

> `defaultSort` > `defaultOrder`

## `sortChange`

- 类型： `{Function} (column: object) => void`

- `column`值: `{Object} key:`排序列定义 ,`value:`对应排序值 `descending` 还是 `ascending` 搭配`defaultSort`使用

排序回调事件

## `highlightCurrentRow`

- 类型: 同`element-ui`

## `rowClick`

- 类型： `{Function} (row: any, column: object, event: any) => void`

行点击事件

## `handleSelectionChange`

- 类型： `{Function} (val: any)`

复选框回调事件

## `pagination`

- 类型: `Boolean`
- 默认值: `true`

是否显示分页

## `pageOpt`

- 类型: `IPageOpt`
- 默认值: `{}`

分页属性配置对象

## `column`

- 类型: `Array{Object}`
- 默认值: `[]`

Table `Column` 数据配置说明

## `data`

- 类型: `Array{Object}`
- 默认值: `[]`

数据

## `summary`

- 类型: `Object{} ISummaryOption`
- 默认值： `{}`

汇总行属性
