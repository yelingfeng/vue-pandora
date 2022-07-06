<script lang="tsx">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import MapClass from './class'
@Component({
  name: 'GisMap'
})
export default class GisMap extends Vue {
  @Prop() options: GisMap.IBMapConfig

  @Ref() readonly GisRef!: any
  private isDrawing = false

  private $mapClass: any
  created() {}

  mounted() {
    let el = this.$refs.GisRef

    let opt = Object.assign({}, this.options, {
      el,
      onClick: this.onClickHandler.bind(this),
      overlayComplete: this.overlayComplete.bind(this)
    })

    this.$mapClass = new MapClass(opt)
  }

  openInfoPanel(content, e) {
    if (this.$mapClass) this.$mapClass.openInfoPanel(content, e)
  }

  /**
   * [overlayComplete 绘画完成]
   * @param  {[type]} result [description]
   * @return {[type]}        [description]
   */
  overlayComplete(result) {
    this.$emit('drawComplete', result)
  }

  onClickHandler(e, dataObj) {
    this.$emit('markerClick', {
      e,
      data: dataObj
    })
  }

  // 添加标记
  addMarkers(data) {
    if (data && this.$mapClass !== undefined && data.length) {
      this.$mapClass.addMarkers(data)
    }
  }

  // 点聚焦
  markerZoomAdapter(data) {
    if (data && this.$mapClass !== undefined && data.length) {
      this.$mapClass.markerZoomAdapter(data)
    }
  }

  // 渲染热地图
  drawHeatMap(obj) {
    let { data } = obj
    if (data && this.$mapClass !== undefined && data.length) {
      this.$mapClass.drawHeatMap(obj)
    }
  }

  // 画圆
  drawCircle(config) {
    if (config) this.$mapClass.drawCircle(config)
  }
  // 画多边形
  drawPolygon(arr) {
    if (arr && arr.length) this.$mapClass.drawPolygon(arr)
  }
  // 划线
  drawPolyline(arr) {
    if (arr && arr.length) this.$mapClass.drawPolyline(arr)
  }
  // 画区域
  drawOverlay(arrs) {
    if (arrs && arrs.length) this.$mapClass.drawOverlay(arrs)
  }

  // 打开编辑模式
  openEditorMode() {
    if (this.$mapClass) this.$mapClass.openEditorMode()
  }

  // 销毁方法
  beforeDestory() {
    if (this.$mapClass) this.$mapClass.destory()
  }

  //清理所有覆盖物
  clearAllOverlay() {
    if (this.$mapClass) this.$mapClass.clearAllOverlay()
  }
  // 获取当前图层数据
  getOverlayData() {
    if (this.$mapClass) return this.$mapClass.getCurOverlayData()
  }

  isDrawingState() {
    if (this.$mapClass) return this.$mapClass.isDrawingState()
  }

  render(h) {
    return <div ref="GisRef" class="gis-container" />
  }
}
</script>
<style scoped>
.gis-container {
  width: 100%;
  height: 100%;
}
</style>
