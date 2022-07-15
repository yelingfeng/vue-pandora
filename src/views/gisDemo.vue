<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-switch
          v-model="mapOption.isDraw"
          active-text="开启绘制"
          inactive-text="关闭绘制"
          @change="onChangeDraw"
        >
        </el-switch>
        <el-button @click.native="clearMap">清除</el-button>
        <el-button @click.native="getMapOverlay">获取图层数据</el-button>
        <el-button @click.native="clickAll">同时画点和区域</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div style="height:300px;width:100%">
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
  mounted() {
    const arr = [
      { lng: '104.080989', lat: '30.657689', dataObj: { name: '张三', local: '成都XXX区' } },
      { lng: '104.055731', lat: '30.667648', dataObj: { name: '李四', local: '成都SSSS区' } }
    ]
    console.log(123)

    this.drawMap.addMarkers(arr)
  }

  markerClick({ e, data }) {
    console.log(e, data)
    Message.success(`${data.name} | ${data.local}`)
  }

  getMapOverlay() {
    console.log(this.drawMap.getOverlayData())
  }

  clearMap() {
    this.drawMap.clearAllOverlay()
  }

  onChangeDraw() {}
}
</script>

<style lang="less"></style>
