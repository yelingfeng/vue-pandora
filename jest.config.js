const transformIgnorePatterns = [
  '/dist/',
  // Ignore modules without es dir.
  // Update: @babel/runtime should also be transformed
  'node_modules/(?!.*(@babel|lodash-es))[^/]+?/(?!(es|node_modules)/)',
];
const testPathIgnorePatterns = ['/node_modules/', 'node'];

module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  testPathIgnorePatterns:testPathIgnorePatterns,
  transform: {
    '^.+\\.(vue|md)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.(t|j)sx?$': [
      'babel-jest', {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true,
              },
            },
          ],
          '@babel/preset-typescript',
        ],
        plugins: [
          '@vue/babel-plugin-jsx',
          '@babel/plugin-proposal-class-properties',
        ],
      },
    ],
    '^.+\\.svg$': '<rootDir>/node_modules/jest-transform-stub',
  },
  watchPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json','vue','md'],
  rootDir: __dirname,
  // 源代码中相同的 `@` -> `src` 别名
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  transformIgnorePatterns,
  testEnvironment: 'jest-environment-jsdom-fifteen',
  testMatch: ['<rootDir>/packages/**/__tests__/**/*spec.[jt]s?(x)'],
  roots: ['<rootDir>'],
}
