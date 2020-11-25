const prism = require('markdown-it-prism')
const path = require('path')
const highlightLines = require('markdown-it-highlight-lines')
const linkAttributes = require('markdown-it-link-attributes')
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-json')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/components/prism-bash')

module.exports = {
  stories: ['../packages/**/*.stories.@(js|ts|tsx|mdx|md)'],
  logLevel: 'debug',
  addons: [
    // '@storybook/addon-docs',
    // '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: require.resolve('markdown-it-loader'),
          options: {
            html: true,
            xhtmlOut: true,
            linkify: true,
            typographer: true,
            use: [
              prism,
              highlightLines,
              [
                linkAttributes,
                {
                  pattern: /^https?:/,
                  attrs: {
                    class: 'external-link',
                    target: '_blank',
                  },
                },
              ],
            ],
          },
        },
        // {
        //   loader: require.resolve('../scripts/types-loader'),
        // },
      ],
    })

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            plugins: [
              [
                'const-enum',
                {
                  transform: 'constObject',
                },
              ],
              ['@vue/babel-plugin-jsx'],
              [
                'babel-plugin-root-import',
                {
                  "paths": [
                    {
                      "rootPathSuffix": "./",
                      "rootPathPrefix": "@/"
                    }
                  ]
                }
              ],
              [ 
                'import', { libraryName: 'ant-design-vue' }
              ],
            ],
            presets: ['@babel/env', '@babel/typescript'],
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.stories\.tsx?$/,
      use:[
        {
          loader: require.resolve('@storybook/source-loader'),
          options: {
            loaderOptions: {
              injectStoryParameters: false,
            },
          }
        }
      ],
      enforce: 'pre',
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              ident: 'postcss',
              plugins: [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
    })
    config.resolve.alias = Object.assign(config.resolve.alias, {
      '@': path.resolve(__dirname, '../packages')
    });

    return config
  },
}
