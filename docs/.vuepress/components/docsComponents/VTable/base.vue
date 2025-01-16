<template>
  <v-layout-page>
    <v-layout-page-item>
      <VTable :option="tableOpt" :height="tableHeight"></VTable>
    </v-layout-page-item>
  </v-layout-page>
</template>

<script>
export default {
  name: 'table-demo01',
  data() {
    return {
      tableHeight: 200,
      tableOpt: {
        stripe: true,
        isHeader: true,
        column: [
          { name: '序号', type: 'index', minWidth: 50, align: 'center' },
          { name: '姓名', value: 'name', minWidth: 70, align: 'center' },
          { name: '年龄', value: 'age', minWidth: 100, align: 'center' },
          { name: '性别', value: 'sex', minWidth: 100, align: 'center' }
        ],
        data: [
          { name: '张三', age: '20', sex: '男' },
          { name: '李四', age: '40', sex: '男' },
          { name: '王五', age: '50', sex: '女' },
          { name: '赵六', age: '60', sex: '女' }
        ],
        pagination: true,
        // 分页参数
        pageOpt: {
          currentPage: 1,
          total: 10,
          pageSizes: [10, 20, 30, 40, 50],
          pageSize: 10
        }
      }
    }
  }
}
</script>
<style></style>
