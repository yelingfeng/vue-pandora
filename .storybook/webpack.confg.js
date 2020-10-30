const path = require('path')
module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: [/node_modules/],
      use: {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    })
    config.module.rules.push({
      test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
    })
    return config
  }
}
