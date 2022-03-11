<template>
  <div>
    <VTable :option="tableOpt" :height="tableHeight"></VTable>
  </div>
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
          { name: '序号', type: 'index', width: 50, align: 'center' },
          { name: 'name', value: 'name', width: 70, align: 'center' },
          { name: 'age', value: 'age', width: 100, align: 'center' }
        ],
        data: [
          { name: '张三', age: '20' },
          { name: '李四', age: '40' },
          { name: '王五', age: '50' },
          { name: '赵六', age: '60' }
        ],
        pagination: true,
        // 分页参数
        pageOpt: {
          currentPage: 1,
          total: 0,
          pageSizes: [10, 20, 30, 40, 50],
          pageSize: 10
        }
      }
    }
  }
}
</script>
