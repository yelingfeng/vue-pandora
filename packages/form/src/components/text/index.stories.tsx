import { defineDemo } from '@/packages/_docs'
import Text from './index'
import { TextControl } from './props'
export default defineDemo(
  {
    name: 'Text',
    category: 'FORM',
    docs: require('./index.md'),
    control: TextControl,
    module,
  },
  Text,
)
