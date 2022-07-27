# 基础配置

> GIS 地图相关 API 使用

<demo-block>
:::slot source
<gis-map1></gis-map1>
:::

这是一个基础的 GISMAP 例子

:::slot highlight

```vue
<template>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <GisMap ref="drawMap" :options="mapOption" @markerClick="markerClick"></GisMap>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue, Ref, Watch } from 'vue-property-decorator'
import GisMap from '../../packages/GisMap/index.vue'
import { Message } from 'element-ui'
import _ from 'lodash'

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
  mounted() {}
}
</script>
```

:::
</demo-block>

## `center`

- 类型: `Function{}(data: [])`

地图中心点

## `zoom`

- 类型: `number`

地图默认级别

## `isDraw`

- 类型: `boolean`

是否默认打开编辑模式
