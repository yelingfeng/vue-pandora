import { defineDemo } from '@/packages/_docs'
import vButton from './index'
import { ButtonControl } from './defaultProps'
export default defineDemo(
  {
    name: 'Button',
    category: 'FORM|Components',
    docs: require('./index.md'),
    control: ButtonControl,
    module,
  },
  vButton,
)

