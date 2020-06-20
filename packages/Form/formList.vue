<!--
 * @Description: 
 * @Autor: niumiaomiao
 * @Date: 2020-06-19 11:49:15
 * @LastEditors: niumiaomiao
 * @LastEditTime: 2020-06-20 12:05:41
--> 
<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'
import textComp from './text.vue'
import dateComp from './date.vue'
import selectComp from './select.vue'
import radioComp from './radio.vue'
import checkBoxComp from './checkbox.vue'
import buttonComp from './button.vue'
import autocompleteComp from './autoComplete.vue'
import textGroupComp from './textGroup.vue'
import singleGroupComp from './singleGroup/index.vue'
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
export default class VFormList extends Vue {
  @Prop() option: Form.IFormItemCompOpt

  private value = ''
  private listNum: any = ['']
  private listIndex = 0

  get childComp() {
    return this.option.items || []
  }
  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取值
   */
  getValue() {
    return { [this.option.id]: this.childComp }
  }
  mounted() {
    // console.log(this.option)
  }
  private addFormList() {
    this.listNum.push('')
  }
  private cutFormList(val) {
    this.listNum.splice(val, 1)
  }

  render(h: any) {
    const br = <br />
    const elItems = this.childComp.map((it: Form.IFormItemOpt, index: number) => {
      let comp
      let ref = ''
      if (this.listNum.length > 1) {
        ref = 'formlist-' + it.comOpt.id + this.listIndex
      } else {
        ref = 'formlist-' + it.comOpt.id
      }
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
        return formBox
      }
    })
    return h(
      'div',
      this.listNum.map((item: any, index: number) => {
        this.listIndex = index
        let markBox
        if (index > 0) {
          markBox = (
            <span class="formListPlus" on-click={() => this.cutFormList(index)}>
              -
            </span>
          )
        } else {
          markBox = (
            <span class="formListPlus" on-click={() => this.addFormList()}>
              +
            </span>
          )
        }
        return (
          <div id="vpandora-formList">
            <div class="formListCon">{elItems}</div>
            {markBox}
          </div>
        )
      })
    )
  }
}
</script>
<style lang="less">
.formListCon {
  float: left;
}
.formListPlus {
  float: left;
  font-size: 24px;
  font-weight: bold;
  color: #077807;
  &:hover {
    cursor: pointer;
  }
}
</style>
