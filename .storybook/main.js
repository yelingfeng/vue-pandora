const vueConfig = require('@vue/cli-service/webpack.config.js')

// const prism = require('markdown-it-prism')
// const highlightLines = require('markdown-it-highlight-lines')
// const linkAttributes = require('markdown-it-link-attributes')

// require('prismjs/components/prism-typescript')
// require('prismjs/components/prism-javascript')
// require('prismjs/components/prism-json')
// require('prismjs/components/prism-jsx')
// require('prismjs/components/prism-tsx')
// require('prismjs/components/prism-bash')
const path = require('path')

module.exports = {
  stories: ['../stories/*.stories.@(js|ts|tsx|mdx|md)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-controls'
  ],
  webpackFinal: async (config, { configType }) => {
    const defaultConfig = {
      ...config,
      resolve: {
        ...vueConfig.resolve,
        alias: {
          ...vueConfig.resolve.alias,
          vue$: 'vue/dist/vue.esm.js'
        }
      },
      module: {
        ...vueConfig.module,
        rules: vueConfig.module.rules
      }
    }
    defaultConfig.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: 'vue-loader'
        },
        {
          loader: 'vue-markdown-loader/lib/markdown-compiler',
          options: {
            raw: true
          }
        }
      ]
    })
    defaultConfig.module.rules.push({
      test: /\.stories\.jsx?$/,
      loader: require.resolve('@storybook/source-loader'),
      include: [path.resolve(__dirname, '../stories')],
      enforce: 'pre'
    })

    return defaultConfig
  }
}
