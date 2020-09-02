<template>
  <div class="vpandora-upload-container">
    <el-upload
      class="upload-demo"
      action="#"
      :http-request="this.option.httpRequest"
      :before-upload="this.option.beforeUpload"
      :show-file-list="this.option.showFileList || false"
      :on-preview="this.option.onPreview"
      :on-remove="this.option.onRemove"
      :on-change="this.option.onFileChange"
      :on-error="this.option.onError"
      :on-success="this.option.onSuccess"
      :file-list="this.option.FileList"
      :auto-upload="this.option.autoUpload || false"
      :limit="this.option.limit"
      ref="upload"
    >
      <el-button slot="trigger" size="small" class="loadBtn" @click="clearFiles">{{
        buttonText
      }}</el-button>
      <div slot="tip" class="tipBox" v-text="tipText"></div>
    </el-upload>
  </div>
</template>

<script lang="ts">
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

  mounted() {
    this.uploadOption = this.option.uploadOption
    this.buttonText = this.uploadOption.buttonText
    this.tipText = this.uploadOption.tipText
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
