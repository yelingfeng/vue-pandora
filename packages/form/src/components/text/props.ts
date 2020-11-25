import { ExtractPropTypes } from 'vue'
import PropTypes from '@/packages/_util/vue-types';
import { tuple } from '@/packages/_util/type'
import { ControlType }  from '@/packages/_util/compPropsType';

// Text 类型
const TextTypes = tuple('default', 'primary', 'ghost');
export type TextType = typeof TextTypes[number];


// Text 属性定义
export const TextPropTypes = ()=>({
    text: PropTypes.oneOf(TextTypes).def('default'),
})
export type TextProps = Partial<ExtractPropTypes<ReturnType<typeof TextPropTypes>>>;

// 配置参数StoryBook control
export const TextControl:ControlType = {
  text: {
    type: 'select',
    options: [
      'default', 'primary', 'ghost'
    ],
    default:'default'
  }
}
