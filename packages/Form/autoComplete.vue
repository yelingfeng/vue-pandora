<!--
 * @Description: 
 * @Autor: niumiaomiao
 * @Date: 2020-12-10 14:22:55
 * @LastEditors: niumiaomiao
 * @LastEditTime: 2020-12-10 15:40:58
-->
<template>
  <el-autocomplete
    v-model="value"
    :placeholder="placeholder"
    :style="widthStyle"
    :disabled="option.disabled"
    :fetch-suggestions="querySearch"
    :trigger-on-focus="option.onFocus || false"
    @change="changeHandler"
  ></el-autocomplete>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'
@Component({
  components: {}
})
export default class VAutocomplete extends Vue {
  @Prop() option: Form.IFormItemCompOpt

  private autoList: any[]
  private value = ''
  private placeholder = ''

  get widthStyle() {
    return {
      width: this.option.width + 'px'
    }
  }
  @Watch('option.data')
  renderChange(data: any[]) {
    this.autoList = data
  }

  mounted() {
    this.autoList = this.option.data || []
  }

  /**
   * @description:得到建议列表的数据
   * @param {type}
   * @return:
   */

  querySearch(queryString: string, cb: Function) {
    const data = this.autoList
    const results = queryString ? data.filter(this.createFilter(queryString)) : data
    // 调用 callback 返回建议列表的数据
    cb(results)
  }
  /**
   * @description:
   * @param {type}
   * @return:
   */
  createFilter(queryString: string) {
    return (data: any) => {
      return data.value.indexOf(queryString.toLowerCase()) === 0
    }
  }
  /**
   * @description:得到当前值
   * @param {type}
   * @return:
   */
  getValue() {
    return { [this.option.id]: this.value || '' }
  }
  /**
   * @description: 设置当前值
   * @param {type}
   * @return:
   */
  setValue(val: string) {
    if (val !== undefined) this.value = val
  }
  /**
   * @name:
   * @param {val}
   * @return:
   * @description: 绑定值发生变化事件
   */
  changeHandler(val: string) {
    if (this.option.change && isFunction(this.option.change)) {
      this.option.change(val)
    }
  }
}
</script>
