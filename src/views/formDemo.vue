<template>
  <div>
    <VForm :option="formObj" ref="form"></VForm>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { Form } from './../../types/VForm'
import axios from 'axios'
@Component({})
export default class FormDemo extends Vue {
  private vaildStatus = true

  @Ref() readonly form!: Form
  formObj: any = {
    rules: {
      disBelong: [{ required: true, message: '请选择所属机房', trigger: 'change' }],
      disBelongEdit: [{ required: true, message: '请填写所属机房', trigger: 'blur' }],
      disCode: [
        { required: true, message: '请输入配线架编码', trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
      ]
    },
    inline: true,
    labelPosition: 'left',
    labelWidth: '130',
    btnPos: 'right',
    items: [
      {
        label: '所属机房',
        type: 'select',
        required: true,
        comOpt: {
          id: 'disBelong',
          value: '',
          width: 180,
          disabled: false,
          data: [
            { name: '请选择', value: '' },
            { name: 'T-机房', value: '1' },
            { name: 'D-机房', value: '2' }
          ]
        }
      },
      {
        label: '所属机房',
        type: 'text',
        required: true,
        comOpt: {
          id: 'disBelongEdit',
          value: '',
          width: 180,
          disabled: false,
          show: false
        }
      },
      {
        label: '配线架编码',
        type: 'text',
        required: true,
        comOpt: {
          id: 'disCode',
          width: 180,
          disabled: false,
          placeholder: '',
          value: ''
        }
      },
      {
        label: '配线架名称',
        type: 'text',
        comOpt: {
          id: 'disName',
          width: 500,
          disabled: false,
          placeholder: '',
          value: ''
        }
      },
      {
        label: '配线架机房位置',
        type: 'text',
        comOpt: {
          id: 'disPos',
          width: 500,
          disabled: false,
          placeholder: '',
          value: ''
        }
      },
      {
        label: '横列数',
        type: 'text',
        comOpt: {
          id: 'disHor',
          width: 180,
          disabled: false,
          placeholder: '仅支持数字',
          value: ''
        }
      },
      {
        label: '直列数',
        type: 'text',
        required: false,
        comOpt: {
          id: 'disVer',
          width: 180,
          disabled: false,
          placeholder: '仅支持数字',
          value: ''
        }
      },
      {
        label: '每横列块数',
        type: 'text',
        required: false,
        comOpt: {
          id: 'disEveryHor',
          width: 180,
          disabled: false,
          placeholder: '仅支持数字',
          value: ''
        }
      },
      {
        label: '每直列块数',
        type: 'text',
        required: false,
        comOpt: {
          id: 'disEveryVer',
          width: 180,
          disabled: false,
          placeholder: '仅支持数字',
          value: ''
        }
      },
      {
        label: '横列块内端子数',
        type: 'text',
        comOpt: {
          id: 'disPointHor',
          width: 180,
          disabled: true,
          placeholder: '',
          value: '128'
        }
      },
      {
        label: '直列块内端子数',
        type: 'text',
        comOpt: {
          id: 'disPointVer',
          width: 180,
          disabled: true,
          placeholder: '',
          value: '100'
        }
      },
      {
        label: '横列块内起始端子',
        type: 'text',
        comOpt: {
          id: 'disStartHor',
          width: 180,
          disabled: false,
          placeholder: '仅支持字母、数字 如A1、1',
          value: ''
        }
      },
      {
        label: '直列块内起始端子',
        type: 'text',
        comOpt: {
          id: 'disStartVer',
          width: 180,
          disabled: false,
          placeholder: '仅支持字母、数字 如A1、1',
          value: ''
        }
      }
    ],
    btns: [
      {
        comOpt: {
          id: 'cancle',
          class: 'dialogBtn',
          value: '取消',
          width: 210,
          disabled: false,
          click: this.cancleAction
        }
      },
      {
        comOpt: {
          id: 'ensure',
          class: 'dialogBtn',
          value: '确定',
          width: 210,
          disabled: false,
          click: this.ensureAction
        }
      }
    ]
  }
  cancleAction() {}

  ensureAction() {
    this.form.validate((valid: any) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }

  mounted() {}
}
</script>
