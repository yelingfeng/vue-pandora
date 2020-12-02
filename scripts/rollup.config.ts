
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'
import dts from 'rollup-plugin-dts'
import { activePackages } from './packages'

const configs = []

for (const { globals, name, display, external } of activePackages) {
  const umdGlobals = {
    '@pandora/Form': 'VuePandoraForm',
    ...(globals || {}),
  }
  const umdName = name === 'core' ? 'VuePandora' : `VuePandora${display}`

  configs.push({
    input: `packages/${name}/index.ts`,
    output: [
      {
        file: `packages/${name}/dist/index.cjs.js`,
        format: 'cjs',
      },
      {
        file: `packages/${name}/dist/index.esm.js`,
        format: 'es',
      },
      {
        file: `packages/${name}/dist/index.umd.js`,
        format: 'umd',
        name: umdName,
        globals: umdGlobals,
      },
      {
        file: `packages/${name}/dist/index.umd.min.js`,
        format: 'umd',
        name: umdName,
        globals: umdGlobals,
        plugins: [
          terser({
            format: {
              comments: false,
            },
          }),
        ],
      },
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
          'exclude': [
            'node_modules',
            '__tests__',
          ],
        },
        clean: true
      }),
      vue()
    ],
    external: [
      'vue',
      'ant-design-vue',
      ...(external || []),
    ],
  })

  configs.push({
    input: `packages/${name}/index.ts`,
    output: {
      file: `packages/${name}/dist/index.d.ts`,
      format: 'es',
    },
    plugins: [
      dts(),
    ],
  })
}

export default configs
