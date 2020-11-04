import { action, actions } from '@storybook/addon-actions'
import TableMd from './default-table.md'
import DefaultTable from './defaultTable.vue'

export default {
  title: 'Table/基础表格',
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' }
  }
}

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    render() {
      return (
        <div>
          <DefaultTable option={this.option} height={this.height} />
          <div class="markdown-body">
            <TableMd />
          </div>
        </div>
      )
    }
  }
}
export const Simple = Template.bind({})
Simple.args = {
  height: '200',
  option: {
    stripe: true,
    isHeader: true,
    selection: true,
    rowClick(e) {
      console.log(e)
      action('rowClick')(e)
    },
    column: [
      {
        name: '序号',
        value: 'index',
        fixed: 'left',
        width: 50,
        align: 'center'
      },
      {
        name: '任务名称',
        value: 'taskName',
        fixed: 'left',
        align: 'center',
        sortable: true
      },
      {
        name: '创建时间',
        value: 'createTime',
        align: 'center',
        minWidth: '100',
        sortable: true
      },
      { name: '更新时间', value: 'updateTime', align: 'center', sortable: true },
      {
        name: '任务内容',
        value: 'taskContent',
        sortable: true,
        align: 'center'
      },
      { name: '任务状态', value: 'taskStatusName', align: 'center' },
      { name: '任务结果', value: 'jobResult', align: 'center' }
    ],
    data: [],
    // 是否分页
    pagination: true,
    // 分页参数
    pageOpt: {
      height: 40,
      currentPage: 1,
      total: 0,
      pageSizes: [10, 20, 30, 40, 50],
      pageSize: 10
    }
  }
}

// storiesOf('Table', module).add('Default Table', DefaultTable)
