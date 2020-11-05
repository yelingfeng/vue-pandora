<template>
  <div>
    <el-date-picker
      :format="formatDate"
      :clearable="clearable"
      :disabled="option.disabled"
      :editable="false"
      :value-format="formatDate"
      v-if="type == 'datetime'"
      v-model="curValue"
      align="align"
      type="datetime"
      @change="changeHandler"
      :placeholder="placeholder"
      :default-time="dateOption.defaultTime"
      :picker-options="dateOption.pickOptions"
      :style="widthStyle"
    ></el-date-picker>
    <el-date-picker
      :format="formatDate"
      :disabled="option.disabled"
      :clearable="clearable"
      :editable="false"
      :value-format="formatDate"
      v-if="type == 'datetimerange'"
      v-model="curValue"
      type="datetimerange"
      :placeholder="placeholder"
      align="align"
      :range-separator="dateOption.rangeSeparator"
      :default-time="dateOption.defaultTime"
      :start-placeholder="dateOption.startplaceholder"
      :end-placeholder="dateOption.endplaceholder"
      :picker-options="dateOption.pickOptions"
      @change="changeHandler"
      :style="widthStyle"
    ></el-date-picker>
    <el-date-picker
      :format="formatDate"
      :disabled="option.disabled"
      :clearable="clearable"
      :editable="false"
      :value-format="formatDate"
      v-if="type == 'datetimeMinute'"
      v-model="curValue"
      type="datetimeMinute"
      align="align"
      @change="changeHandler"
      :placeholder="placeholder"
      :default-time="dateOption.defaultTime"
      :picker-options="dateOption.pickOptions"
      :style="widthStyle"
    ></el-date-picker>
    <el-date-picker
      :format="formatDate"
      :disabled="option.disabled"
      :clearable="clearable"
      :editable="false"
      :value-format="formatDate"
      v-if="type == 'date'"
      v-model="curValue"
      type="date"
      align="align"
      @change="changeHandler"
      :placeholder="placeholder"
      :default-time="dateOption.defaultTime"
      :picker-options="dateOption.pickOptions"
      :style="widthStyle"
    ></el-date-picker>
    <el-date-picker
      :format="formatDate"
      :clearable="clearable"
      :disabled="option.disabled"
      :editable="false"
      :value-format="formatDate"
      v-if="type == 'year'"
      v-model="curValue"
      align="align"
      type="year"
      @change="changeHandler"
      :placeholder="placeholder"
      :default-time="dateOption.defaultTime"
      :picker-options="dateOption.pickOptions"
      :style="widthStyle"
    ></el-date-picker>
    <el-date-picker
      :format="formatDate"
      :clearable="clearable"
      :disabled="option.disabled"
      :editable="false"
      :value-format="formatDate"
      v-if="type == 'month'"
      v-model="curValue"
      align="align"
      type="month"
      @change="changeHandler"
      :placeholder="placeholder"
      :default-time="dateOption.defaultTime"
      :picker-options="dateOption.pickOptions"
      :style="widthStyle"
    ></el-date-picker>
    <el-date-picker
      :format="formatDate"
      :clearable="clearable"
      :disabled="option.disabled"
      :editable="false"
      :value-format="formatDate"
      v-if="type == 'week'"
      v-model="curValue"
      align="align"
      type="week"
      @change="changeHandler"
      :placeholder="placeholder"
      :default-time="dateOption.defaultTime"
      :picker-options="dateOption.pickOptions"
      :style="widthStyle"
    ></el-date-picker>
  </div>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import { isArray, isFunction } from '@/utils/common'
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
  private dateOption: Form.DateOptionType
  private curValue: string | Array<string> = ''
  private type = ''
  private clearable = true
  private formatDate = ''
  private align = ''
  private placeholder = '请选择日期'

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
    this.dateOption = this.option.dateOption || {}
    this.clearable = this.dateOption.clearable || false
    this.placeholder = this.option.placeholder || '请选择日期'
    this.typeFormat()
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
    // console.log(val)
    if (this.option.change && isFunction(this.option.change)) {
      this.option.change(val)
    }
  }

  inputHandler(val: string) {
    if (this.option.input && isFunction(this.option.input)) {
      this.option.input(val)
    }
  }
  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取日期当前值
   */
  getValue() {
    const format = this.dateformatHandler()
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
   * 日期格式处理 根据type类型
   **/
  dateformatHandler() {
    let format = ''
    switch (this.type) {
      case 'datetime':
        format = 'yyyy-MM-dd HH:mm:ss'
        break
      case 'datetimerange':
        format = 'yyyy-MM-dd HH:mm:ss'
        break
      case 'datetimeMinute':
        format = 'yyyy-MM-dd HH:mm'
        break
      case 'date':
        format = 'yyyy-MM-dd'
        break
      case 'year':
        format = 'yyyy'
        break
      case 'month':
        format = 'M'
        break
      case 'week':
        format = 'W'
        break
      default:
    }
    return format
  }

  /**
   * @name:typeFormat
   * @param {val} this.type的值
   * @return:
   * @description:
   */
  typeFormat() {
    if (this.dateOption.format) {
      this.formatDate = this.dateOption.format
      return
    }
    this.formatDate = this.dateformatHandler()
  }
}
</script>
