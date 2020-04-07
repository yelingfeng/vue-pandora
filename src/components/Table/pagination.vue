<template>
  <div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="option.currentPage"
      :page-sizes="option.pageSizes"
      :page-size.sync="option.pageSize"
      :layout="layout"
      :total="option.total"
    ></el-pagination>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class PagerStyles extends Vue {
  @Prop() private option: Table.IPageOpt

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

<style scoped>
.pagination {
  width: 100%;
  margin-top: 14px;
}
</style>
