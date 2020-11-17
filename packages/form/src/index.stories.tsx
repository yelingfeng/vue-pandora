import { defineDemo } from '../../_docs'
import { FormDemo } from './index'
defineDemo(
  {
    name: 'formDemo',
    category: 'FORM',
    docs: require('./index.md'),
    module,
  },
  FormDemo,
)
