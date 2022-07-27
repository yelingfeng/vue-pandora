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
        btnPos: 'right',
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
