# 基础配置

表单属性 主要包含一个大的对象配置

<demo-block>
:::slot source
<form-base></form-base>
:::

这是一个基础的 form 例子

:::slot highlight

```vue
<template>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <VForm :option="formOption"></VForm>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'form-base01',
  data() {
    return {
      formOption: {
        inline: true,
        labelPosition: 'right',
        labelWidth: '100',
        items: [
          {
            label: '任务名称',
            type: 'text',
            required: true,
            wrap: true,
            comOpt: {
              id: 'taskName',
              width: 210,
              disabled: false,
              show: true,
              placeholder: '',
              value: ''
            }
          },
          {
            label: '任务内容',
            type: 'text',
            required: true,
            show: true,
            comOpt: {
              id: 'taskContent',
              width: 210,
              disabled: false,
              placeholder: '',
              value: ''
            }
          },
          {
            label: '创建日期',
            type: 'date',
            comOpt: {
              id: 'queryCreateTime',
              clearable: false,
              value: '',
              type: 'daterange',
              disabled: false,
              width: '210',
              pickOptions: {
                valueFormat: 'yyyy-MM-dd HH:mm:ss'
              }
            }
          },
          {
            label: '更新日期',
            type: 'date',
            comOpt: {
              id: 'queryUpdateTime',
              clearable: false,
              value: '',
              type: 'datetimerange',
              disabled: false,
              width: '210',
              pickOptions: {}
            }
          },
          {
            label: '任务状态',
            type: 'select',
            comOpt: {
              id: 'taskStatusId',
              value: ['0', '1'],
              width: 210,
              collapseTags: true,
              multiple: true,
              disabled: false,
              change: function(val) {},
              focus: function(val, origindata) {
                console.log(val, origindata)
              },
              blur: function(val, origindata) {
                // console.log(val, origindata)
              },
              data: [
                { name: '全部', value: '0' },
                { name: '未提交', value: '1' },
                { name: '已提交', value: '2' },
                { name: '查询中', value: '3' },
                { name: '已完成', value: '4' }
              ]
            }
          }
        ],
        btns: [
          {
            comOpt: {
              id: 'iconTest',
              type: 'icon',
              title: 'this is icon test',
              tooltipDelay: 500,
              className: 'el-icon-edit'
            }
          },
          {
            comOpt: {
              id: 'query',
              value: '查询',
              width: 210,
              icon: 'el-icon-search',
              disabled: false
            }
          },
          {
            comOpt: {
              id: 'query',
              value: '新建',
              icon: 'el-icon-plus',
              width: 210,
              disabled: false
            }
          }
        ]
      }
    }
  }
}
</script>
```

:::
</demo-block>

## `inline`

- 类型： `Boolean`
- 默认： `false`

`element form` 属性 行内表单模式

## `label-position`

- 类型： `string`
- 默认值： `right`
- 可选值：`right/left/top`

`element form` 属性 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width

## `label-width`

- 类型： `string`
- 默认值：`-`
- 可选值：`-`

`element form` 属性 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。

## `items`

- 类型： `IFormItemOpt[]`

表单项配置

## `btns`

- 类型： `IFormItemOpt[]`

操作按钮组配置

## `getValue()`

- 类型: `Function`

获取表单所有项值方法

例子：

```ts
this.form.getValue()
```

## `clearValue()`

- 类型: `Function`

清空表单所有值方法

## `setValue()`

- 类型: `Function{}(data: [])`

设置表单值

例子：

```ts
this.form.setValue([{ id: 'taskContent', value: 'testtest' }])
```

## `setShow()`

- 类型: `Function{}(data: [])`

设置表单显隐

```ts
this.form.setShow([
  {
    id: 'taskGroup',
    value: true
  }
])
```

## `setDisabled()`

- 类型: `Function{}(data: [])`

设置表单是否禁用

```ts
this.form.setDisabled([
  {
    id: 'taskGroup',
    value: true
  }
])
```

## `setRequired()`

- 类型: `Function{}(data: [])`

设置表单动态必填

```ts
this.form.setRequired([
  {
    id: 'taskGroup',
    value: true
  }
])
```

## `setItemData()`

- 类型: `Function{}(id: string, data: Array<any>)`

设置指定 id 的组件值

```ts
this.form.setItemData('taskGroup', [
  {
    value: 1
  },
  {
    value: 2
  }
])
```
