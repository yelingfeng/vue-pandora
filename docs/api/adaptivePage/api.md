# VAdaptivePage

基于表格、高级查询组合封装

**代码示例：**

```html
<v-adaptive-page
  title="用户管理列表"
  :table="state.table"
  :columns="state.table.columns"
  :opts="opts"
  @size-change="handlesSizeChange"
  @page-change="handlesCurrentChange"
  @submit="conditionEnter"
/>
```

## 基础属性（Attributes）

> 继承 TTable 及 TQueryCondition 组件的所有属性、事件、插槽、方法

| 参数                | 说明                                                         | 类型          | 默认值 |
| :------------------ | :----------------------------------------------------------- | :------------ | :----- |
| leftWidth           | 左侧宽度                                                     | number,String | 260    |
| pageStyle           | v-layout-page 行内样式                                       | object        | -      |
| queryPageStyle      | 查询条件组件的 v-layout-page-item 行内样式                   | object        | -      |
| tablePageStyle      | table 组件的 v-layout-page-item 行内样式                     | object        | -      |
| isTTableSelfFilling | 一屏组件 TTable 自动撑满（即分页器显示最下，table 内容撑满） | Boolean       | false  |

## Slots 属性

| 插槽名                          | 说明                               |
| :------------------------------ | :--------------------------------- |
| leftContent                     | 左侧具名插槽                       |
| content<el-tag>v1.4.13</el-tag> | 条件查询与 TTable 组件之间具名插槽 |
| -                               | 默认插槽                           |
