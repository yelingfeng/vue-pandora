<template>
  <div>
    <VForm :option="formOptRef" ref="formInstanceRef" :style="styleComputed"></VForm>
    <VTable ref="tableInstanceRef" :option="tableOptRef" :height="tableHeight" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, unref } from '@vue/composition-api'
import { usePandoraTable } from '@/__hooks/usePandoraTable'
import { usePandoraForm } from '@/__hooks/usePandoraForm'
import { getFormItems } from './pandora/formConfig'
import {
  getTableColumns,
  getTableOperationsColumns,
  getTableSortOption
} from './pandora/tableConfig'
export default defineComponent({
  name: 'hooks_demo',
  setup() {
    const formInstanceRef = ref(null)
    const tableInstanceRef = ref(null)
    const styleComputed = computed(() => {
      return {
        height: '40px'
      }
    })
    const tableHeight = ref('400px')

    const rowClick = (row: any) => {
      console.log(row)
    }
    // 取Pandora 表格列配置 []
    const colomns = getTableColumns()
    // 取Pandora 操作列配置 []
    const operationsCols = getTableOperationsColumns(rowClick)
    // 取排序的配置对象
    const tableSort = getTableSortOption()
    colomns.push(operationsCols)

    const tableOptRef = usePandoraTable(colomns, tableSort)

    const formOptRef = usePandoraForm(getFormItems(), [
      {
        comOpt: {
          id: 'query',
          value: '查询',
          type: 'default',
          width: 90,
          disabled: false,
          // icon: 'el-icon-search',
          click: () => {}
        }
      },
      {
        comOpt: {
          id: 'reset',
          value: '重置',
          type: 'reset',
          width: 90,
          disabled: false,
          // icon: 'el-icon-refresh',
          click: () => {}
        }
      }
    ])
    return {
      formOptRef,
      styleComputed,
      tableOptRef,
      tableHeight,
      formInstanceRef,
      tableInstanceRef
    }
  }
})
</script>
