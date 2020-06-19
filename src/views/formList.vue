<template>
  <div>
    <VForm :option="addformObj" ref="addFrom"></VForm>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { Form } from './../../types/VForm'
import axios from 'axios'
@Component({})
export default class FormDemo extends Vue {
  private vaildStatus = true

  @Ref() readonly addFrom!: Form
  private addformObj: any = {
    inline: true,
    labelPosition: 'left',
    labelWidth: '120',
    btnPos: 'right',
    items: [
      {
        label: '所属机房',
        type: 'text',
        show: true,
        comOpt: {
          id: 'disBelong',
          width: 180,
          disabled: true,
          placeholder: '',
          value: ''
        }
      },
      {
        label: '配线架名称',
        type: 'text',
        show: true,
        comOpt: {
          id: 'disName',
          width: 180,
          disabled: true,
          show: true,
          placeholder: '',
          value: ''
        }
      },
      {
        // label: 'formList',
        type: 'formList',
        // show: true,
        comOpt: {
          id: 'formListA',
          items: [
            {
              label: '横列直列',
              type: 'text',
              show: true,
              comOpt: {
                id: 'disHorVer',
                value: 'xiaofan',
                width: 180,
                disabled: false,
                placeholder: '请选择横列直列',
                data: []
              }
            },
            {
              label: '直列块内端子数',
              type: 'text',
              show: true,
              comOpt: {
                id: 'disBlockPortVer',
                width: 180,
                disabled: true,
                show: true,
                placeholder: '',
                value: ''
              }
            },
            {
              label: '扩容块数',
              type: 'text',
              show: true,
              comOpt: {
                id: 'disBlockNumber',
                width: 100,
                disabled: false,
                maxlength: 2,
                placeholder: '请输入扩容块数',
                value: 'xiaofanhaha'
              }
            }
          ]
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
          click: this.cancleAddAction
        }
      },
      {
        comOpt: {
          id: 'ensure',
          class: 'dialogBtn',
          value: '确定',
          width: 210,
          disabled: false,
          click: this.ensureAddAction
        }
      }
    ]
  }
  cancleAddAction() {}

  ensureAddAction() {}
  mounted() {}
}
</script>
