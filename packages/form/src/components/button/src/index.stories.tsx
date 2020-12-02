import { defineDemo } from '@/packages/_docs'
import vButton from './index'
import { ButtonControl } from './props'
export default defineDemo(
  {
    name: 'Button',
    category: 'FORM',
    docs: require('./index.md'),
    control: ButtonControl,
    module,
  },
  vButton,
)

