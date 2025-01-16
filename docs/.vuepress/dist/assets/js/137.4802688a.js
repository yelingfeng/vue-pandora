;(window.webpackJsonp = window.webpackJsonp || []).push([
  [137],
  {
    942: function(t, s, a) {
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
                a('h1', { attrs: { id: 'vtreeselect-下拉树形结构组件' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#vtreeselect-下拉树形结构组件' }
                    },
                    [t._v('#')]
                  ),
                  t._v(' VTreeSelect 下拉树形结构组件')
                ]),
                t._v(' '),
                a('hr'),
                t._v(' '),
                a('h2', { attrs: { id: '单选' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#单选' } }, [t._v('#')]),
                  t._v(' 单选')
                ]),
                t._v(' '),
                a(
                  'common-code-format',
                  [
                    a('docsComponents-VTreeSelect-index', {
                      attrs: { slot: 'source' },
                      slot: 'source'
                    }),
                    t._v(' '),
                    a('p', [
                      t._v('在组件中需配置：'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('defaultData')]),
                      t._v(' 默认值显示；类型Object且必须是{id:'),
                      a('strong', [t._v(',label:')]),
                      t._v('*}'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('@handleNodeClick')]),
                      t._v(' 获取当前选中项；类型Object')
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
                              t._v('div')
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
                              t._v('v-tree-select')
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':options')
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
                              t._v('treeList'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('placeholder')
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
                              t._v('请选择tree结构'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('width')
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
                              t._v('50%'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':defaultData')
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
                              t._v('defaultValue'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':treeProps')
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
                              t._v('treeProps'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@handleNodeClick')
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
                              t._v('selectDrop'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('/>')
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
                              t._v('div')
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
                          t._v('\n'),
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
                                t._v("'VTreeSelectDemo'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                [t._v('defaultValue')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'1'")
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
                                t._v("'一级 1菈妮'")
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('treeProps')]
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
                                [t._v('value')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'id'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'children'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
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
                                t._v("'name'")
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('treeList')]
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
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'1'")
                              ]),
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
                                t._v("'一级 1菈妮'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
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
                                t._v("'二级 1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n                  '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'1-1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n                  '),
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
                                t._v("'三级 1-1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
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
                                t._v("'一级 2'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'2'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'2-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
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
                                t._v("'二级 2-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n                  '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'2-1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n                  '),
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
                                t._v("'三级 2-1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'2-2'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
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
                                t._v("'二级 2-2'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n                  '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'2-2-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n                  '),
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
                                t._v("'三级 2-2-1鸡腿'")
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
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
                                t._v('selectDrop')
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
                                t._v("'选中----\x3e'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
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
                          t._v('\n')
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                t._v(' '),
                a('h2', { attrs: { id: '多选' } }, [
                  a('a', { staticClass: 'header-anchor', attrs: { href: '#多选' } }, [t._v('#')]),
                  t._v(' 多选')
                ]),
                t._v(' '),
                a(
                  'common-code-format',
                  [
                    a('docsComponents-VTreeSelect-multiple', {
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
                      a('code', [t._v('defaultValue')]),
                      t._v(' 默认值显示；类型Array'),
                      a('br'),
                      t._v(' '),
                      a('code', [t._v('@handleNodeClick')]),
                      t._v(' 获取当前选中项集合；类型Array')
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
                              t._v('div')
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
                              t._v('v-tree-select')
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':options')
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
                              t._v('treeList'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('placeholder')
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
                              t._v('请选择tree多选结构'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('width')
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
                              t._v('50%'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':defaultValue')
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
                              t._v('defaultValue'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':treeProps')
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
                              t._v('treeProps'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@handleNodeClick')
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
                              t._v('selectDrop'),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('multiple')
                            ]),
                            t._v('\n      '),
                            a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('/>')
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
                              t._v('div')
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
                          t._v('\n'),
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
                                t._v("'VTreeSelectDemo'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                                [t._v('defaultValue')]
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
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 默认值')
                              ]),
                              t._v('\n      '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('treeProps')]
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
                                [t._v('value')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'id'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'children'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
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
                                t._v("'name'")
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('treeList')]
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
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'1'")
                              ]),
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
                                t._v("'一级 1菈妮'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
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
                                t._v("'二级 1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n                  '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'1-1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n                  '),
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
                                t._v("'三级 1-1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
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
                                t._v("'一级 2'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
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
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'2'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'2-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
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
                                t._v("'二级 2-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n                  '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'2-1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n                  '),
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
                                t._v("'三级 2-1-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'2-2'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
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
                                t._v("'二级 2-2'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('children')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n                  '),
                              a(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              a('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              a('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'2-2-1'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n                  '),
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
                                t._v("'三级 2-2-1鸡腿'")
                              ]),
                              t._v('\n                '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n              '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n            '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n          '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
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
                                t._v('selectDrop')
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
                                t._v("'选中----\x3e'")
                              ]),
                              a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
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
