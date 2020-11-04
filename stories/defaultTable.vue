<template>
  <VTable ref="table" :option="option" :height="height" />
</template>
<script lang="ts">
import { Component, Vue, Ref, Prop } from 'vue-property-decorator'
import axios from 'axios'
@Component({})
export default class DefaultTable extends Vue {
  @Prop()
  private option: any
  @Prop()
  private height: number

  mounted() {
    this.getTableList()
  }
  getTableList() {
    axios.get('/api/tablelist').then(resp => {
      const list = resp.data.data.list
      this.option.data = list
    })
  }
}
</script>
