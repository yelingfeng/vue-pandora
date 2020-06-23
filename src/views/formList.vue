<!--
 * @Description: 
 * @Autor: niumiaomiao
 * @Date: 2020-06-19 11:49:15
 * @LastEditors: niumiaomiao
 * @LastEditTime: 2020-06-20 10:06:02
-->
<template>
  <div>
    <VForm :option="addformObj" ref="addFrom"></VForm>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref, Watch } from 'vue-property-decorator'
import { Form } from './../../types/VForm'
import axios from 'axios'
@Component({})
export default class FormDemo extends Vue {
  private vaildStatus = true

  @Ref() readonly addFrom!: Form
  @Watch('addformObj', { deep: true })
  private dataChanged(newVal: any) {
    console.log('aa', newVal)
    this.getValue()
  }
  private addformObj: any = {
    inline: true,
    labelPosition: 'left',
    labelWidth: '120',
    btnPos: 'right',
    items: [
      {
        type: 'formList',
        comOpt: {
          id: 'formListA',
          items: [
            {
              label: '横列直列',
              type: 'text',
              show: true,
              comOpt: {
                id: 'disHorVer',
                value: '',
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
                disabled: false,
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
                value: ''
              }
            }
          ]
        }
      }
    ],
    btns: [
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

  ensureAddAction() {
    console.log(this.addFrom.getValue())
  }
  getValue() {
    console.log(this.addFrom.getValue())
  }
  mounted() {
    // this.getValue()
  }
}
</script>
