import { mount } from '@vue/test-utils';
export default function mountTest(component) {
  describe(`mount and unmount`, () => {
    // https://github.com/ant-design/ant-design/pull/18441
    it(`component could be updated and unmounted without errors`, () => {
      const wrapper = mount(component,
        { 
          sync: false, 
          attachTo: 'body' 
        },
      );
      expect(() => {
        wrapper.vm.$forceUpdate();
        wrapper.unmount();
      }).not.toThrow();
    });
  });
}
