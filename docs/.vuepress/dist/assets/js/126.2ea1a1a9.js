;(window.webpackJsonp = window.webpackJsonp || []).push([
  [126],
  {
    929: function(t, s, a) {
      'use strict'
      a.r(s)
      var n = a(58),
        p = Object(n.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                a('h1', { attrs: { id: '多选-虚拟列表' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#多选-虚拟列表' } }, [
                    t._v('#')
                  ]),
                  t._v(' 多选--虚拟列表')
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a(
                  'common-code-format',
                  [
                    a('docsComponents-VSelectTable-multiplevirtual', {
                      attrs: { slot: 'source' },
                      slot: 'source'
                    }),
                    t._v(' '),
                    a('p', [
                      t._v('在组件中需配置：'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('useVirtual')]),
                      t._v(' 即可'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('注意事项：')]),
                      t._v(' '),
                      a('br'),
                      t._v('\n不设置'),
                      a('code', [t._v('maxHeight')]),
                      t._v('Table 的最大高度是'),
                      a('code', [t._v('540')]),
                      t._v('；'),
                      a('code', [t._v('列表不会换行显示数据')]),
                      t._v(';'),
                      a('code', [t._v('不支持搜索过滤')]),
                      t._v(';'),
                      a('code', [t._v('不支持tags删除')])
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
                              t._v('use-virtual')
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
                              t._v("{label:'name',value:'id'}"),
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
                                t._v("'物料编号'")
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
                                t._v("'100px'")
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
                                t._v("'code'")
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
                                t._v("'物料名称'")
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
                                t._v("'149px'")
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
                                t._v("'name'")
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
                                t._v("'规格'")
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
                                t._v("'149px'")
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
                                t._v("'spec'")
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
                                t._v("'单位'")
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
                                t._v("'110px'")
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
                                t._v("'unitName'")
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
                                t._v('initData')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
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
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('initData')
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
                                t._v('for')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('let')
                              ]),
                              t._v(' i '),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v(' i '),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('<')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token number' } }, [
                                t._v('10000')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v(' i'),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('++')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
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
                              t._v('data'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('push')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n          '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' i'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('code')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' i'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                                t._v("'物料名称'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('+')
                              ]),
                              t._v(' i'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                                t._v(
                                  "'物料名称物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名物料名称'"
                                )
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('+')
                              ]),
                              t._v(' i'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
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
                                t._v("'吨'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
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
      s.default = p.exports
    }
  }
])
