<template>
  <el-cascader
    v-model="value"
    :options="cascadeOptions.options"
    :props="cascadeOptions.props"
    :size="cascadeOptions.size"
    :placeholder="option.placeholder"
    :disabled="option.disabled"
    :show-all-levels="cascadeOptions.showAllLevels"
    :separator="cascadeOptions.separator"
    @change="changeHandler"
  >
  </el-cascader>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'

const defaultCascadeOption = {
  size: 'medium',
  showAllLevels: true,
  separator: '/'
}

@Component({
  components: {}
})
export default class VCascade extends Vue {
  @Prop() option: Form.IFormItemCompOpt

  private value = ''
  private disabled = false
  private placeholder = ''
  private cascadeOptions: Form.CascadeOptionType = {}
  private data = []

  get widthStyle() {
    return {
      width: this.option.width + 'px'
    }
  }

  @Watch('option.data')
  renderData(newVal: any) {
    if (newVal && newVal.length) {
      this.cascadeOptions.options = newVal
    }
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
    this.value = this.option.value
    this.disabled = this.option.disabled || false
    this.placeholder = this.option.placeholder ? this.option.placeholder : '请选择'
    this.cascadeOptions = this.option.cascadeOption || defaultCascadeOption
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
   * 设置select disabled属性
   */
  setDisabled(val: boolean) {
    if (val !== undefined) this.disabled = val
  }

  /**
   * @name:
   * @param {val}
   * @return:
   * @description: 选中值发生变化时触发
   */
  changeHandler(val: string, data: any) {
    if (this.option.change && isFunction(this.option.change)) {
      // let originData = Object.create(null)
      // this.data.forEach((item: any) => {
      //   if (item.value === val) originData = Object.assign({}, item)
      // })
      this.option.change(val)
    }
  }
}
</script>
