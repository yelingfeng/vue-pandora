# v-select API

**概述：**
**代码示例：**

```html
<v-select v-model="selectVlaue" :optionSource="listTypeInfo.stepList" />
```

## 基础属性

> 继承 el-select Attributes

| 参数             | 说明                                             | 类型                            | 默认值  |
| :--------------- | :----------------------------------------------- | :------------------------------ | :------ |
| v-model          | 绑定值                                           | boolean / string / number/Array | -       |
| multiple         | 是否多选 （显示全选）                            | Boolean                         | false   |
| optionSource     | 下拉数据源                                       | Array                           | -       |
| width            | select 宽度（可以设置百分比或 px）               | String                          | 100%    |
| customLabel      | 是否自定义设置下拉 label                         | String                          | -       |
| valueKey         | 传入的 option 数组中，要作为最终选择项的键值 key | String                          | 'key'   |
| labelKey         | 传入的 option 数组中，要作为显示项的键值名称     | String                          | 'label' |
| isShowPagination | 是否显示分页（分页不显示全选框）                 | Boolean                         | false   |
| paginationOption | 分页配置项                                       | Object                          | -       |

## paginationOption

> 继承 el-pagination Attributes

| 参数        | 说明                                                          | 类型   | 默认值                    |
| :---------- | :------------------------------------------------------------ | :----- | :------------------------ |
| currentPage | 当前页数                                                      | number | 1                         |
| pageSize    | 每页显示条目个数                                              | number | 6                         |
| pagerCount  | 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠 | number | 5                         |
| total       | 总条目数                                                      | number | 0                         |
| layout      | 组件布局，子组件名用逗号分隔                                  | string | 'total,prev, pager, next' |
| bind        | 继承 el-pagination 属性                                       | Object | -                         |

## Event 事件

> 继承 el-select el-pagination events
