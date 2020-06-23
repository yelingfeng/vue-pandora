<script lang="tsx">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'
import textComp from './text.vue'
import dateComp from './date.vue'
import selectComp from './select.vue'
import buttonComp from './button.vue'
@Component({
  components: {
    textComp,
    dateComp,
    selectComp,
    buttonComp
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
    return { [this.option.id]: this.value }
  }
  mounted() {
    // console.log(this.option)
  }
  private addFormList() {
    this.listNum.push('')
  }
  private cutFormList(index: number) {
    this.listNum.splice(index, 1)
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
        case 'button':
          comp = <buttonComp key={ref} option={comOpt} ref={ref} />
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
    const formListitems = this.listNum.map((item: any, index: number) => {
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
        <div id="vpandora-formList-item">
          <div class="formListCon">{elItems}</div>
          {markBox}
        </div>
      )
    })
    return <div id="vpandora-formList">{formListitems}</div>
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
