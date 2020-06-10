<template>
  <el-radio-group v-model="value" :disabled="disabled" @change="changeHandler">
    <el-radio v-for="item in option.data" :key="item.index" :label="item.value">
      {{ item.name }}
    </el-radio>
  </el-radio-group>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'
@Component({
  components: {}
})
export default class VRadio extends Vue {
  @Prop() option: Form.IFormItemCompOpt

  private value = ''
  private disabled = false

  mounted() {
    this.value = this.option.value || ''
    this.disabled = this.option.disabled || false
  }
  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取radio组件的当前值
   */
  getValue() {
    return { [this.option.id]: this.value }
  }
  /**
   * @name: setValue
   * @param {type}
   * @return:
   * @description: 获取radio组件的当前值
   */
  setValue(val: string) {
    if (val !== undefined) {
      this.value = val
    }
  }
  // 设置是或否禁用
  setDisabled(bol: boolean) {
    this.disabled = bol
  }
  /**
   * @name: changeHandler
   * @param {val}
   * @return:
   * @description: 绑定值变化时触发的事件
   */
  changeHandler(val: string) {
    if (this.option.change && isFunction(this.option.change)) {
      this.option.change(val)
    }
  }
}
</script>
