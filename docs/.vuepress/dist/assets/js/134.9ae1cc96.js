;(window.webpackJsonp = window.webpackJsonp || []).push([
  [134],
  {
    938: function(t, s, a) {
      'use strict'
      a.r(s)
      var n = a(58),
        r = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: '多选开启分页功能-支持翻页选中' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#多选开启分页功能-支持翻页选中' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' 多选开启分页功能（支持翻页选中）')
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a(
                  'common-code-format',
                  [
                    a('docsComponents-VSelectTable-showPagination', {
                      attrs: { slot: 'source' },
                      slot: 'source'
                    }),
                    t._v(' '),
                    a('p', [
                      a('code', [t._v('isShowPagination')]),
                      t._v(' 开启分页功能 '),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('reserveSelection')]),
                      t._v(' 开启翻页选中功能，默认开启 '),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('@page-change')]),
                      t._v('页码改变事件;传出当前选中的页码'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('table')]),
                      t._v(' 数据源及表头信息'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('keywords')]),
                      t._v(' 选项中的 value（选项的值）,label(选项的标签)'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('@selectionChange="selectionChange"')]),
                      t._v('事件返回选中的数据及 '),
                      a('code', [t._v('id')])
                    ]),
                    t._v(' '),
                    a('div', { staticClass: 'language-vue extra-class' }, [
                      a('pre', { pre: !0, attrs: { class: 'language-vue' } }, [
                        a('code', [
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('template')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n      '),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-select-table')
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':table')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('table'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':columns')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('table.columns'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':max-height')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('400'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':keywords')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v("{label:'materialCode',value:'id'}"),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('multiple')
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@selectionChange')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectionChange'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@page-change')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('pageChange'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('isShowPagination')
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-select-table')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('template')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n\n'),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('script')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          a('span', { pre: !0, attrs: { class: 'token script' } }, [
                            a('span', { pre: !0, attrs: { class: 'token language-javascript' } }, [
                              t._v('\n'),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('import')
                              ]),
                              t._v(' data '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('from')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'./data.json'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n'),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('import')
                              ]),
                              t._v(' data1 '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('from')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'./data1.json'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n'),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('export')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('default')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('data')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('return')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('table')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('total')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('currentPage')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('pageSize')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('10')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('data')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('columns')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'factoryModelIdLabel'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'工厂'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'100'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'materialTypeLabel'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'物料分类'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'80'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'materialCode'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'物料编码'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'100'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'materialName'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'物料名称'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'160'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'materialSpecs'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'规格'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'80'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'power'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'功率'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'80'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'materialPropertyLabel'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'物料属性'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'80'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'baseUnit'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'基本单位'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'80'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'singleWeight'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'单重'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'80'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'shortRuleMore'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'改余'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'80'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'shortRuleLess'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'改损'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'80'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'materialSourceLabel'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'数据来源'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'100'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'updateTime'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'最后更新日期'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'100'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('prop')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'updateBy'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'最后更新人'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('minWidth')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'100'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('created')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('getList')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('methods')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 复选框')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectionChange')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('val'),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v(',')
                                ]),
                                t._v(' ids')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      console'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('log')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'复选框'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n      console'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('log')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'复选框--id'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' ids'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 获取当前的页码')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('pageChange')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('val')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      console'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('log')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'获取当前的页码'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('table'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('currentPage '),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' val\n      '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('getList')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('table'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('currentPage'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('async')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('getList')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('pageNum')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('let')
                              ]),
                              t._v(' res\n      '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('if')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              t._v('pageNum '),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('===')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        res '),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('await')
                              ]),
                              t._v(' data\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('else')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        res '),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('await')
                              ]),
                              t._v(' data1\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('if')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              t._v('res'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('success'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v("// console.log('获取品名下拉数据', res.data)")
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('table'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('data '),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' res'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('data'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('records\n        '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('table'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('total '),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' res'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('data'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('total\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n')
                            ])
                          ]),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('script')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n\n'),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('style')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          a('span', { pre: !0, attrs: { class: 'token style' } }, [
                            a('span', { pre: !0, attrs: { class: 'token language-css' } }, [
                              t._v('\n')
                            ])
                          ]),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('style')
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n')
                        ])
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      s.default = r.exports
    }
  }
])
