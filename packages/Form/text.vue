<template>
  <el-input
    v-model="value"
    :disabled="disabled"
    :placeholder="placeholder"
    :autocomplete="option.autocomplete || 'off'"
    :style="widthStyle"
    :type="type"
    :clearable="option.clearable || true"
    :maxlength="option.maxlength"
    :rows="option.rows"
    @blur="blurHandler"
    @focus="focusHanlder"
    @input="isNumberInput ? (value = value.replace(/[^\d]+/g, '')) : inputHandler"
  ></el-input>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'
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
  private disabled = false
  private type = 'text'
  // 是否是数字文本框
  private isNumberInput = false

  @Watch('option.value')
  changeValue(newVal: string) {
    this.value = newVal
  }

  get widthStyle() {
    return {
      width: this.option.width + 'px'
    }
  }
  created() {
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
    this.type = this.option.type
    this.disabled = this.option.disabled || false
    this.isNumberInput = this.option.isNumberInput || false
    this.placeholder = this.option.placeholder ? this.option.placeholder : '请输入内容'
  }

  handlerNumber() {}

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
  // 设置是或否禁用
  setDisabled(bol: boolean) {
    this.disabled = bol
  }
  /**
   * @name:
   * @param {val}
   * @return:
   * @description: 在 Input 值改变时触发
   */
  inputHandler(val: string) {
    if (this.option.input && isFunction(this.option.input)) {
      this.option.input(val)
    }
  }

  /**
   * blur事件
   */
  blurHandler(e: any) {
    if (this.option.blur && isFunction(this.option.blur)) {
      this.option.blur(e)
    }
  }

  focusHanlder(e: any) {
    if (this.option.focus && isFunction(this.option.focus)) {
      this.option.focus(e)
    }
  }
}
</script>
