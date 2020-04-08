import VForm from '~/Form/index.vue'
import { mount, createLocalVue } from '@vue/test-utils'
const localVue = createLocalVue()
import ElementUI from 'element-ui'
localVue.use(ElementUI)
describe('Form Test', () => {
  it('1. test VForm Options ', () => {
    const formOption = {
      inline: true,
      labelPosition: 'right',
      labelWidth: '100',
      btnPos: 'right',
      items: [
        {
          label: '任务名称',
          type: 'text',
          comOpt: {
            id: 'taskName',
            width: 210,
            disabled: false,
            show: true,
            placeholder: '',
            value: ''
          }
        },
        {
          label: '任务内容',
          type: 'text',
          comOpt: {
            id: 'taskContent',
            width: 210,
            disabled: false,
            show: false,
            placeholder: '',
            value: ''
          }
        }
      ]
    }
    const wrapper = mount(VForm, {
      propsData: {
        option: formOption
      },
      localVue
    })
    expect(wrapper.props('option')).toMatchObject(formOption)
  })
})
