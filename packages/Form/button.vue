<template>
  <el-button
    :type="btnType"
    :size="option.size ? option.size : ''"
    :disabled="disabled"
    :icon="option.icon ? option.icon : ''"
    @click.native="clickHandler"
  >
    {{ option.value.replace(/^(\W{1})(\W{1})$/, '$1 $2') }}
  </el-button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'

@Component({
  name: 'VButton',
  components: {}
})
/**
 * option.disabled：是否禁用
 * option.size：可选值tmedium / small / mini；默认---
 * option.type：可选值primary / success / warning / danger / info / text	默认：—
 */
export default class VButton extends Vue {
  @Prop() option: Form.IFormItemCompOpt
  private btnType = 'primary'

  private disabled = false

  mounted() {
    this.btnType = this.option.type ? this.option.type : 'primary'
    this.disabled = this.option.disabled || false
  }
  /**
   * @name: clickHandler
   * @param {type}
   * @return:
   * @description: button的点击回调函数
   */
  clickHandler() {
    if (this.option.click && isFunction(this.option.click)) {
      this.option.click()
    }
  }
  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取值
   */
  getValue() {
    return { [this.option.id]: this.option.value }
  }

  setDisabled(val: boolean) {
    this.disabled = val
  }
}
</script>
