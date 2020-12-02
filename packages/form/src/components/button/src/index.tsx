import { defineComponent  } from 'vue'
import { isFunction } from '@/packages/_util/index'
import { ButtonPropTypes } from './props';
import { Button } from 'ant-design-vue'
/**
 * button component
 */
const VButton = defineComponent({
  name : 'VButton',
  props: ButtonPropTypes(),
  setup(props){
    const clickHandler = (e:Event)=>{
      if(isFunction(props.click)){
          props.click(e)
      }
      return 
    }
    return () => <Button {...props} onClick={clickHandler}>{props.label}</Button>
  }
}) 

export default VButton