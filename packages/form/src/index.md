# FormDemo

> demo test

```html
<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <h1>Vue-pandora</h1>
        <VForm :option="formObj" ref="form"></VForm>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
  // @ is an alias to /src
  import { Component, Vue, Ref } from 'vue-property-decorator'
  import { VForm } from 'vue-pandora'
  import axios from 'axios'
  @Component({})
  export default class App extends Vue {
    @Ref() readonly form!: VForm
    private formObj: any = {
      inline: true,
      labelPosition: 'right',
      labelWidth: '100',
      btnPos: 'right',
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
            value: '',
          },
        },
        {
          label: '任务内容',
          type: 'text',
          comOpt: {
            id: 'taskContent',
            width: 210,
            disabled: false,
            show: false,
            placeholder: '',
            value: '',
          },
        },
        {
          label: '目标',
          type: 'text',
          comOpt: {
            id: 'targetIpInfo',
            width: 210,
            disabled: false,
            show: true,
            placeholder: '',
            value: '',
          },
        },
        {
          label: '创建日期',
          type: 'date',
          comOpt: {
            id: 'queryCreateTime',
            clearable: false,
            value: '',
            type: 'datetimerange',
            disabled: false,
            width: '210',
            pickOptions: {},
          },
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
            pickOptions: {},
          },
        },
        {
          label: '任务状态',
          type: 'select',
          comOpt: {
            id: 'taskStatusId',
            value: '0',
            width: 210,
            disabled: false,
            data: [
              { name: '全部', value: '0' },
              { name: '未提交', value: '1' },
              { name: '已提交', value: '2' },
              { name: '查询中', value: '3' },
              { name: '已完成', value: '4' },
            ],
          },
        },
        {
          label: '文件状态',
          type: 'select',
          wrap: true,
          comOpt: {
            id: 'fileStatusId',
            value: '0',
            width: 210,
            disabled: false,
            show: true,
            data: [
              { name: '全部', value: '0' },
              { name: '未下载', value: '1' },
              { name: '已下载', value: '2' },
            ],
          },
        },
      ],
      btns: [
        {
          comOpt: {
            id: 'query',
            value: '查询',
            width: 210,
            disabled: false,
            click: this.querySearchAction,
          },
        },
        {
          comOpt: {
            id: 'query',
            value: '新建',
            width: 210,
            disabled: false,
            click: this.addSearchAction,
          },
        },
      ],
    }
    

    querySearchAction() {
      const searchValue = this.form.getValue()
      this.$message.info(searchValue)
    }
    addSearchAction() {
      this.$message.info('add action')
    }

  }
</script>

<style lang="less">
  #app,
  #app > div {
    width: 100%;
    height: 100%;
    min-width: 900px;
  }
</style>
```

### For Example

No.1
