import { ExtractPropTypes } from 'vue'
import PropTypes from '@/packages/_util/vue-types';
import { tuple } from '@/packages/_util/type'
import { ControlType }  from '@/packages/_util/compPropsType';

// button 类型
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];

// 按钮 尺寸
const ButtonSizes = tuple('large', 'default', 'small');
export type ButtonSize = typeof ButtonSizes[number];

// button 属性定义
export const ButtonPropTypes = ()=>({
    type: PropTypes.oneOf(ButtonTypes).def('default'),
    size :PropTypes.oneOf(ButtonSizes).def('default'),
    disabled:PropTypes.looseBool.def(false),
    label : PropTypes.string.def('default Btn'),
    click : PropTypes.func
})
export type ButtonProps = Partial<ExtractPropTypes<ReturnType<typeof ButtonPropTypes>>>;

// 配置参数 sb control
export const ButtonControl:ControlType = {
  type: {
    type: 'select',
    options: [
      'default', 'primary', 'ghost', 'dashed', 'danger', 'link'
    ],
    default:'primary'
  },
  size: {
    type: 'select',
    options: [
      'large', 'default', 'small'
    ],
    default:'default'
  },
  disabled: {
    type: 'boolean',
    default:false
  },
  label :{
    type : 'text',
    default:'primary Text'
  }
}
