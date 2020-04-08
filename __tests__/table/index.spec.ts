import VTable from '~/Table/index.vue'
import { mount, createLocalVue } from '@vue/test-utils'
const localVue = createLocalVue()
import ElementUI from 'element-ui'
localVue.use(ElementUI)
describe('Table Test', () => {
  it('1. test VTable Options ', () => {
    const tableOpt = {
      stripe: true,
      column: [
        { name: '序号', value: 'index', fixed: 'left', width: 50, align: 'center' },
        { name: '任务名称', value: 'taskName', fixed: 'left', align: 'center' },
        { name: '创建时间', value: 'createTime', align: 'center' },
        {
          name: '操作',
          value: '',
          align: 'center',
          fixed: 'right',
          width: 150,
          operations: [
            {
              label: '详情',
              type: 'label',
              handlerClick: (row: any) => {
                console.log(row)
              }
            },
            {
              label: '编辑',
              type: 'label',
              handlerClick: (row: any) => {
                console.log(row)
              }
            },
            {
              label: '删除',
              type: 'label',
              disCallBack(row: any) {},
              handlerClick: (row: any) => {}
            }
          ]
        }
      ],
      data: [],
      // 是否分页
      pagination: true,
      // 分页参数
      pageOpt: {
        currentPage: 1,
        total: 0,
        pageSizes: [10, 20, 30, 40, 50],
        pageSize: 10
      }
    }
    const tableHeight = 400
    const wrapper = mount(VTable, {
      propsData: {
        option: tableOpt,
        height: tableHeight
      },
      localVue
    })
    expect(wrapper.props('option')).toMatchObject(tableOpt)
    expect(wrapper.props('height')).toBe(400)
  })
})
