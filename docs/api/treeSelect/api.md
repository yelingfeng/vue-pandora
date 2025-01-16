# 下拉树形结构组件

> v-tree-select

**代码示例：**

```html
<v-tree-select
  :options="treeList"
  placeholder="请选择tree结构"
  width="50%"
  :defaultData="defaultValue"
  :treeProps="treeProps"
  @handleNodeClick="selectDrop"
/>
```

## 基础属性

> 继承 el-select 和 el-tree Attributes

| 参数         | 说明                                       | 类型    | 默认值                   |
| :----------- | :----------------------------------------- | :------ | :----------------------- |
| options      | tree 原始数据源                            | Array   | 无                       |
| treeProps    | tree 配置                                  | Object  | el-tree props 默认值一样 |
| checkBoxBtn  | 是否显示全选、反选、清空操作(多选的情况下) | Boolean | true                     |
| multiple     | 是否开启多选                               | Boolean | false                    |
| width        | 选择宽度（可以设置 px 或者%）              | String  | 100%                     |
| defaultData  | 单选默认值                                 | Object  | {}                       |
| defaultValue | 多选默认值                                 | Array   | []                       |

## 事件

> 继承 el-select 和 el-tree events

| 事件名          | 说明           | 返回值                                   |
| :-------------- | :------------- | :--------------------------------------- |
| handleNodeClick | 选中 tree 节点 | 单选传出当前选择项；多选传出选中的集合。 |
