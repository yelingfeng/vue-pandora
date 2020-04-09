const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const BASE_URL = IS_PROD ? '/vue-pandora/' : '/'
module.exports = {
  base: BASE_URL,
  title: 'Docs',
  port: '4444',
  markdown: {
    lineNumber: false //
  },
  themeConfig: {
    nav: [
      // 添加导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide/'
      },
      {
        text: '使用',
        link: '/usage/'
      },
      {
        text: 'API',
        link: '/api/'
      }
    ],
    // 添加侧边栏
    sidebar: 'auto',
    sidebarDepth: 2
  },
  plugins: ['@vuepress/back-to-top']
}
