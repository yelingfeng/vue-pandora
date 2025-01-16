const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const BASE_URL = IS_PROD ? '/vue-pandora/' : '/'
const title = `Vue-pandora@1.x`
module.exports = {
  base: BASE_URL,
  title: title,
  description: 'A component library of custom secondary encapsulation about element-ui', //描述
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
      // {
      //   text: '指南',
      //   link: '/guide/'
      // },
      // {
      //   text: '使用',
      //   link: '/usage/'
      // },
      {
        text: 'API文档',
        link: '/api/'
      },
      {
        text: '案例',
        link: '/components/'
      },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [{ text: 'vue-pandora', link: 'https://github.com/yelingfeng/vue-pandora' }]
      }
    ],
    sidebar: {
      '/api/': [
        {
          title: '表格',
          collapsable: false,
          children: ['table/tableColumn', 'table/tablePager']
        },
        {
          title: '表单',
          collapsable: false,
          // path: 'form/form',
          children: ['form/api']
        },
        {
          title: '高级查询',
          path: 'queryCondition/api'
        },
        {
          title: '高级组合',
          path: 'adaptivePage/api'
        },
        {
          title: '详情组件',
          path: 'detail/api'
        },
        {
          title: '弹框组件',
          path: 'dialog/api'
        },
        {
          title: '下拉组件',
          path: 'select/api'
        },
        {
          title: '下拉表格',
          path: 'select/api'
        },
        {
          title: '下拉Tree',
          path: 'treeSelect/api'
        }
      ],
      '/components/': [
        {
          title: '表格',
          collapsable: true,
          path: 'table/tableBase'
        },
        {
          title: '表单',
          path: 'form/formBase'
        },
        {
          title: '高级查询',
          collapsable: false,
          children: [
            'queryCondition/base',
            'queryCondition/btnCheckBind',
            'queryCondition/defaultVal',
            'queryCondition/footer',
            'queryCondition/footerBtn',
            'queryCondition/handleEventChange',
            'queryCondition/isDropDownSelectMore',
            'queryCondition/labelRender',
            'queryCondition/linkage',
            'queryCondition/maxVisibleSpans',
            'queryCondition/slot',
            'queryCondition/TDatePickerUse',
            'queryCondition/widthSize'
          ]
        },
        {
          title: '高级组合',
          collapsable: false,
          children: [
            'adaptivePage/base',
            'adaptivePage/contentSlot',
            'adaptivePage/lefttree',
            'adaptivePage/selection',
            'adaptivePage/virtual'
          ]
        },
        {
          title: '详情组件',
          path: 'detail/base'
        },
        {
          title: '弹框组件',
          path: 'dialog/base'
        },
        {
          title: '下拉框',
          path: 'select/base'
        },
        {
          title: '下拉树',
          path: 'treeSelect/base'
        },
        {
          title: '下拉表格',
          collapsable: false,
          children: [
            'selectTable/defaultSelectValLabel',
            'selectTable/formDemo',
            'selectTable/isKeyup',
            'selectTable/isRadioDisabled',
            'selectTable/isShowFirstColumn',
            'selectTable/isShowQuery',
            'selectTable/isShowQuerySpan',
            'selectTable/multiple',
            'selectTable/multipleDefaultSelectVal',
            'selectTable/multipleDynamicDefaultSelectVal',
            'selectTable/multiplevirtual',
            'selectTable/radio',
            'selectTable/radioDefaultSelectVal',
            'selectTable/radioDynamicDefaultSelectVal',
            'selectTable/radioPagination',
            'selectTable/radiovirtual',
            'selectTable/rowClickRadio',
            'selectTable/selectable',
            'selectTable/showPagination',
            'selectTable/slotUse'
          ]
        }
      ]
    },
    // 添加侧边栏
    // sidebar: 'auto',
    sidebarDepth: 3
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        }
      }
    ]
  ]
}
