<template>
  <div>
    <el-button @click="showDialog">dialog</el-button>
    <VForm :option="addformObj" ref="addFrom"></VForm>
    <el-dialog title="测试" :visible.sync="dialogFormVisible"> </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import { Form } from './../../types/VForm'
import axios from 'axios'
@Component({})
export default class FormDemo extends Vue {
  private vaildStatus = true

  dialogFormVisible = false

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
        label: '配线架机房位置',
        type: 'text',
        show: true,
        comOpt: {
          id: 'disPos',
          width: 500,
          disabled: true,
          show: true,
          placeholder: '',
          value: ''
        }
      },
      {
        label: '扩容方式',
        type: 'radio',
        show: true,
        wrap: true, // 换行
        comOpt: {
          id: 'disType',
          value: '1',
          width: 500,
          disabled: false,
          show: true,
          data: [
            { name: '横列直列', value: '1' },
            { name: '模块扩容', value: '2' }
          ],
          change: this.addDisTypeChangeHandler
        }
      },
      {
        label: '原横列数',
        type: 'text',
        show: true,
        comOpt: {
          id: 'disHor',
          width: 180,
          disabled: true,
          show: true,
          placeholder: '请输入原横列数',
          value: '1'
        }
      },
      {
        label: '原直列数',
        type: 'text',
        show: true,
        comOpt: {
          id: 'disVer',
          width: 180,
          disabled: true,
          show: true,
          placeholder: '请输入原直列数',
          value: '2'
        }
      },
      {
        label: '扩容横列数',
        type: 'text',
        show: true,
        comOpt: {
          id: 'disAddHor',
          width: 180,
          disabled: true,
          show: true,
          maxlength: 2,
          placeholder: '仅支持数字',
          value: ''
        }
      },
      {
        label: '扩容直列数',
        type: 'text',
        show: true,
        comOpt: {
          id: 'disAddVer',
          width: 180,
          disabled: false,
          show: true,
          maxlength: 2,
          placeholder: '仅支持数字',
          value: ''
        }
      },
      {
        label: '每横列块数',
        type: 'text',
        show: true,
        comOpt: {
          id: 'disEveryHor',
          width: 180,
          disabled: false,
          show: true,
          maxlength: 2,
          placeholder: '仅支持数字',
          value: ''
        }
      },
      {
        label: '每直列块数',
        type: 'text',
        show: true,
        comOpt: {
          id: 'disEveryVer',
          width: 180,
          disabled: false,
          show: true,
          maxlength: 2,
          placeholder: '仅支持数字',
          value: ''
        }
      },
      {
        label: '横列块内端子数',
        type: 'text',
        show: true,
        comOpt: {
          id: 'disBlockPortHor',
          width: 180,
          disabled: true,
          show: true,
          placeholder: '',
          value: ''
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
        label: '横列直列',
        type: 'text',
        show: false,
        comOpt: {
          id: 'disHorVer',
          value: 'xiaofan',
          width: 500,
          disabled: false,
          placeholder: '请选择横列直列',
          data: []
        }
      },
      {
        label: '扩容块数',
        type: 'text',
        show: false,
        comOpt: {
          id: 'disBlockNumber',
          width: 500,
          disabled: false,
          maxlength: 2,
          placeholder: '请输入扩容块数',
          value: 'xiaofanhaha'
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
  addDisTypeChangeHandler(val: any) {
    // 组件目前设置setShow有bug， 会清掉以前的赋值数据， 并且会根据顺序赋值错乱
    // 目前采用重置各种状态实现
    if (val === '2') {
      // 模块扩容
      this.addFrom.setShow([
        { id: 'disHor', value: false },
        { id: 'disVer', value: false },
        { id: 'disAddHor', value: false },
        { id: 'disAddVer', value: false },
        { id: 'disEveryHor', value: false },
        { id: 'disEveryVer', value: false },
        { id: 'disBlockPortHor', value: false },
        { id: 'disBlockPortVer', value: false },
        { id: 'disHorVer', value: true },
        { id: 'disBlockNumber', value: true }
      ])

      // this.addFrom.setDisabled([
      //   { id: 'disHorVer', value: false },
      //   { id: 'disBlockNumber', value: false }
      // ])
      this.addFrom.setRequired([
        { id: 'disHorVer', value: true },
        { id: 'disBlockNumber', value: true }
      ])
      // this.addFrom.setValue([
      //   { id: 'disHorVer', value: '' },
      //   { id: 'disBlockNumber', value: '' }
      // ])
    } else {
      // 横列直列
      this.addFrom.setShow([
        { id: 'disHor', value: true },
        { id: 'disVer', value: true },
        { id: 'disAddHor', value: true },
        { id: 'disAddVer', value: true },
        { id: 'disEveryHor', value: true },
        { id: 'disEveryVer', value: true },
        { id: 'disBlockPortHor', value: true },
        { id: 'disBlockPortVer', value: true },
        { id: 'disHorVer', value: false },
        { id: 'disBlockNumber', value: false }
      ])

      // this.addFrom.setDisabled([
      //   { id: 'disHorVer', value: true },
      //   { id: 'disBlockNumber', value: true }
      // ])

      // this.addFrom.setShow([
      //   { id: 'disHorVer', value: false },
      //   { id: 'disBlockNumber', value: false }
      // ])

      // 组件bug ， setShow会丢失以前赋值数据
      this.addFrom.setValue([
        { id: 'disHor', value: 'dddd' },
        { id: 'disVer', value: '33333' },
        // { id: 'disBlockPortHor', value: this.distriInfo.rowBlockPortCount },
        // { id: 'disBlockPortVer', value: this.distriInfo.lineBlockPortCount },
        { id: 'disType', value: '1' }
      ])
    }
  }
  ensureAddAction() {
    console.log(this.addFrom.getValue())
  }
  cancleAddAction() {}

  cancleAction() {}

  ensureAction() {
    this.addFrom.validate((valid: any) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
  showDialog() {
    this.dialogFormVisible = true
    this.$nextTick(() => {
      this.addDisTypeChangeHandler(1)
    })
  }
  mounted() {}
}
</script>
