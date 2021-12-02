<template>
  <div class="vpandora-pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="option.currentPage"
      :page-sizes="option.pageSizes"
      :page-size.sync="option.pageSize"
      :pager-count="option.pageCount"
      :layout="layout"
      :total="option.total"
    ></el-pagination>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class PagerStyles extends Vue {
  option: Table.IPageOpt = {
    currentPage: 1,
    pageSize: 10
  }

  private layout = this.option.layout
    ? this.option.layout
    : 'total, sizes, prev, pager, next, jumper'

  handleSizeChange(val: number) {
    this.$emit('handleSizeChange', val)
  }
  handleCurrentChange(val: number) {
    this.$emit('handleCurrentChange', val)
  }
}
</script>
