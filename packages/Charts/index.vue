<template>
  <div class="vpandora-charts-container">
    <div class="vpandora-charts" ref="chartRef"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref, onMounted, watch, toRefs, isRef } from '@vue/composition-api'
import { useECharts } from './hooks/useEcharts'
import { PropType } from 'vue'
export default defineComponent({
  name: 'VCharts',
  props: {
    data: {
      type: Array as PropType<any[]>,
      default: null
    },
    option: {
      type: Object as any,
      default: null
    }
  },
  setup(props) {
    const chartRef = ref<HTMLDivElement | null>(null)
    const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)
    const { data, option } = toRefs(props)
    watch(data, function(newval, oldval) {
      //if (newval && newval.length) {
      setOptions(option as any)
      //}
    })
    onMounted(() => {
      const op: any = isRef(option) ? option.value : option
      setOptions(op)
    })

    return {
      chartRef
    }
  }
})
</script>
<style scoped>
.vpandora-charts-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.vpandora-charts {
  width: 100%;
  height: 100%;
}
</style>
