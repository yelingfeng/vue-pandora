<template>
  <v-layout-page>
    <v-layout-page-item>
      <v-select
        placeholder="选中值将以对象形式返回"
        v-model="selectVlaue"
        :optionSource="stepList"
        valueKey="id"
        value-key="id"
        returnObject
        @change="selectChange"
      ></v-select>
    </v-layout-page-item>
  </v-layout-page>
</template>
<script>
export default {
  data() {
    return {
      selectVlaue: null,
      stepList: [
        { label: "开始", id: 1 },
        { label: "POSUI", id: 2 },
        { label: "11", id: 3 },
        { label: "GX123", id: 4 },
        { label: "烘干破碎", id: 5 },
        { label: "车间仓库", id: 6 },
        { label: "ui3333", id: 7 },
        { label: "hhh333", id: 8 },
      ],
    };
  },
  methods: {
    selectChange(val) {
      console.log("selectChange", val, this.selectVlaue);
    },
  },
};
</script>
