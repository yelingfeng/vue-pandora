const vueConfig = require('@vue/cli-service/webpack.config.js')
const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.@(js|ts|tsx|mdx|md)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y'
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
