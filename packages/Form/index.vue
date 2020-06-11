<script lang="tsx">
import textComp from './text.vue'
import dateComp from './date.vue'
import selectComp from './select.vue'
import radioComp from './radio.vue'
import checkBoxComp from './checkbox.vue'
import buttonComp from './button.vue'
import autocompleteComp from './autoComplete.vue'
import textGroupComp from './textGroup.vue'
import singleGroupComp from './singleGroup/index.vue'
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import { isFunction, isArray, merge } from '@/utils/common'
import { ElForm, ValidateCallback } from 'element-ui/types/form'

@Component({
  components: {
    textComp,
    dateComp,
    selectComp,
    radioComp,
    checkBoxComp,
    buttonComp,
    textGroupComp,
    autocompleteComp,
    singleGroupComp
  }
})
export default class VForm extends Vue {
  @Prop()
  option: Form.IFormOption

  @Ref() readonly form!: ElForm

  private labelPosition = ''
  private labelWidth = ''

  private formVaildModel = Object.create(null)

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
    const returnData: any = Object.create(null)
    this.formOpt.items.forEach((it: Form.IFormItemOpt, index: number) => {
      if (it.show === undefined || it.show) {
        const comp = this.$refs['comp-' + it.comOpt.id] as any
        if (comp && isFunction(comp.getValue)) {
          merge(returnData, comp.getValue())
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
            const comp = this.$refs['comp-' + it.comOpt.id] as any
            if (comp) {
              comp.setValue(d.value)
            }
          })
        }
      })
    })
  }
  /**
   * @name: setDisabled
   * @param {data}
   * @return:
   * @description: 为组件显示隐藏
   */
  setDisabled(data: Array<any>) {
    this.formOpt.items.forEach((it: Form.IFormItemOpt, index: number) => {
      data.forEach(d => {
        if (it.comOpt.id === d.id) {
          this.$nextTick(() => {
            const comp = this.$refs['comp-' + it.comOpt.id] as any
            if (comp) {
              comp.setDisabled(d.value)
            }
          })
        }
      })
    })
  }

  /**
   * 设置按钮禁用可用
   */
  setBtnDisabled(data: Array<any>) {
    const btns = this.formOpt.btns || []
    btns.forEach((it: Form.IFormItemOpt, index: number) => {
      data.forEach(d => {
        if (it.comOpt.id === d.id) {
          this.$nextTick(() => {
            const comp = this.$refs['comp-' + it.comOpt.id] as any
            if (comp) {
              comp.setDisabled(d.value)
            }
          })
        }
      })
    })
  }

  /**
   * 动态设置 必填属性状态
   ** @param {data}
   * @return:
   */
  setRequired(data: Array<any>) {
    this.formOpt.items.forEach((it: Form.IFormItemOpt, index: number) => {
      data.forEach(d => {
        if (it.comOpt.id === d.id) {
          it.required = d.value
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
      const vm = this.$refs['comp-' + it.comOpt.id] as any
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
    this.formOpt.items.forEach((item: Form.IFormItemOpt, index: number) => {
      data.forEach(d => {
        if (item.comOpt.id === d.id) {
          item.show = d.value
        }
      })
    })
  }

  validate(cb: ValidateCallback) {
    return this.form.validate(cb)
  }
  resetFields() {
    this.form.resetFields()
  }

  clearValidate(props?: string | string[]) {
    this.form.clearValidate(props)
  }

  render() {
    let elBtns
    // let me = this
    const br = <br />
    const elItems = this.formOpt.items.map((it: Form.IFormItemOpt, index: number) => {
      let comp
      const ref = 'comp-' + it.comOpt.id
      let comOpt = Object.create(null)
      comOpt = Object.assign({}, it.comOpt)
      switch (it.type) {
        case 'text':
          comp = <textComp key={ref} option={comOpt} ref={ref} />
          break
        case 'date':
          comp = <dateComp key={ref} option={comOpt} ref={ref} />
          break
        case 'select':
          comp = <selectComp key={ref} option={comOpt} ref={ref} />
          break
        case 'radio':
          comp = <radioComp key={ref} option={comOpt} ref={ref} />
          break
        case 'checkbox':
          comp = <checkBoxComp key={ref} option={comOpt} ref={ref} />
          break
        case 'button':
          comp = <buttonComp key={ref} option={comOpt} ref={ref} />
          break
        case 'autoComplete':
          comp = <autocompleteComp key={ref} option={comOpt} ref={ref} />
          break
        case 'textGroup':
          comp = <textGroupComp key={ref} option={comOpt} ref={ref} />
          break
        case 'singleGroup':
          comp = <singleGroupComp key={ref} option={comOpt} ref={ref} />
          break
        default:
          break
      }
      let formBox
      let requiredBox
      if (it.show === undefined || it.show) {
        if (it.required) {
          requiredBox = <span class="vpandora-form-required">*</span>
        }
        formBox = (
          <el-form-item label={it.label}>
            {comp}
            {requiredBox}
          </el-form-item>
        )
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
        const ref: string = 'comp-' + it.comOpt.id
        let comp
        if (it.show === undefined || it.show) {
          if (it.comOpt.type && it.comOpt.type === 'icon') {
            let tooltipProp = Object.create(null)
            tooltipProp = {
              props: {
                placement: 'top',
                content: '',
                'open-delay': it.comOpt.tooltipDelay || 1000
              }
            }
            if (it.comOpt.title) {
              tooltipProp.props.content = it.comOpt.title
            } else {
              tooltipProp.props.disabled = true
            }
            comp = (
              <el-tooltip {...tooltipProp}>
                <i
                  class={it.comOpt.className ? it.comOpt.className : 'el-icon-edit'}
                  on-click={() => it.comOpt.click && it.comOpt.click()}
                ></i>
              </el-tooltip>
            )
          } else {
            comp = <buttonComp option={it.comOpt} ref={ref} />
          }
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
    let formProps = Object.create(null)
    formProps = {
      props: {
        inline: this.formOpt.inline,
        'label-position': this.labelPosition,
        'label-width': this.labelWidth
      }
    }
    return (
      <div class="vpandora-form">
        <el-form {...formProps} ref="form">
          {elItems}
          {elBtns}
        </el-form>
      </div>
    )
  }
}
</script>
