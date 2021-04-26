<template>
  <VTable :option="config" :height="height" ref="tableInstance"></VTable>
</template>
<script lang="ts">
import { defineComponent, PropType, watch, ref, toRefs } from '@vue/composition-api'
import { ITableOption, IBaseTables } from 'types/VTable'
/**
 * 动态基础table 不带请求 不带分页 直接传数据
 */
export default defineComponent({
  name: 'Pandora_VBaseTable',
  props: {
    option: {
      type: Object as PropType<IBaseTables>,
      default() {
        return {
          data: [],
          columns: [],
          config: {}
        }
      }
    },
    height: String
  },
  setup(props) {
    const option = props.option
    const config = Object.assign(option.config, {
      stripe: true,
      selection: false,
      defaultSort: [],
      sortChange: undefined,
      // sigle 独立排序， multi 多项排序
      sortMode: 'single',
      column: [],
      data: [],
      // 是否分页
      pagination: false
    })
    const columns = option.columns
    const { data } = toRefs(option)
    if (config.columns.length) {
      config.columns = columns
    }
    watch(data, (newval, oldval) => {
      config.value.data = newval
    })
    return {
      config
    }
  }
})
</script>
