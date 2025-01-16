;(window.webpackJsonp = window.webpackJsonp || []).push([
  [115],
  {
    920: function(t, a, s) {
      'use strict'
      s.r(a)
      var n = s(58),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s(
              'ContentSlotsDistributor',
              { attrs: { 'slot-key': t.$parent.slotKey } },
              [
                s('h1', { attrs: { id: 'select-下拉-组件' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#select-下拉-组件' } }, [
                    t._v('#')
                  ]),
                  t._v(' Select 下拉 组件')
                ]),
                t._v(' '),
                s('hr'),
                t._v(' '),
                s('h2', { attrs: { id: '单选' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#单选' } }, [t._v('#')]),
                  t._v(' 单选')
                ]),
                t._v(' '),
                s(
                  'common-code-format',
                  [
                    s('docsComponents-VSelect-index', {
                      attrs: { slot: 'source' },
                      slot: 'source'
                    }),
                    t._v(' '),
                    s('div', { staticClass: 'language-vue extra-class' }, [
                      s('pre', { pre: !0, attrs: { class: 'language-vue' } }, [
                        s('code', [
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n      '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-select')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('placeholder')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('请选择工序'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('v-model')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectVlaue'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':optionSource')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('stepList'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('valueKey')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('label'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@change')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectChange'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-select')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token script' } }, [
                            s('span', { pre: !0, attrs: { class: 'token language-javascript' } }, [
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('export')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('default')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('data')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('return')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('selectVlaue')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('null')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('stepList')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'开始'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'POSUI'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'11'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'GX123'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'烘干破碎'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'车间仓库'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'ui3333'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'hhh333'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('methods')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectChange')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('val')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      console'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('log')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'selectChange'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('selectVlaue'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
                s('h2', { attrs: { id: '单选分页' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#单选分页' } }, [
                    t._v('#')
                  ]),
                  t._v(' 单选分页')
                ]),
                t._v(' '),
                s(
                  'common-code-format',
                  [
                    s('docsComponents-VSelect-singlePagination', {
                      attrs: { slot: 'source' },
                      slot: 'source'
                    }),
                    t._v(' '),
                    s('p', [s('code', [t._v('注意：每次切换页面会清空之前页面选中的数据')])]),
                    t._v(' '),
                    s('div', { staticClass: 'language-vue extra-class' }, [
                      s('pre', { pre: !0, attrs: { class: 'language-vue' } }, [
                        s('code', [
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n      '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-select')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('v-model')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('materialId'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':optionSource')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('materialIdArr'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('labelKey')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('materialName'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('valueKey')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('id'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('isShowPagination')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('placeholder')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('请选择（单选分页）'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':paginationOption')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('setSelectPage'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@current-change')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('pageChange'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@change')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectChange'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('/>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token script' } }, [
                            s('span', { pre: !0, attrs: { class: 'token language-javascript' } }, [
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('import')
                              ]),
                              t._v(' data '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('from')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'./data.json'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('import')
                              ]),
                              t._v(' data2 '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('from')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'./data2.json'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('export')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('default')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n  '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'VSelectDemo'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('data')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('return')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('materialId')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('null')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('materialIdArr')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('setSelectPage')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('pageSize')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 每页显示条数')
                              ]),
                              t._v('\n        '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('currentPage')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 当前页')
                              ]),
                              t._v('\n        '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('pagerCount')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 按钮数，超过时会折叠')
                              ]),
                              t._v('\n        '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('total')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 总条数')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('created')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectMaterialList')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('methods')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 下拉选择分页')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('pageChange')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('val')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('setSelectPage'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('currentPage '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' val\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectMaterialList')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('setSelectPage'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('currentPage'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 获取品名下拉数据')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('async')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectMaterialList')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('pageNum')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('let')
                              ]),
                              t._v(' res\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('if')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              t._v('pageNum '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('===')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        res '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('await')
                              ]),
                              t._v(' data\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('else')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        res '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('await')
                              ]),
                              t._v(' data2\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('if')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              t._v('res'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('success'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v("// console.log('获取品名下拉数据', res.data)")
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('materialIdArr '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' res'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('data'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('records\n        '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('setSelectPage'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('total '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' res'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('data'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('total\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectChange')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('val')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      console'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('log')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'selectChange'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('materialId'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
                s('h2', { attrs: { id: '自定义显示下拉项label' } }, [
                  s(
                    'a',
                    { staticClass: 'header-anchor', attrs: { href: '#自定义显示下拉项label' } },
                    [t._v('#')]
                  ),
                  t._v(' 自定义显示下拉项label')
                ]),
                t._v(' '),
                s(
                  'common-code-format',
                  [
                    s('docsComponents-VSelect-customLabel', {
                      attrs: { slot: 'source' },
                      slot: 'source'
                    }),
                    t._v(' '),
                    s('p', [
                      t._v('设置customLabel字符串表达式：'),
                      s('code', [t._v('${_item.label}（${_item.id}）')]),
                      s('br'),
                      t._v('\n注意：表达式必须以'),
                      s('code', [t._v('_item')]),
                      t._v('开头，且后面的属性必须存在'),
                      s('code', [t._v('optionSource')]),
                      t._v('中')
                    ]),
                    t._v(' '),
                    s('div', { staticClass: 'language-vue extra-class' }, [
                      s('pre', { pre: !0, attrs: { class: 'language-vue' } }, [
                        s('code', [
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n      '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-select')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('placeholder')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('请选择工序'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('v-model')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectVlaue'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':optionSource')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('stepList'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('valueKey')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('label'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('customLabel')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('`${_item.label}（${_item.id}）`'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@change')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectChange'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-select')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token script' } }, [
                            s('span', { pre: !0, attrs: { class: 'token language-javascript' } }, [
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('export')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('default')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('data')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('return')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('selectVlaue')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('null')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('stepList')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'开始'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'POSUI'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'11'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'GX123'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'烘干破碎'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'车间仓库'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'ui3333'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'hhh333'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('methods')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectChange')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('val')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      console'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('log')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'selectChange'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('selectVlaue'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
                s('h2', { attrs: { id: '多选' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#多选' } }, [t._v('#')]),
                  t._v(' 多选')
                ]),
                t._v(' '),
                s(
                  'common-code-format',
                  [
                    s('docsComponents-VSelect-multiple', {
                      attrs: { slot: 'source' },
                      slot: 'source'
                    }),
                    t._v(' '),
                    s('div', { staticClass: 'language-vue extra-class' }, [
                      s('pre', { pre: !0, attrs: { class: 'language-vue' } }, [
                        s('code', [
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n      '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-select')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('placeholder')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('请选择工序'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('v-model')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectVlaue'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('multiple')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':optionSource')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('stepList'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('valueKey')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('label'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@change')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectChange'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('/>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token script' } }, [
                            s('span', { pre: !0, attrs: { class: 'token language-javascript' } }, [
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('export')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('default')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('data')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('return')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('selectVlaue')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('null')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('stepList')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'开始'")
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'POSUI'")
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'11'")
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'GX123'")
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'烘干破碎'")
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'车间仓库'")
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'ui3333'")
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'hhh333'")
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('methods')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectChange')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('val')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      console'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('log')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'selectChange'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('selectVlaue'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
                s('h2', { attrs: { id: '多选分页' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#多选分页' } }, [
                    t._v('#')
                  ]),
                  t._v(' 多选分页')
                ]),
                t._v(' '),
                s(
                  'common-code-format',
                  [
                    s('docsComponents-VSelect-multiplePagination', {
                      attrs: { slot: 'source' },
                      slot: 'source'
                    }),
                    t._v(' '),
                    s('p', [s('code', [t._v('注意：每次切换页面会清空之前页面选中的数据')])]),
                    t._v(' '),
                    s('div', { staticClass: 'language-vue extra-class' }, [
                      s('pre', { pre: !0, attrs: { class: 'language-vue' } }, [
                        s('code', [
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n      '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-select')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('v-model')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('materialId'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':optionSource')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('materialIdArr'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('labelKey')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('materialName'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('valueKey')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('id'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('multiple')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('isShowPagination')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('placeholder')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('请选择（多选分页）'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':paginationOption')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('setSelectPage'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@current-change')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('pageChange'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@change')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectChange'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('/>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token script' } }, [
                            s('span', { pre: !0, attrs: { class: 'token language-javascript' } }, [
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('import')
                              ]),
                              t._v(' data '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('from')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'./data.json'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('import')
                              ]),
                              t._v(' data2 '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('from')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'./data2.json'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('export')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('default')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n  '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('name')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'VSelectDemo'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('data')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('return')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('materialId')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('null')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('materialIdArr')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('setSelectPage')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('pageSize')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 每页显示条数')
                              ]),
                              t._v('\n        '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('currentPage')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 当前页')
                              ]),
                              t._v('\n        '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('pagerCount')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 按钮数，超过时会折叠')
                              ]),
                              t._v('\n        '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('total')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('0')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 总条数')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('created')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectMaterialList')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('methods')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 下拉选择分页')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('pageChange')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('val')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('setSelectPage'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('currentPage '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' val\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectMaterialList')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('setSelectPage'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('currentPage'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v('// 获取品名下拉数据')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('async')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectMaterialList')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('pageNum')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('let')
                              ]),
                              t._v(' res\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('if')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              t._v('pageNum '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('===')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        res '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('await')
                              ]),
                              t._v(' data\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('else')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        res '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('await')
                              ]),
                              t._v(' data2\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('if')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              t._v('res'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('success'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token comment' } }, [
                                t._v("// console.log('获取品名下拉数据', res.data)")
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('materialIdArr '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' res'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('data'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('records\n        '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('setSelectPage'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('total '),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v('=')
                              ]),
                              t._v(' res'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('data'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('total\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectChange')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('val')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      console'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('log')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v("'selectChange'")
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('materialId'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              t._v('\n')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
                s('h2', { attrs: { id: '选中值返回对象' } }, [
                  s('a', { staticClass: 'header-anchor', attrs: { href: '#选中值返回对象' } }, [
                    t._v('#')
                  ]),
                  t._v(' 选中值返回对象')
                ]),
                t._v(' '),
                s(
                  'common-code-format',
                  [
                    s('docsComponents-VSelect-returnObject', {
                      attrs: { slot: 'source' },
                      slot: 'source'
                    }),
                    t._v(' '),
                    s('p', [
                      t._v('在组件中配置：'),
                      s('code', [t._v('returnObject')]),
                      t._v(' ；必须设置 '),
                      s('code', [t._v('value-key')]),
                      t._v(' 属性且具有唯一性')
                    ]),
                    t._v(' '),
                    s('div', { staticClass: 'language-vue extra-class' }, [
                      s('pre', { pre: !0, attrs: { class: 'language-vue' } }, [
                        s('code', [
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n      '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('v-select')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('placeholder')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('选中值将以对象形式返回'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('v-model')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectVlaue'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v(':optionSource')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('stepList'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('valueKey')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('id'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('value-key')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('id'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('returnObject')
                            ]),
                            t._v('\n        '),
                            s('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                              t._v('@change')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token punctuation attr-equals' } },
                                [t._v('=')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ]),
                              t._v('selectChange'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('"')
                              ])
                            ]),
                            t._v('\n      '),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-select')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n    '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page-item')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n  '),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('v-layout-page')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('template')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          t._v('\n'),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('<')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                              t._v('>')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token script' } }, [
                            s('span', { pre: !0, attrs: { class: 'token language-javascript' } }, [
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('export')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('default')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('data')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('return')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('selectVlaue')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('null')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('stepList')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('[')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"开始"')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('1')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"POSUI"')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('2')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"11"')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('3')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"GX123"')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('4')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"烘干破碎"')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('5')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"车间仓库"')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('6')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"ui3333"')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('7')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n        '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('label')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"hhh333"')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('id')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('8')]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n      '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(']')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s(
                                'span',
                                { pre: !0, attrs: { class: 'token literal-property property' } },
                                [t._v('methods')]
                              ),
                              s('span', { pre: !0, attrs: { class: 'token operator' } }, [
                                t._v(':')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('selectChange')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token parameter' } }, [
                                t._v('val')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('{')
                              ]),
                              t._v('\n      console'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token function' } }, [
                                t._v('log')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('(')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token string' } }, [
                                t._v('"selectChange"')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' val'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v(' '),
                              s('span', { pre: !0, attrs: { class: 'token keyword' } }, [
                                t._v('this')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('.')
                              ]),
                              t._v('selectVlaue'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(')')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n    '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n  '),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(',')
                              ]),
                              t._v('\n'),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('}')
                              ]),
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v(';')
                              ]),
                              t._v('\n')
                            ])
                          ]),
                          s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                            s('span', { pre: !0, attrs: { class: 'token tag' } }, [
                              s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
                                t._v('</')
                              ]),
                              t._v('script')
                            ]),
                            s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [
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
      a.default = e.exports
    }
  }
])
