import { ExtractPropTypes } from 'vue'
import PropTypes from '@/packages/_util/vue-types';
import { tuple } from '@/packages/_util/type'


// button 类型
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];


// button 属性定义
const ButtonPropTypes = ()=>({
    type: PropTypes.oneOf(ButtonTypes).def('default'),
    disabled:PropTypes.looseBool.def(false),
    label : PropTypes.string.def('default Btn'),
    onClick: PropTypes.func,
})
export type ButtonProps = Partial<ExtractPropTypes<ReturnType<typeof ButtonPropTypes>>>;

// 配置参数 sb control
export const ButtonControl = {
  type: {
    control: {
      type: 'select',
      options: [
        'default', 'primary', 'ghost', 'dashed', 'danger', 'link'
      ],
      default:'primary'
    },
  },
  disabled: {
    control: {
      type: 'boolean',
      default:false
    }
  },
  label :{
    control:{
      type : 'text',
      default:'primary Text'
    }
  }
}

export default ButtonPropTypes;