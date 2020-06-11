<template>
  <el-input
    v-model="value"
    :disabled="disabled"
    :placeholder="placeholder"
    auto-complete="on"
    :style="widthStyle"
    :type="option.type"
    :maxlength="option.maxlength"
    :rows="option.rows"
    @input="inputHandler"
    @blur="blurHandler"
    @focus="focusHanlder"
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
    this.disabled = this.option.disabled || false
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
