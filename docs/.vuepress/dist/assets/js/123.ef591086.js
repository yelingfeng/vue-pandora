;(window.webpackJsonp = window.webpackJsonp || []).push([
  [123],
  {
    928: function(t, s, a) {
      'use strict'
      a.r(s)
      var r = a(58),
        p = Object(r.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: '多选' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#多选' } }, [t._v('#')]),
                  t._v(' 多选')
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a(
                  'common-code-format',
                  [
                    a('docsComponents-VSelectTable-multiple', {
                      attrs: { slot: 'source' },
                      slot: 'source'
                    }),
                    t._v(' '),
                    a('p', [
                      t._v('在组件中需配置：'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('multiple')]),
                      t._v(' 开启多选'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('table')]),
                      t._v(' 数据源及表头信息'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('keywords')]),
                      t._v(' 选项中的value（选项的值）,label(选项的标签)'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('@selectionChange')]),
                      t._v(' 多选事件，传出当前选中项，及选中项的keywords.value集合')
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
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('style')
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
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token value css language-css' } },
                                  [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [
                                      t._v('display')
                                    ]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(':')
                                    ]),
                                    t._v('flex'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(';')
                                    ]),
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [
                                      t._v('flex-direction')
                                    ]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(':')
                                    ]),
                                    t._v(' row'),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(';')
                                    ])
                                  ]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ])
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
                              t._v('ref')
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
                              t._v('selectTable'),
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
                              t._v("{ label: 'name', value: 'id' }"),
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
                          t._v('\n      '),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('el-button')
                            ]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token special-attr' } }, [
                              a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                                t._v('style')
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
                                a(
                                  'span',
                                  { pre: !0, attrs: { class: 'token value css language-css' } },
                                  [
                                    a('span', { pre: !0, attrs: { class: 'token property' } }, [
                                      t._v('margin-left')
                                    ]),
                                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                      t._v(':')
                                    ]),
                                    t._v(' 15px')
                                  ]
                                ),
                                a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                  t._v('"')
                                ])
                              ])
                            ]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('type')
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
                              t._v('primary'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v(' '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@click')
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
                              t._v('clear'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('清空选中'),
                          a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('el-button')
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
                                [t._v('data')]
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称1"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格1"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称2"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格2"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称3"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格3"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称4"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格4"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称5"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格5"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称6"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格6"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称7"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格7"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称8"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格8"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('9')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('9')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称9"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格9"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称10"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格10"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('11')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('11')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称11"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格11"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('12')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('12')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称12"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格12"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('13')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('13')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称13"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('spec')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料规格13"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('unitName')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"吨"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料编号"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"100px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"code"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"name"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"规格"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"spec"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"单位"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"110px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"unitName"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料编号1"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"code"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称1"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"name"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"规格1"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"spec"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"单位1"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"110px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"unitName"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料编号11"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"code"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称11"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"name"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"规格11"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"spec"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"单位11"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"110px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"unitName"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料编号111"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"code"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"物料名称111"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"name"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"规格111"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"149px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"spec"')
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
                                [t._v('label')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"单位111"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('width')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"110px"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                t._v('"unitName"')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
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
                                t._v('"复选框"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
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
                                t._v('"复选框--id"')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' ids'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('clear')
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
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('$refs'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('selectTable'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('clear')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n    '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
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
                          a('span', { pre: !0, attrs: { class: 'token style' } }),
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
      s.default = p.exports
    }
  }
])
