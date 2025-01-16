<template>
  <div class="v_adaptive_page">
    <div
      :style="{ width: isShow('leftContent') ? `${leftWidth}px` : '0px' }"
      v-if="isShow('leftContent')"
      class="left_content"
    >
      <div class="left_tree">
        <slot name="leftContent" />
      </div>
    </div>
    <v-layout-page class="right_content" :style="pageStyle">
      <v-layout-page-item class="table_search" :style="queryPageStyle" v-if="$attrs.opts">
        <v-query-condition ref="query-condition" v-bind="$attrs" v-on="$listeners">
          <template v-for="(index, name) in $slots" v-slot:[name]>
            <slot :name="name" />
          </template>
          <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
            <slot :name="name" v-bind="data"></slot>
          </template>
        </v-query-condition>
      </v-layout-page-item>
      <slot name="content" />
      <v-layout-page-item
        class="table_main"
        :style="tablePageStyle"
        :class="{ 't_table_self-filling': isTTableSelfFilling }"
      >
        <t-table
          ref="t-table"
          :isSlotToolbar="isShow('toolbar')"
          :isSlotTitle="isShow('title')"
          v-bind="{ columnSetting, ...$attrs }"
          v-on="$listeners"
        >
          <template v-for="(index, name) in $slots" v-slot:[name]>
            <slot :name="name" />
          </template>
          <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
            <slot :name="name" v-bind="data"></slot>
          </template>
        </t-table>
      </v-layout-page-item>
      <slot />
    </v-layout-page>
  </div>
</template>
<script>
import VLayoutPageItem from '../../layout-page-item/src/index.vue'
import VLayoutPage from '../../layout-page/src/index.vue'
import VQueryCondition from '../../query-condition/src/index.vue'
import TTable from '../../t-table/src/index.vue'
export default {
  name: 'VAdaptivePage',
  components: {
    VLayoutPage,
    VLayoutPageItem,
    TTable,
    VQueryCondition
  },
  props: {
    leftWidth: {
      type: [String, Number],
      default: 260
    },
    columnSetting: Boolean,
    queryRef: Object,
    tableRef: Object,
    pageStyle: {
      type: Object,
      default: () => {}
    },
    queryPageStyle: {
      type: Object,
      default: () => {}
    },
    tablePageStyle: {
      type: Object,
      default: () => {}
    },
    // 是否table自动撑满
    isTTableSelfFilling: Boolean
  },
  mounted() {
    this.$emit('update:queryRef', this.$refs['query-condition'])
    this.$emit('update:tableRef', this.$refs['t-table'])
  },
  activated() {
    this.$emit('update:queryRef', this.$refs['query-condition'])
    this.$emit('update:tableRef', this.$refs['t-table'])
  },
  methods: {
    isShow(name) {
      return Object.keys(this.$slots).includes(name)
    }
  }
}
</script>
<style lang="scss" scoped>
.v_adaptive_page {
  display: flex;
  align-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .left_content {
    background-color: #fff;
    margin: 8px;
    margin-right: 0;
    .left_tree {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 10px;
      overflow-y: auto;
    }
  }
  .right_content {
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .table_main {
      flex: 1;
      overflow-y: auto;
      .t-table {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        height: 100%;
        ::v-deep.el-table {
          height: fit-content;
          overflow: auto;
          &::before {
            height: 0px;
          }
          .el-table__fixed::before,
          .el-table__fixed-right::before {
            height: 0px;
          }
        }
      }
    }
    .t_table_self-filling {
      .t-table {
        :deep(.el-table) {
          height: 100vh;
        }
      }
    }
  }
}
</style>
