import { mount } from '@vue/test-utils'
import mountTest from '@/packages/_tests/shared/mountTest'
import Button from '@/packages/form/src/components/button/src'

describe('Button.vue', () => {
  mountTest(Button);     
  it('renders correctly', () => {
    const wrapper = mount(Button);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('create primary button', () => {
    const options = {
      type :"primary" ,
      label : '按钮'
    }
    const wrapper = mount(Button,{
      props: options,
    });
    expect(wrapper.find('.ant-btn-primary').exists()).toBe(true);
  });
})
