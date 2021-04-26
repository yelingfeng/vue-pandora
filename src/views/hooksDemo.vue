<template>
  <div>
    <VForm :option="formOptRef" ref="formInstanceRef" :style="styleComputed"></VForm>
    <VTable ref="tableInstanceRef" :option="tableOptRef" :height="tableHeight" />
    <BaseTable :option="baseOpt" height="400" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, unref } from '@vue/composition-api'
import { usePandoraTable } from '../../packages/__hooks/usePandoraTable'
import { usePandoraForm } from '../../packages/__hooks/usePandoraForm'
import { getFormItems } from './pandora/formConfig'
import BaseTable from '../../packages/Table/BaseTable/index.vue'
import {
  getTableColumns,
  getTableOperationsColumns,
  getTableSortOption
} from './pandora/tableConfig'
export default defineComponent({
  components: {
    BaseTable
  },
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

    const baseOpt = {
      columns: [
        { name: '版本', value: 'versionName', minWidth: 80, align: 'center' },
        { name: '属地', value: 'provinceName', minWidth: 80, align: 'center' },
        { name: '上报商店', value: 'appStoreName', minWidth: 200, align: 'center' }
      ],
      data: [
        {
          versionName: 'v1.1',
          provinceName: '北京',
          appStoreName: '360安全中心'
        },
        {
          versionName: 'v1.2',
          provinceName: '天津',
          appStoreName: '华为市场'
        },
        {
          versionName: 'v1.3',
          provinceName: '上海',
          appStoreName: '小米市场'
        }
      ]
    }

    return {
      baseOpt,
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
