<template>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <VTable :option="tableOpt" :height="tableHeight"></VTable>
    </el-col>
  </el-row>
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
          { name: '姓名', value: 'name', width: 70, align: 'center' },
          { name: '年龄', value: 'age', width: 100, align: 'center' },
          { name: '性别', value: 'sex', width: 100, align: 'center' }
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
