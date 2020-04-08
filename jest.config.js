module.exports = {
  rootDir: __dirname,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js?$': 'babel-jest'
  },
  watchPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/packages/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testURL: 'http://localhost/',
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['<rootDir>/__tests__/**/*.(js|jsx|ts|tsx)']
}
