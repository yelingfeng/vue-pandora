<script lang="tsx">
import { watch } from '@vue/composition-api'
import { Component, Vue, Prop, Ref, Watch } from 'vue-property-decorator'
import MapClass from './class'
@Component({
  name: 'VGisMap'
})
export default class VGisMap extends Vue {
  @Prop() options: GisMap.IBMapConfig

  @Ref() readonly GisRef!: any
  private isDrawing = false
  // 是否显示轨迹回放
  private isLushu: any = false
  // lushu 数据  显示实时状态用到
  private lushuData: any = []
  private playBack: any = null
  // lushu实例
  private lushuComp: any = null

  private $mapClass: any
  created() {}

  mounted() {
    const el = this.$refs.GisRef

    const opt = Object.assign({}, this.options, {
      el,
      onClick: this.onClickHandler.bind(this),
      overlayComplete: this.overlayComplete.bind(this)
    })
    this.$mapClass = new MapClass(opt)
    if (this.options.isDraw) {
      this.$mapClass.openEditorMode()
    } else {
      this.$mapClass.closeEditorMode()
    }
  }

  @Watch('options.isDraw')
  isDrawHandler(newVal, oldVal) {
    if (newVal) {
      this.$mapClass.openEditorMode()
    } else {
      this.$mapClass.closeEditorMode()
    }
  }

  // 打开infowindow
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

  // 标记点点击事件
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

  // 点聚焦 设置地图层级
  markerZoomAdapter(data) {
    if (data && this.$mapClass !== undefined && data.length) {
      this.$mapClass.markerZoomAdapter(data)
    }
  }

  // 渲染热地图
  drawHeatMap(obj) {
    const { data } = obj
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
  // 海量点
  drawPointCollection(arrs, opt) {
    if (arrs && arrs.length) this.$mapClass.drawPointCollection(arrs, opt)
  }

  // 打开编辑模式
  openEditorMode() {
    if (this.$mapClass) this.$mapClass.openEditorMode()
  }

  // 关闭编辑模式
  closeEditorMode() {
    if (this.$mapClass) this.$mapClass.closeEditorMode()
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
  // 判断是否为绘制状态 如果“是”的话 阻止操作
  isDrawingState() {
    if (this.$mapClass) return this.$mapClass.isDrawingState()
  }

  //绘制轨迹
  drawTrajectory(arr) {
    if (this.$mapClass) return this.$mapClass.drawTrajectory(arr)
  }

  // lushu
  drawLushu(arr) {
    if (arr && arr.length) {
      this.lushuComp = this.$mapClass.drawLushu(arr)
      this.lushuData = arr
      this.isLushu = true
    }
  }
  // lushu实时状态
  lushuReal() {
    this.clearAllOverlay()
    const arr = this.lushuData
    if (arr && arr.length) this.$mapClass.drawTrajectory(arr)
  }
  // lushu暂停
  lushuPause() {
    if (this.lushuComp) {
      this.lushuComp.pause()
    }
  }
  // lushu停止
  lushuStop() {
    if (this.lushuComp) {
      this.lushuComp.stop()
    }
  }
  // 回放
  lushuStart() {
    if (this.lushuComp) {
      this.lushuComp.start()
    }
  }
  //继续
  lushuContinue() {
    if (this.lushuComp) {
      this.lushuComp.continue()
    }
  }
  // mapv
  drawBaiduMapLayer(arr, opt) {
    if (arr && arr.length) this.$mapClass.drawBaiduMapLayer(arr, opt)
  }
  drawMapGLLushu(arr) {
    if (arr && arr.length) {
      this.lushuComp = this.$mapClass.drawMapGLLushu(arr)
      this.lushuData = arr
      this.isLushu = true
    }
  }
  // 轨迹动画
  drawTrackAnimation(arr, opt) {
    if (arr && arr.length) this.$mapClass.drawTrackAnimation(arr, opt)
  }
  // 回放按钮
  drawPlayBackBtn(option) {
    if (option.btns && option.btns.length) {
      const btnHtml = option.btns.map(it => {
        return <el-button onClick={it.click}>{it.label}</el-button>
      })
      const btnStyle = option.pos
      this.playBack = (
        <div class="vpandora-gis-playBack" style={btnStyle}>
          {btnHtml}
        </div>
      )
    }
    return this.playBack
  }

  render() {
    // console.log(this.$slots.playBack)
    // const playBack = this.$slots.playBack
    return (
      <div class="vpandora-gis">
        <div ref="GisRef" class="vpandora-gis-box"></div>
        {this.playBack}
      </div>
    )
  }
}
</script>
