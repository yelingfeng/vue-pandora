<script lang="tsx">
import textComp from './text.vue'
import dateComp from './date.vue'
import selectComp from './select.vue'
import radioComp from './radio.vue'
import checkBoxComp from './checkbox.vue'
import buttonComp from './button.vue'
import autocompleteComp from './autoComplete.vue'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { isFunction, isArray, merge } from '@/utils/common'

@Component({
  components: {
    textComp,
    dateComp,
    selectComp,
    radioComp,
    checkBoxComp,
    buttonComp,
    autocompleteComp
  }
})
export default class VForm extends Vue {
  @Prop()
  option: Form.IFormOpt

  private labelPosition = ''
  private labelWidth = ''

  get formOpt() {
    return this.option
  }
  mounted() {
    this.labelPosition = this.option.labelPosition || 'right'
    if (this.option.labelWidth) {
      this.labelWidth = this.option.labelWidth + 'px'
    }
  }

  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取整个form组件所有组件里面的当前值
   */
  getValue() {
    const returnData: any = {}
    this.formOpt.items.forEach((it: Form.IFormItemOpt, index: number) => {
      if (it.show === undefined || it.show) {
        if (this.$refs['comp' + index]) {
          if (isFunction((this.$refs['comp' + index] as any).getValue)) {
            merge(returnData, (this.$refs['comp' + index] as any).getValue())
          }
        }
      }
    })
    return returnData
  }
  /**
   * @name: setValue
   * @param {data}
   * @return:
   * @description: 为组件里面赋值
   */
  setValue(data: Array<any>) {
    this.formOpt.items.forEach((it: Form.IFormItemOpt, index: number) => {
      data.forEach(d => {
        if (it.comOpt.id === d.id) {
          this.$nextTick(() => {
            ;(this.$refs['comp' + index] as any).setValue(d.value)
          })
        }
      })
    })
  }
  /**
   * @name: clearValue
   * @param {type}
   * @return:
   * @description: 清空value
   */
  clearValue() {
    this.formOpt.items.forEach((it: Form.IFormItemOpt, index: number) => {
      const vm = this.$refs['comp' + index] as any
      if (vm && isFunction(vm.setValue)) {
        vm.setValue('')
      }
    })
  }
  /**
   * @name: setItemData
   * @param {type}
   * @return:
   * @description: 组件data赋值
   */
  setItemData(id: string, data: Array<any>) {
    this.formOpt.items.forEach((it: Form.IFormItemOpt) => {
      if (it.comOpt.id === id) {
        it.comOpt.data = data
      }
    })
  }
  /**
   * @name: setShow
   * @param {type}
   * @return:
   * @description: 组件是否可显示
   */
  setShow(data: Array<any>) {
    this.formOpt.items.forEach((item: Form.IFormItemOpt) => {
      data.forEach(d => {
        if (item.comOpt.id === d.id) {
          item.show = d.value
        }
      })
    })
  }

  render() {
    let elBtns
    // let me = this
    const br = <br />
    const elItems = this.formOpt.items.map((it: Form.IFormItemOpt, index: number) => {
      let comp
      const ref = 'comp' + index
      switch (it.type) {
        case 'text':
          comp = <textComp option={it.comOpt} ref={ref} />
          break
        case 'date':
          comp = <dateComp option={it.comOpt} ref={ref} />
          break
        case 'select':
          comp = <selectComp option={it.comOpt} ref={ref} />
          break
        case 'radio':
          comp = <radioComp option={it.comOpt} ref={ref} />
          break
        case 'checkbox':
          comp = <checkBoxComp option={it.comOpt} ref={ref} />
          break
        case 'button':
          comp = <buttonComp option={it.comOpt} ref={ref} />
          break
        case 'autoComplete':
          comp = <autocompleteComp option={it.comOpt} ref={ref} />
          break
        default:
          break
      }
      let formBox
      if (it.show === undefined || it.show) {
        formBox = <el-form-item label={it.label}>{comp}</el-form-item>
      }
      if (it.wrap) {
        return (
          <span>
            {formBox} {br}
          </span>
        )
      }
      return formBox
    })
    if (this.formOpt.btns && isArray(this.formOpt.btns)) {
      elBtns = this.formOpt.btns.map((it: Form.IFormItemOpt, index: number) => {
        let formBox
        const ref: string = 'btn' + index
        const comp = <buttonComp option={it.comOpt} ref={ref} />
        if (it.show === undefined || it.show) {
          formBox = <el-form-item label={it.label}>{comp}</el-form-item>
        }
        if (it.wrap) {
          return (
            <span>
              {formBox} {br}
            </span>
          )
        }
        return formBox
      })
      if (this.formOpt.btnPos === 'right') {
        elBtns = <div class="vpandora-right-btns">{elBtns}</div>
      }
    }
    return (
      <div class="vpandora-form">
        <el-form
          inline={this.formOpt.inline}
          label-position={this.labelPosition}
          label-width={this.labelWidth}
          ref="form"
        >
          {elItems}
          {elBtns}
        </el-form>
      </div>
    )
  }
}
</script>
