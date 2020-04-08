<template>
  <el-radio-group v-model="value" :disabled="option.disabled" @change="changeHandler">
    <el-radio v-for="item in option.data" :key="item.name" :label="item.value">
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

  mounted() {
    this.value = this.option.value || ''
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
