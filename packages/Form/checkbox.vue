<template>
  <div :style="widthStyle">
    <el-checkbox-group v-model="value" :disabled="option.disabled" @change="changeHandler">
      <el-checkbox
        v-for="(item, index) in option.data"
        :key="index"
        :disabled="item.disabled"
        :label="item.value"
        >{{ item.name }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'

@Component({
  components: {}
})
export default class VCheckbox extends Vue {
  @Prop() option: Form.IFormItemCompOpt

  private value: string[] = []

  get widthStyle() {
    return {
      width: this.option.width || 12 + 'px'
    }
  }
  created() {
    this.value = this.option.value
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
  setValue(val: any[]) {
    this.value = val
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
