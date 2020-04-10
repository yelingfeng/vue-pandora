<template>
  <el-select
    v-model="value"
    :clearable="option.clearable"
    :disabled="option.disabled"
    :filterable="option.filterable"
    :multiple="option.multiple"
    @change="changeHandler"
    :placeholder="placeholder"
    :style="widthStyle"
  >
    <el-option
      v-for="item in data"
      :key="item.name"
      :label="item.name"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { isFunction } from '../../src/utils/common'
@Component({
  components: {}
})
export default class VSelect extends Vue {
  @Prop() option: Form.IFormItemCompOpt

  private value = ''
  private placeholder = ''
  private data: object[] = []

  get widthStyle() {
    return {
      width: this.option.width + 'px'
    }
  }

  @Watch('option.data')
  renderData(newVal: any) {
    this.data = newVal
  }

  mounted() {
    this.initFunc()
  }
  /**
   * @name: initFunc
   * @param {type}
   * @return:
   * @description: 组件初始化函数
   */
  initFunc() {
    this.data = this.option.data || []
    this.value = this.option.value
    this.placeholder = this.option.placeholder ? this.option.placeholder : '请选择-text'
  }
  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取select组件的当前值
   */
  getValue() {
    return { [this.option.id]: this.value }
  }
  /**
   * @name:
   * @param {val}
   * @return:
   * @description: 设置select组件的当前值
   */
  setValue(val: string) {
    if (val !== undefined) this.value = val
  }
  /**
   * @name:
   * @param {val}
   * @return:
   * @description: 选中值发生变化时触发
   */
  changeHandler(val: string) {
    if (this.option.change && isFunction(this.option.change)) {
      this.option.change(val)
    }
  }
}
</script>
