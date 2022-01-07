<template>
  <v-chart ref="chartRef" class="chart" :option="option" />
</template>

<script lang="ts">
import VChart, { THEME_KEY } from 'vue-echarts'
import { defineComponent, ref, toRefs, watch } from '@vue/composition-api'
import { basicProps } from '../_props'
export default defineComponent({
  props: basicProps,
  name: 'PandoraCharts_LevelBar',
  components: {
    VChart
  },
  setup(props) {
    const chartRef = ref<HTMLDivElement | null>(null)
    const { data } = toRefs(props)
    watch(data, function(newval, oldval) {
      if (newval && newval.length) {
        console.log(data)
      }
    })
    return {
      chartRef,
      option: {
        title: {
          text: 'Traffic Sources',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines']
        },
        series: [
          {
            name: 'Traffic Sources',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: 'Direct' },
              { value: 310, name: 'Email' },
              { value: 234, name: 'Ad Networks' },
              { value: 135, name: 'Video Ads' },
              { value: 1548, name: 'Search Engines' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>
