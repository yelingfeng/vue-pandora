<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { merge } from '@/utils/common'
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
  private originItems: any = []
  private lists: any = []

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
    // console.log(this._getFormListvalue())
    return { [this.option.id]: this.value }
  }

  //
  _getFormListvalue() {
    const returnValue = this.lists.map((comps: any, rowIndex: number) => {
      const rows = comps.map((it: Form.IFormItemOpt, index: number) => {
        const comp = this.$refs[this.getComKey(rowIndex, index, it.comOpt.id)] as any
        if (comp) {
          return comp.getValue()
        }
      })
      return rows
    })
    return returnValue
  }

  getNewItem() {
    return merge(this.option.items, {})
  }

  mounted() {
    // console.log(this.option)
    this.originItems = merge(this.option.items, {})
    this.addFormList()
  }
  private addFormList() {
    this.lists.push(this.getNewItem())
  }
  private cutFormList(index: number) {
    this.lists.splice(index, 1)
  }
  // 清空formList
  clearFormList() {}

  /**
   * 获取formList 行内单个组件的 唯一命名
   * @param rowIndex 行index
   * @oaram index  行内index
   * @param compId  组件id
   * @return   flItem-comp-${rowIndex}- {compId} - ${index}
   *
   */
  getComKey(rowIndex: number, index: number, compId: string) {
    return `flItem-comp-${rowIndex}-{compId}-${index}`
  }

  /**
   * 遍历一行的form组件
   * @param comps 组件
   * @param rowIndex 当前行index
   */
  getElItemsBox(comps: any, rowIndex: number) {
    const br = <br />
    const elItems = comps.map((it: Form.IFormItemOpt, index: number) => {
      let comp
      const ref = this.getComKey(rowIndex, index, it.comOpt.id)
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
    const id = `vpandora-formList-item-${rowIndex}`

    let markBox
    if (rowIndex > 0) {
      markBox = (
        <span class="formListPlus" on-click={() => this.cutFormList(rowIndex)}>
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
      <div id={id}>
        <div class="formListCon">{elItems}</div>
        {markBox}
      </div>
    )
  }

  render(h: any) {
    // 遍历lists
    const formItemWrapper = this.lists.map((it: any, index: number) => {
      const box = this.getElItemsBox(it, index)
      return box
    })
    return <div id="vpandora-formList">{formItemWrapper}</div>
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
