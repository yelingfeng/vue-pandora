<template>
  <div class="gisDemo-container">
    <el-row style="margin-bottom:10px;">
      <el-col :span="24">
        <!-- <el-switch
          v-model="mapOption.isDraw"
          active-text="开启绘制"
          inactive-text="关闭绘制"
          @change="onChangeDraw"
        >
        </el-switch> -->
        <el-button @click.native="clearMap">清除</el-button>
        <el-button @click.native="addMarkers">地图打点</el-button>
        <el-button @click.native="getMapOverlay">获取图层数据</el-button>
        <el-button @click.native="setMapZoom">重置地图层级</el-button>
        <el-button @click.native="drawPolygon">绘制多边形</el-button>
        <el-button @click.native="drawPolyline">划线</el-button>
        <el-button @click.native="drawOverlay">画区域</el-button>
        <el-button @click.native="drawCircle">画圆</el-button>
        <el-button @click.native="drawHeatMap">热力地图</el-button>
        <el-button @click.native="drawLushu">绘制轨迹</el-button>
        <el-button @click.native="openEditorMode">打开编辑模式</el-button>
        <el-button @click.native="closeEditorMode">关闭编辑模式</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div style="height:700px;width:100%">
          <GisMap ref="drawMap" :options="mapOption" @markerClick="markerClick"></GisMap>
        </div>
      </el-col>
    </el-row>
    <!-- <p>-------</p>
      <el-row>
          <el-col :span="12">
               <GisMap ref="maps" :options="mapOption" @markerClick="markerClick"></MapBase>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="12">
               <el-button type="text" @click="mapChange">changeData</el-button>
               <GisMap ref="map2" :options="mOp" @clickHandler="clickHandler"></BaseChart>
          </el-col>
      </el-row> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import GisMap from '../../packages/GisMap/index.vue'
import { Message } from 'element-ui'
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
    isDraw: true
  }
  private dataArr = []
  mounted() {
    this.dataArr = [
      { lng: '104.080989', lat: '30.657689', dataObj: { name: '张三', local: '成都XXX区' } },
      { lng: '104.055731', lat: '30.667648', dataObj: { name: '李四', local: '成都SSSS区' } },
      { lng: '104.056843', lat: '30.670566', dataObj: { name: '王五', local: '成都SSSS区' } },
      { lng: '104.081996', lat: '30.668703', dataObj: { name: '王五', local: '成都SSSS区' } }
    ]
  }

  addMarkers() {
    this.drawMap.addMarkers(this.dataArr)
  }
  // 标记点击事件
  markerClick({ e, data }) {
    console.log(e, data)
    Message.success(`${data.name} | ${data.local}`)
  }

  getMapOverlay() {
    console.log(this.drawMap.getOverlayData())
  }
  // 清楚标记
  clearMap() {
    this.drawMap.clearAllOverlay()
  }
  // 重置地图层级
  setMapZoom() {
    this.drawMap.markerZoomAdapter(this.dataArr)
  }
  //绘制多边形
  drawPolygon() {
    this.drawMap.drawPolygon(this.dataArr)
  }
  // 划线
  drawPolyline() {
    this.drawMap.drawPolyline(this.dataArr)
  }
  // 画区域
  drawOverlay() {
    this.drawMap.drawOverlay(this.dataArr)
  }
  // 画圆
  drawCircle() {
    this.drawMap.drawCircle({ lng: '104.080989', lat: '30.657689', radius: 500 })
  }
  // 热力地图
  drawHeatMap() {
    this.drawMap.drawHeatMap({ data: this.dataArr, heatMax: 100 })
  }
  // 绘制轨迹
  drawLushu() {
    this.drawMap.drawLushu(this.dataArr)
  }
  // 打开编辑模式
  openEditorMode() {
    this.drawMap.openEditorMode()
  }
  // 关闭编辑模式
  closeEditorMode() {
    this.drawMap.closeEditorMode()
  }
  onChangeDraw() {}
}
</script>

<style lang="less">
.gisDemo-container {
  .el-button {
    margin-bottom: 10px;
  }
}
</style>
