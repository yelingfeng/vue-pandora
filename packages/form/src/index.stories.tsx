import { defineDemo } from '@/packages/_docs'
import { Form } from './index'
defineDemo(
  {
    name: 'formDemo',
    category: 'FORM',
    docs: require('./index.md'),
    control:{},
    module,
  },
  Form,
)
