<template>
  <div class="vpandora-pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="option.currentPage"
      :page-sizes="option.pageSizes"
      :page-size.sync="option.pageSize"
      :pager-count="option.pageCount"
      :layout="layoutStr"
      :total.sync="option.total"
    ></el-pagination>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class PagerStyles extends Vue {
  @Prop()
  option: Table.IPageOpt

  private layoutStr = 'total, sizes, prev, pager, next, jumper'
  created() {
    if (this.option?.layout) {
      this.layoutStr = this.option?.layout
    }
    // console.log(this.option.total)
  }

  handleSizeChange(val: number) {
    this.$emit('handleSizeChange', val)
  }
  handleCurrentChange(val: number) {
    this.$emit('handleCurrentChange', val)
  }
}
</script>
