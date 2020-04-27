<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'
@Component({
  components: {}
})
export default class VSingleGroup extends Vue {
  @Prop() option: Form.IFormItemCompOpt
  render() {
    return <div id="vprandora-singleGroup"></div>
  }
  /**
   * @name: clickHandler
   * @param {type}
   * @return:
   * @description: button的点击回调函数
   */
  clickHandler() {
    if (this.option.click && isFunction(this.option.click)) {
      this.option.click()
    }
  }
  /**
   * @name: getValue
   * @param {type}
   * @return:
   * @description: 获取值
   */
  getValue() {
    return { [this.option.id]: this.option.value }
  }
}
</script>
