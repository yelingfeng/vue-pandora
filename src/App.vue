<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <h1>Vue-pandora</h1>
        <p>
          <router-link to="/default">Go to Default</router-link>
          |
          <router-link to="/demo">Go to Demo</router-link>
        </p>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <router-view></router-view>
    </el-row>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Ref } from 'vue-property-decorator'
@Component({})
export default class App extends Vue {
  mounted() {}
}
</script>

<style lang="less">
#app,
#app > div {
  width: 100%;
  height: 100%;
  min-width: 900px;
}
</style>
