<template>
  <el-input
    v-model="value"
    :disabled="option.disabled"
    :placeholder="placeholder"
    auto-complete="on"
    :style="widthStyle"
    :type="option.type"
    :rows="option.rows"
  ></el-input>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
@Component({
  components: {}
})
/**
 * option.disabled：是否禁用
 * option.type：可选值text，textarea 和其他 原生 input 的 type 值；默认text
 * option.rows：输入框行数，只对 type="textarea" 有效
 */
export default class VInput extends Vue {
  @Prop() option: Form.IFormItemCompOpt
  private value = ''
  private placeholder = ''

  @Watch('option.value')
  changeValue(newVal: string) {
    this.value = newVal
  }

  get widthStyle() {
    return {
      width: this.option.width + 'px'
    }
  }
  mounted() {
    this.initFunc()
  }
  /**
   * @name: initFunc
   * @param {type}
   * @return:
   * @description: 组件加载完成后，初始化方法
   */
  initFunc() {
    this.value = this.option.value
    this.placeholder = this.option.placeholder ? this.option.placeholder : '请输入内容'
  }
  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取input的值
   */
  getValue() {
    return { [this.option.id]: this.value || '' }
  }
  /**
   * @name: setValue
   * @param {val}
   * @return:
   * @description: 为input框赋值
   */
  setValue(val: string) {
    this.value = val
  }
}
</script>
