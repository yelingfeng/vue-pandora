<template>
  <div class="gisDemo-container">
    <el-row style="margin-bottom:10px;">
      <el-col :span="24">
        <el-button @click.native="clearMap">清除</el-button>
        <el-button @click.native="setMapZoom">重置地图层级</el-button>
        <el-button @click.native="drawTrajectory">绘制轨迹</el-button>
        <el-button @click.native="drawLushu">启动轨迹回放</el-button>
        <el-button @click.native="drawTrackAnimation">轨迹动画</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="gisMapBox">
          <GisMap
            ref="drawMap"
            :options="mapOption"
            @markerClick="markerClick"
            @drawComplete="drawComplete"
          ></GisMap>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref, Watch } from 'vue-property-decorator'
import GisMap from '../../packages/GisMap/index.vue'
import { Message } from 'element-ui'
import _ from 'lodash'

const BMAP_POINT_SIZE_SMALL: any = window.BMAP_POINT_SIZE_SMALL
const BMAP_POINT_SHAPE_CIRCLE: any = window.BMAP_POINT_SHAPE_CIRCLE
const BMAP_POINT_SHAPE_STAR: any = window.BMAP_POINT_SHAPE_STAR
@Component({
  components: {
    GisMap
  }
})
export default class GisDemo extends Vue {
  @Ref() readonly drawMap: GisMap
  private mapOption = {
    center: [104.063455, 30.663795],
    zoom: 15,
    // 是否打开编辑模式
    isDraw: false,
    type: 'gl'
  }
  private dataArr = []
  // 默认实时状态
  private lushuStatus: any = 'real'
  private lushuStatusText: any = '回放'
  private isLushu: any = false
  @Watch('lushuStatus')
  lushuStatusHandler(newVal, oldVal) {
    if (newVal === 'pause') {
      this.lushuStatusText = '继续'
    } else if (newVal === 'real' || newVal === 'stop') {
      this.lushuStatusText = '回放'
    }
  }
  mounted() {
    this.dataArr = [
      { lng: '104.080989', lat: '30.657689', dataObj: { name: '张三', local: '成都XXX区' } },
      { lng: '104.055731', lat: '30.667648', dataObj: { name: '李四', local: '成都SSSS区' } },
      { lng: '104.056843', lat: '30.670566', dataObj: { name: '王五', local: '成都SSSS区' } },
      { lng: '104.081996', lat: '30.668703', dataObj: { name: '王五', local: '成都SSSS区' } },
      { lng: '104.06252', lat: '30.660812', dataObj: { name: '王五', local: '成都SSSS区' } }
    ]
  }

  // marker打点
  addMarkers() {
    this.clearMap()
    this.setMapZoom()
    this.drawMap.addMarkers(this.dataArr)
  }
  // 标记点击事件
  markerClick({ e, data }) {
    console.log(e, data)
    this.drawMap.openInfoPanel(`${data.name} | ${data.local}`, e)
    // Message.success(`${data.name} | ${data.local}`)
  }
  // 获取编辑区域信息
  drawComplete(result) {
    console.log(result)
  }

  getMapOverlay() {
    console.log(this.drawMap.getOverlayData())
  }
  // 清除标记
  clearMap() {
    this.drawMap.clearAllOverlay()
  }
  // 重置地图层级
  setMapZoom() {
    this.drawMap.markerZoomAdapter(this.dataArr)
  }
  // 绘制轨迹
  drawTrajectory() {
    this.clearMap()
    this.setMapZoom()
    this.drawMap.drawTrajectory(this.dataArr)
  }

  // 启动回放功能
  drawLushu() {
    const option = {
      pos: {
        left: '10px',
        top: '10px'
      },
      btns: [
        { label: '实时', click: this.lushuReal },
        { label: '回放', click: this.lushuStart },
        { label: '停止', click: this.lushuStop },
        { label: '暂停', click: this.lushuPause }
      ]
    }
    this.isLushu = true
    this.drawMap.drawPlayBackBtn(option)
    this.drawMap.drawMapGLLushu(this.dataArr)
  }
  // 实时
  lushuReal() {
    this.drawMap.lushuReal()
    this.lushuStatus = 'real'
  }
  // 回放
  lushuStart() {
    this.drawMap.lushuStart()
    this.lushuStatus = 'run'
  }
  // 暂停
  lushuPause() {
    this.drawMap.lushuPause()
    this.lushuStatus = 'pause'
  }
  // 停止
  lushuStop() {
    this.drawMap.lushuStop()
    this.lushuStatus = 'stop'
  }
  drawTrackAnimation() {
    const data = [
      {
        lng: 116.297611,
        lat: 40.047363
      },
      {
        lng: 116.302839,
        lat: 40.048219
      },
      {
        lng: 116.308301,
        lat: 40.050566
      },
      {
        lng: 116.305732,
        lat: 40.054957
      },
      {
        lng: 116.304754,
        lat: 40.057953
      },
      {
        lng: 116.306487,
        lat: 40.058312
      },
      {
        lng: 116.307223,
        lat: 40.056379
      }
    ]
    const opt = {
      overallView: true,
      tilt: 30,
      duration: 20000,
      delay: 300
    }
    this.clearMap()
    this.drawMap.markerZoomAdapter(data)
    this.drawMap.drawTrackAnimation(data, opt)
  }
  onChangeDraw() {}
}
</script>

<style lang="less">
.gisDemo-container {
  .el-button {
    margin-bottom: 10px;
  }
  .gisMapBox {
    height: 700px;
    width: 100%;
    position: relative;
  }
}
</style>
