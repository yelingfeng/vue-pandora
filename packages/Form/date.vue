<template>
  <div>
    <el-date-picker
      :format="formatDate"
      :clearable="clearable"
      :disabled="option.disabled"
      :editable="false"
      :value-format="valueFormat"
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
      :value-format="valueFormat"
      v-if="type == 'daterange'"
      v-model="curValue"
      type="daterange"
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
      :value-format="valueFormat"
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
      :value-format="valueFormat"
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
      :value-format="valueFormat"
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
      :value-format="valueFormat"
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
      :value-format="valueFormat"
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
      :format="start + ' - ' + end"
      :clearable="clearable"
      :disabled="option.disabled"
      :editable="false"
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
  private valueFormat = ''
  private valueSeparator = ''
  private start = ''
  private end = ''

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
    this.valueFormat = this.dateOption?.valueFormat || ''
    this.valueSeparator = this.dateOption?.valueSeparator ?? ','

    if (this.type === 'week') {
      this.setWeekPickValue()
    } else {
      if (this.dateOption.format) {
        this.formatDate = this.dateOption.format
      } else {
        this.typeFormat()
      }
    }
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
   * 设置周的显示格式化值
   */
  setWeekPickValue() {
    let startTime = dayjs(this.curValue as string).subtract(1, 'day')
    let endTime = dayjs(startTime).add(6, 'day')
    this.start = this.splitDate(startTime)
    this.end = this.splitDate(endTime)
  }
  /**
   * @name: setValue
   * @param {val}
   * @return:
   * @description: 	用户确认选定的值时触发	组件绑定值。
   */
  changeHandler(val: string) {
    if (this.type === 'week') {
      this.setWeekPickValue()
      this.option.change([this.start, this.end])
    } else {
      if (this.option.change && isFunction(this.option.change)) {
        this.option.change(val)
      }
    }
    // console.log(val)
  }

  inputHandler(val: string) {
    if (this.option.input && isFunction(this.option.input)) {
      this.option.input(val)
    }
  }

  _valueFormat(val) {
    const format = this.dateformatHandler(true)
    if (this.valueFormat !== '') {
      return val
    } else {
      return dayjs(val).format(format)
    }
  }

  splitDate(date) {
    return dayjs(date).format(this.dateOption?.valueFormat || 'YYYYMMDD')
  }
  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取日期当前值
   */
  getValue() {
    if (this.type === 'week') {
      return { [this.option.id]: [this.start, this.end] }
    }

    if (this.curValue === '' || !this.curValue) {
      return { [this.option.id]: this._valueFormat(this.curValue) || '' }
    }

    if (this.curValue instanceof Array) {
      return {
        [this.option.id]:
          this._valueFormat(this.curValue[0]) +
          this.valueSeparator +
          this._valueFormat(this.curValue[1])
      }
    }
    let value = ''
    if (this.valueFormat === '') {
      const format = this.dateformatHandler(true)
      value = dayjs(this.curValue).format(format)
    } else {
      value = this.curValue
    }
    return { [this.option.id]: value }
  }

  /**
   * 日期格式处理 根据type类型
   *
   * @param {boolean} isDayjs dayjs的格式化 跟element-ui有冲突 主要在YYYY dd
   **/
  dateformatHandler(isDayjs = false) {
    let format = ''
    const YEAR = isDayjs ? 'YYYY' : 'yyyy'
    const DAY = isDayjs ? 'DD' : 'dd'
    const HOUR = isDayjs ? 'HH' : 'hh'
    const DATE = `${YEAR}-MM-${DAY}`
    const DATETIMEMINUTE = `${DATE} ${HOUR}:mm`
    const DATETIME = `${DATETIMEMINUTE}:ss`
    switch (this.type) {
      case 'datetime':
        format = DATETIME
        break
      case 'datetimerange':
        format = DATETIME
        break
      case 'datetimeMinute':
        format = DATETIMEMINUTE
        break
      case 'date':
        format = DATE
        break
      case 'daterange':
        format = DATE
        break
      case 'year':
        format = YEAR
        break
      case 'month':
        format = 'M'
        break
      case 'week':
        format = 'WW'
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
    this.formatDate = this.dateformatHandler(false)
  }
}
</script>
