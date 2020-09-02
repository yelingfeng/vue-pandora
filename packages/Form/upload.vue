<script lang="tsx">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { isFunction } from '@/utils/common'

@Component({
  components: {}
})
/**
 * 上传组件
 */
export default class VUpload extends Vue {
  @Prop() option: Form.IFormItemCompOpt

  private uploadOption: Form.UpLoadType

  private buttonText = '选择'
  private tipText = '只能上传xls...'

  clearFiles() {
    ;(this.$refs.upload as any).clearFiles()
  }

  created() {
    this.uploadOption = this.option.uploadOption
    this.buttonText = this.uploadOption.buttonText
    this.tipText = this.uploadOption.tipText
  }

  mounted() {
    // console.log(this.option)
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

  render(h: any) {
    let uploadProps = Object.create(null)
    uploadProps = {
      props: {
        limit: this.uploadOption.limit,
        'http-request': this.uploadOption.httpRequest,
        'before-upload': this.uploadOption.beforeUpload,
        'show-file-list': this.uploadOption.showFileList || false,
        'on-preview': this.uploadOption.onPreview,
        'on-remove': this.uploadOption.onRemove,
        'on-change': this.uploadOption.onFileChange,
        'file-list': this.uploadOption.fileList || [],
        'auto-upload': this.uploadOption.autoUpload || false
      }
    }
    const button = (
      <el-button size="small" class="loadBtn" on-click={() => this.clearFiles}>
        {this.buttonText}
      </el-button>
    )
    const tip = <div class="tipBox">{this.tipText}</div>
    const upload = (
      <el-upload class="upload-demo" action="#" ref="upload" {...uploadProps}>
        {button}
        {tip}
      </el-upload>
    )

    return <div class="vpandora-upload-container">{upload}</div>
  }
}
</script>
