<template>
  <div>
    <v-layout-page-item>
      <v-tree-select
        :options="treeList"
        placeholder="请选择tree结构"
        width="50%"
        :defaultData="defaultValue"
        :treeProps="treeProps"
        @handleNodeClick="selectDrop"
      />
    </v-layout-page-item>
  </div>
</template>
<script>
export default {
  name: 'VTreeSelectDemo',
  data() {
    return {
      defaultValue: { id: '1', label: '一级 1菈妮' },
      treeProps: {
        value: 'id',
        children: 'children',
        label: 'name'
      },
      treeList: [
        {
          id: '1',
          name: '一级 1菈妮',
          children: [
            {
              id: '1-1',
              name: '二级 1-1',
              children: [
                {
                  id: '1-1-1',
                  name: '三级 1-1-1',
                },
              ],
            },
          ],
        },
        {
          name: '一级 2',
          id: '2',
          children: [
            {
              id: '2-1',
              name: '二级 2-1',
              children: [
                {
                  id: '2-1-1',
                  name: '三级 2-1-1',
                },
              ],
            },
            {
              id: '2-2',
              name: '二级 2-2',
              children: [
                {
                  id: '2-2-1',
                  name: '三级 2-2-1鸡腿'
                },
              ],
            },
          ],
        },
      ]
    }
  },
  methods: {
    selectDrop(val) {
      console.log('选中---->', val)
    }
  }
}
</script>
