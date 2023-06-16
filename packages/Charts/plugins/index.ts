import * as echarts from 'echarts/core'

import {
  BarChart,
  LineChart,
  LinesChart,
  PieChart,
  MapChart,
  PictorialBarChart,
  ScatterChart,
  GraphChart,
  GaugeChart,
  EffectScatterChart,
  RadarChart
} from 'echarts/charts'

import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  VisualMapComponent,
  DataZoomComponent,
  GraphicComponent
} from 'echarts/components'

// import { SVGRenderer } from 'echarts/renderers'
import 'echarts-wordcloud'
import 'echarts-liquidfill'

const chinaData = require('./geojson/china.json')
const wuhanData = require('./geojson/wuhan.json')
const hubeiData = require('./geojson/hubei.json')
const anhuiData = require('./geojson/anhui.json')
const shandongData = require('./geojson/shandong.json')

echarts.registerMap('china', chinaData)
echarts.registerMap('wuhan', wuhanData)
echarts.registerMap('hubei', hubeiData)
echarts.registerMap('shandong', shandongData)
echarts.registerMap('anhui', anhuiData)

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  AriaComponent,
  ParallelComponent,
  VisualMapComponent,
  DataZoomComponent,
  GraphicComponent,
  LegendComponent,
  BarChart,
  LineChart,
  LinesChart,
  PieChart,
  GraphChart,
  MapChart,
  ScatterChart,
  PictorialBarChart,
  GaugeChart,
  EffectScatterChart,
  RadarChart
])

export default echarts
