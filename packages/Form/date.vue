<template>
  <div>
    <el-date-picker
      :format="formatDate"
      :clearable="clearable"
      :disabled="option.disabled"
      :editable="false"
      v-if="type == 'datetime'"
      v-model="curValue"
      align="align"
      type="datetime"
      @change="changeHandler"
      placeholder="选择日期时间"
      :default-time="option.defaultTime"
      :picker-options="option.pickOptions"
      :style="widthStyle"
    ></el-date-picker>
    <el-date-picker
      :format="formatDate"
      :disabled="option.disabled"
      :clearable="clearable"
      :editable="false"
      v-if="type == 'datetimerange'"
      v-model="curValue"
      type="datetimerange"
      placeholder="选择日期时间"
      align="align"
      :range-separator="option.rangeSeparator"
      :default-time="option.defaultTime"
      :start-placeholder="option.startplaceholder"
      :end-placeholder="option.endplaceholder"
      :picker-options="option.pickOptions"
      @change="changeHandler"
      :style="widthStyle"
    ></el-date-picker>
    <el-date-picker
      :format="formatDate"
      :disabled="option.disabled"
      :clearable="clearable"
      :editable="false"
      v-if="type == 'datetimeMinute'"
      v-model="curValue"
      type="datetime"
      align="align"
      @change="changeHandler"
      placeholder="选择日期时间"
      :default-time="option.defaultTime"
      :picker-options="option.pickOptions"
      :style="widthStyle"
    ></el-date-picker>
    <el-date-picker
      :format="formatDate"
      :disabled="option.disabled"
      :clearable="clearable"
      :editable="false"
      v-if="type == 'date'"
      v-model="curValue"
      type="date"
      align="align"
      @change="changeHandler"
      placeholder="选择日期"
      :default-time="option.defaultTime"
      :picker-options="option.pickOptions"
      :style="widthStyle"
    ></el-date-picker>
  </div>
</template>
<script lang="ts">
import dayjs from 'dayjs'
import { isFunction } from '@/utils/common'
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
/**
 * value： 当前值
 * option.type	显示类型
 * option.disabled：是否禁用
 * option.clearable：	是否显示清除按钮
 * option.pickOptions：
 * option.width： 设置宽度
 * option.format: 设置日期显示格式
 */
export default class VDate extends Vue {
  @Prop() option: Form.IFormItemCompOpt
  private curValue: string | Array<string> = ''
  private type = ''
  private clearable = true
  private formatDate = ''
  private align = ''

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
   * @description: date组件，初始化函数
   */
  initFunc() {
    this.curValue = this.option.value
    this.type = this.option.type
    this.align = this.option.align || 'left'
    this.typeFormat(this.type)
    this.clearable = this.option.clearable || false
  }
  /**
   * @name: setValue
   * @param {val}
   * @return:
   * @description: 设置当前值
   */
  setValue(val: string) {
    if (val !== undefined) {
      this.curValue = val
    }
  }
  /**
   * @name: setValue
   * @param {val}
   * @return:
   * @description: 	用户确认选定的值时触发	组件绑定值。
   */
  changeHandler(val: string) {
    if (this.option.change && isFunction(this.option.change)) {
      this.option.change(val)
    }
  }
  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取日期当前值
   */
  getValue() {
    let format
    switch (this.type) {
      case 'datetime':
        format = 'YYYY-MM-DD HH:mm:ss'
        break
      case 'datetimerange':
        format = 'YYYY-MM-DD HH:mm:ss'
        break
      case 'datetimeMinute':
        format = 'YYYY-MM-DD HH:mm'
        break
      case 'date':
        format = 'YYYY-MM-DD'
        break
      default:
    }
    if (this.curValue === '' || !this.curValue) {
      return { [this.option.id]: this.curValue || '' }
    }
    if (this.curValue instanceof Array) {
      return {
        [this.option.id]:
          dayjs(this.curValue[0]).format(format) + ',' + dayjs(this.curValue[1]).format(format)
      }
    }
    return { [this.option.id]: dayjs(this.curValue).format(format) }
  }
  /**
   * @name:typeFormat
   * @param {val} this.type的值
   * @return:
   * @description:
   */
  typeFormat(val: string) {
    if (this.option.format) {
      this.formatDate = this.option.format
      return
    }
    switch (val) {
      case 'datetime':
        this.formatDate = 'yyyy-MM-dd HH:mm:ss'
        break
      case 'datetimerange':
        this.formatDate = 'yyyy-MM-dd HH:mm:ss'
        break
      case 'datetimeMinute':
        this.formatDate = 'yyyy-MM-dd HH:mm'
        break
      case 'date':
        this.formatDate = 'yyyy-MM-dd'
        break
      default:
    }
  }
}
</script>
