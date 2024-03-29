<template>
  <el-select
    v-model="value"
    :clearable="option.clearable"
    :disabled="disabled"
    :filterable="option.filterable"
    :multiple="option.multiple"
    :popper-append-to-body="popperAppendToBody"
    :collapseTags="option.collapseTags"
    @change="changeHandler"
    @focus="focusHandler"
    @blur="blurHandler"
    :placeholder="placeholder"
    :style="widthStyle"
  >
    <template v-if="type === 'group'">
      <el-option-group v-for="item in data" :key="item.name" :label="item.name">
        <el-option
          v-for="it in item.options"
          :key="it.value"
          :label="it.name"
          :value="it.value"
        ></el-option>
      </el-option-group>
    </template>
    <el-option
      v-else
      v-for="item in data"
      :key="item.index"
      :label="item.name"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'

type selectType = string | string[]

@Component({
  components: {}
})
export default class VSelect extends Vue {
  @Prop() option: Form.IFormItemCompOpt

  private value: selectType = ''
  private disabled = false
  private placeholder = ''
  private data: object[] = []
  private type = ''
  private popperAppendToBody = true

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
    this.type = this.option.type
    if (this.option.multiple) {
      this.value = []
    } else {
      this.value = ''
    }
    this.value = this.option.value
    this.data = this.option.data || []
    this.disabled = this.option.disabled || false
    this.placeholder = this.option.placeholder ? this.option.placeholder : '请选择'
    this.popperAppendToBody = this.option.popperAppendToBody
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
      let originData = Object.create(null)
      this.data.forEach((item: any) => {
        if (item.value === val) originData = Object.assign({}, item)
      })
      this.option.change(val, originData)
    }
  }

  /**
   *
   **/
  focusHandler(event: any) {
    if (this.option.focus && isFunction(this.option.focus)) {
      let originData = Object.create(null)
      this.data.forEach((item: any) => {
        if (item.value === this.value) originData = Object.assign({}, item)
      })
      this.option.focus(this.value, originData)
    }
  }

  blurHandler(event: any) {
    if (this.option.blur && isFunction(this.option.blur)) {
      let originData = Object.create(null)
      this.data.forEach((item: any) => {
        if (item.value === this.value) originData = Object.assign({}, item)
      })
      this.option.blur(this.value, originData)
    }
  }
}
</script>
