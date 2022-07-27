<template>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <VGisMap ref="map" :options="mapOption"></VGisMap>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'gis-demo01',
  data() {
    return {
      mapOption: {
        center: [104.063455, 30.663795],
        zoom: 15,
        // 是否打开编辑模式
        isDraw: false
      }
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>
