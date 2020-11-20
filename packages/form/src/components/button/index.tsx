import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'
import ButtonDefaultProps from './defaultProps';
/**
 * button component
 */
const VButton = defineComponent({
  name : 'v-button',
  props: ButtonDefaultProps(),
  setup(props){
    return () => <Button {...props}>{props.label}</Button>
  }
})

export default VButton