<template>
  <div>
    <el-row type="flex">
      <el-col :span="6"><LevelBar :data="chartData"/></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
import LevelBar from '../../packages/Charts/Bar/LevelBar.vue'
@Component({
  components: {
    LevelBar
  }
})
export default class ChartDemo extends Vue {
  private chartData: any = []
  mounted() {
    setTimeout(() => {
      this.chartData = [
        { count: 20, cname: '张三' },
        { count: 30, cname: '李四' },
        { count: 40, cname: '苗小苗' }
      ]
    }, 1000)
  }
}
</script>
