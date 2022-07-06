<template>
  <div>
    <el-row>
      <el-col :span="12">
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
@Component({
  components: {
    GisMap
  }
})
export default class GisDemo extends Vue {
  @Ref() readonly drawMap: GisMap
  private mapOption = {
    center: [104.063455, 30.663795],
    zoom: 17
  }
  mounted() {
    const arr = [
      { lng: '104.080989', lat: '30.657689' },
      { lng: '104.055731', lat: '30.667648' }
    ]
    this.drawMap.addMarkers(arr)
  }

  markerClick(e) {
    console.log(e)
  }
}
</script>

<style lang="less"></style>
