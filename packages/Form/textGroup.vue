<template>
  <el-input
    v-model="value"
    :disabled="option.disabled"
    :placeholder="placeholder"
    auto-complete="on"
    :style="widthStyle"
    :type="option.type"
    :rows="option.rows"
    class="input-group"
  >
    <div slot="prepend" :style="innerStyle" class="vp-textGroup-prepend">
      <el-input v-model="innerValue" class="vp-textGroup-inner-input" />
      <span class="vp-textGroup-line">-</span>
    </div>
  </el-input>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class VInputGroup extends Vue {
  @Prop() option: Form.IFormItemCompOpt
  private value = ''
  private placeholder = ''
  private innerValue = ''

  @Watch('option.value')
  changeValue(newVal: string) {
    this.setGroupValue(newVal)
  }

  /**
   * 设置值
   */
  setGroupValue(value: string) {
    const groupV: string[] = value.split(',')
    if (groupV && groupV.length) {
      this.innerValue = groupV[0]
      this.value = groupV[1]
    }
  }

  get widthStyle() {
    return {
      width: this.option.width + 'px'
    }
  }

  get innerStyle() {
    return {
      width: '100px'
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
    this.setGroupValue(this.option.value)
    this.placeholder = this.option.placeholder ? this.option.placeholder : '请输入内容'
  }
  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取input的值
   */
  getValue() {
    return { [this.option.id]: [this.innerValue, this.value] || '' }
  }
  /**
   * @name: setValue
   * @param {val}
   * @return:
   * @description: 为input框赋值
   */
  setValue(val: string) {
    this.setGroupValue(val)
  }
}
</script>
