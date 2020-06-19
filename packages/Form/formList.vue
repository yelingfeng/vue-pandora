<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'
import textComp from './text.vue'
import dateComp from './date.vue'
import selectComp from './select.vue'
@Component({
  components: {
    textComp,
    dateComp,
    selectComp
  }
})
export default class VFormList extends Vue {
  @Prop() option: Form.IFormItemCompOpt

  private value = ''

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

  render() {
    const br = <br />
    const elItems = this.childComp.map((it: Form.IFormItemOpt, index: number) => {
      let comp
      const ref = 'formlist-' + it.comOpt.id
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

    return <div id="vprandora-formList">{elItems}</div>
  }
}
</script>
