import { addParameters } from '@storybook/vue'
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VuePandora from '../index'
import '../mock/index.ts'
import '../src/_common.less'
import '../src/index.css'
import 'github-markdown-css/github-markdown.css'
import theme from './theme'

Vue.use(ElementUI)
Vue.use(VuePandora)

addParameters({
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: 'rgba(63, 131, 249, 0.05)' },
      { name: 'black', value: '#081528' }
    ]
  },
  options: {
    theme
  }
})

// import toReact from '@egoist/vue-to-react';

// export const parameters = {
//   theme,
//   docs: {
//     prepareForInline: (storyFn, { args }) => {
//       const Story = toReact(storyFn());
//       return <Story {...args} />;
//     },
//   },
// };

// addParameters({
//   docs: {
//     container: DocsContainer,
//     page: DocsPage,
//   },
// });
