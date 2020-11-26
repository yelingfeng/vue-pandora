import { mount } from '@vue/test-utils'
import mountTest from '@/packages/_tests/shared/mountTest'
import Button from '@/packages/form/src/components/button/index'

describe('Button.vue', () => {
  mountTest(Button);     
  it('renders correctly', () => {
    const wrapper = mount(Button);
    expect(wrapper.html()).toMatchSnapshot();
  });
})
