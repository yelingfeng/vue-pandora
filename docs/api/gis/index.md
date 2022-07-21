# 基础 GIS

GIS 地图相关 API 使用

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
      <VGisMap :options="mapOption"></VGisMap>
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
  }
}
</script>
```

:::
</demo-block>
