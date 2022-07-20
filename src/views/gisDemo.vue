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
        <el-button @click.native="drawPointCollection">海量点</el-button>
        <el-button @click.native="openEditorMode">打开编辑模式</el-button>
        <el-button @click.native="closeEditorMode">关闭编辑模式</el-button>
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
          <div class="playBack" v-if="isLushu">
            <el-button @click="lushuReal">实时</el-button>
            <el-button @click="lushuStart">{{ lushuStatusText }}</el-button>
            <el-button @click="lushuStop">停止</el-button>
            <el-button @click="lushuPause">暂停</el-button>
          </div>
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
    isDraw: false
  }
  private dataArr = []
  // 默认实时状态
  private lushuStatus: any = 'real'
  private lushuStatusText: any = '回放'
  private isLushu: any = false
  mounted() {
    this.dataArr = [
      { lng: '104.080989', lat: '30.657689', dataObj: { name: '张三', local: '成都XXX区' } },
      { lng: '104.055731', lat: '30.667648', dataObj: { name: '李四', local: '成都SSSS区' } },
      { lng: '104.056843', lat: '30.670566', dataObj: { name: '王五', local: '成都SSSS区' } },
      { lng: '104.081996', lat: '30.668703', dataObj: { name: '王五', local: '成都SSSS区' } },
      { lng: '104.06252', lat: '30.660812', dataObj: { name: '王五', local: '成都SSSS区' } }
    ]
  }
  @Watch('lushuStatus')
  lushuStatusHandler(newVal, oldVal) {
    if (newVal === 'pause') {
      this.lushuStatusText = '继续'
    } else if (newVal === 'real' || newVal === 'stop') {
      this.lushuStatusText = '回放'
    }
  }
  // marker打点
  addMarkers() {
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
    this.isLushu = false
    this.drawMap.clearAllOverlay()
  }
  // 重置地图层级
  setMapZoom() {
    this.drawMap.markerZoomAdapter(this.dataArr)
  }
  //绘制多边形 网格
  drawPolygon() {
    const arr = [
      [
        { lng: 104.05148863688133, lat: 30.65042259716188 },
        { lng: 104.05357936842636, lat: 30.65042259716188 },
        { lng: 104.05357936842636, lat: 30.65222124037372 },
        { lng: 104.05148863688133, lat: 30.65222124037372 },
        { lng: 104.05148863688133, lat: 30.6504225971618 }
      ],

      [
        { lng: 104.05148863688133, lat: 30.65222124037372 },
        { lng: 104.05357936842636, lat: 30.65222124037372 },
        { lng: 104.05357936842636, lat: 30.654019883585562 },
        { lng: 104.05148863688133, lat: 30.654019883585562 },
        { lng: 104.05148863688133, lat: 30.65222124037372 }
      ],

      [
        { lng: 104.05148863688133, lat: 30.654019883585562 },
        { lng: 104.05357936842636, lat: 30.654019883585562 },
        { lng: 104.05357936842636, lat: 30.6558185267974 },
        { lng: 104.05148863688133, lat: 30.6558185267974 },
        { lng: 104.05148863688133, lat: 30.654019883585562 }
      ],

      [
        { lng: 104.05357936842636, lat: 30.65042259716188 },
        { lng: 104.0556700999699, lat: 30.65042259716188 },
        { lng: 104.0556700999699, lat: 30.65222124037372 },
        { lng: 104.05357936842636, lat: 30.65222124037372 },
        { lng: 104.05357936842636, lat: 30.65042259716188 }
      ],

      [
        { lng: 104.05357936842636, lat: 30.65222124037372 },
        { lng: 104.0556700999699, lat: 30.65222124037372 },
        { lng: 104.0556700999699, lat: 30.654019883585562 },
        { lng: 104.05357936842636, lat: 30.654019883585562 },
        { lng: 104.05357936842636, lat: 30.65222124037372 }
      ],

      [
        { lng: 104.05357936842636, lat: 30.654019883585562 },
        { lng: 104.0556700999699, lat: 30.654019883585562 },
        { lng: 104.0556700999699, lat: 30.6558185267974 },
        { lng: 104.05357936842636, lat: 30.6558185267974 },
        { lng: 104.05357936842636, lat: 30.654019883585562 }
      ],

      [
        { lng: 104.0556700999699, lat: 30.65042259716188 },
        { lng: 104.05776083151056, lat: 30.65042259716188 },
        { lng: 104.05776083151056, lat: 30.65222124037372 },
        { lng: 104.0556700999699, lat: 30.65222124037372 },
        { lng: 104.0556700999699, lat: 30.65042259716188 }
      ],

      [
        { lng: 104.0556700999699, lat: 30.65222124037372 },
        { lng: 104.05776083151056, lat: 30.65222124037372 },
        { lng: 104.05776083151056, lat: 30.654019883585562 },
        { lng: 104.0556700999699, lat: 30.654019883585562 },
        { lng: 104.0556700999699, lat: 30.65222124037372 }
      ],
      [
        { lng: 104.0556700999699, lat: 30.654019883585562 },
        { lng: 104.05776083151056, lat: 30.654019883585562 },
        { lng: 104.05776083151056, lat: 30.6558185267974 },
        { lng: 104.0556700999699, lat: 30.6558185267974 },
        { lng: 104.0556700999699, lat: 30.654019883585562 }
      ]
    ]

    this.drawMap.markerZoomAdapter(_.flattenDeep(arr))
    arr.forEach(item => {
      this.drawMap.drawPolygon(item)
    })
  }
  // 划线
  drawPolyline() {
    this.drawMap.drawPolyline(this.dataArr)
  }
  // 画区域
  drawOverlay() {
    this.drawMap.drawOverlay(this.dataArr)
    // 一条记录可以画圆
    // this.drawMap.drawOverlay([{ lng: 104.0556700999699, lat: 30.654019883585562, radius: 500 }])
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
    this.isLushu = true
    this.drawMap.drawLushu(this.dataArr)
  }
  // 海量点
  drawPointCollection() {
    const arr1 = [
      {
        lng: 104.05148863688133,
        lat: 30.65042259716188,
        dataObj: { name: '张三', local: '成都XXX区' }
      },
      {
        lng: 104.05357936842636,
        lat: 30.65042259716188,
        dataObj: { name: '张三', local: '成都XXX区' }
      },
      {
        lng: 104.05357936842636,
        lat: 30.65222124037372,
        dataObj: { name: '张三', local: '成都XXX区' }
      },
      {
        lng: 104.05148863688133,
        lat: 30.65222124037372,
        dataObj: { name: '张三', local: '成都XXX区' }
      },
      {
        lng: 104.05148863688133,
        lat: 30.6504225971618,
        dataObj: { name: '张三', local: '成都XXX区' }
      }
    ]
    const opt = {
      size: BMAP_POINT_SIZE_SMALL,
      shape: BMAP_POINT_SHAPE_CIRCLE,
      color: '#1002e3'
    }
    const opt1 = {
      size: BMAP_POINT_SIZE_SMALL,
      shape: BMAP_POINT_SHAPE_STAR,
      color: '#FE0000'
    }
    this.drawMap.drawPointCollection(this.dataArr, opt)
    this.drawMap.drawPointCollection(arr1, opt1)
  }
  // 实时
  lushuReal() {
    this.drawMap.lushuReal()
    this.lushuStatus = 'real'
  }
  // 回放
  lushuStart() {
    if (this.lushuStatus !== 'pause') {
      this.clearMap()
    }
    this.drawMap.lushuStart()
    this.lushuStatus = 'run'
  }
  // 暂停
  lushuPause() {
    this.drawMap.lushuStop()
    this.lushuStatus = 'pause'
  }
  // 停止
  lushuStop() {
    this.drawMap.lushuPause()
    this.lushuStatus = 'stop'
  }
  // 打开编辑模式
  openEditorMode() {
    this.mapOption.isDraw = true
  }
  // 关闭编辑模式
  closeEditorMode() {
    this.mapOption.isDraw = false
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
    .playBack {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}
</style>
