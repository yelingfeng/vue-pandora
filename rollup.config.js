import path from 'path'
import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import alias from '@rollup/plugin-alias'
import pkg from './package.json'
import css from 'rollup-plugin-css-only'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const version = require('./package.json').version
const input = 'packages/index.js'
const plugins = [
  // peerDepsExternal(),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  resolve({
    browser: true,
    jsnext: true,
    // preferBuiltins: true,
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue']
  }),
  alias({
    resolve: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    entries: {
      '@': path.resolve(path.resolve(__dirname, './'), 'src'),
      pkg: path.resolve(path.resolve(__dirname, './'), 'packages')
    }
  }),
  // getBabelOutputPlugin({
  //   configFile: path.resolve(__dirname, 'babel.config.js')
  // }),
  commonjs(),
  // url(),
  // image(),
  css({
    output: 'vuepandora.css'
  }),
  vue({
    css: false
  }),
  typescript(),
  babel({
    // babelHelpers: 'runtime',
    exclude: ['node_modules/**'],
    presets: [
      [
        '@vue/cli-plugin-babel/preset',
        {
          modules: false,
          useBuiltIns: false,
          polyfills: []
        }
      ]
    ],
    configFile: false,
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue']
    // presets: ['@vue/cli-plugin-babel/preset']
  })
]
const external = () => {
  return ['vue', 'element-ui', 'dayjs']
}

const globals = {
  vue: 'Vue',
  dayjs: 'Dayjs',
  'element-ui': 'element-ui'
}

const banner =
  '/*!\n' +
  ` * vue-pandroa v${version}\n` +
  ` * (c) 2021-${new Date().getFullYear()}\n` +
  ' * Released under the MIT License.\n' +
  ' */'

const esm = {
  input,
  output: {
    format: 'es',
    file: pkg.module,
    globals,
    banner
  },
  external,
  inlineDynamicImports: true,
  plugins: [...plugins]
}
const umd = {
  input,
  output: {
    name: 'VuePandora',
    format: 'umd',
    file: pkg.browser,
    globals,
    banner
  },
  external,
  plugins: [...plugins]
}

const common = {
  input,
  output: {
    format: 'cjs',
    file: pkg.main,
    globals,
    banner
  },
  external,
  plugins: [...plugins]
}

function generageConfig(config) {
  const minConfig = {
    ...config
  }
  minConfig.output = {
    ...config.output,
    file: config.output.file.replace(/\.js$/i, '.min.js'),
    sourcemap: false
  }
  minConfig.plugins = [...config.plugins, terser()]
  return [config, minConfig]
}

export default [...generageConfig(esm), ...generageConfig(common), ...generageConfig(umd)]
