;(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    762: function(t, s, a) {
      'use strict'
      a.r(s)
      var e = a(39),
        r = Object(e.a)(
          {},
          function() {
            var t = this,
              s = t.$createElement,
              a = t._self._c || s
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              a('h1', { attrs: { id: 'iformitemopt' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#iformitemopt' } }, [
                  t._v('#')
                ]),
                t._v(' IFormItemOpt')
              ]),
              t._v(' '),
              a('ul', [a('li', [t._v('类型: '), a('code', [t._v('Object{}')])])]),
              t._v(' '),
              a('p', [t._v('单个'), a('code', [t._v('FormItem')]), t._v('配置类型')]),
              t._v(' '),
              a('div', { staticClass: 'language-ts extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-ts' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    label'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('string')]),
                    t._v('\n    type'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' ItemType\n    required'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('boolean')]),
                    t._v('\n    wrap'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('boolean')]),
                    t._v('\n    show'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('?')]),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token builtin' } }, [t._v('boolean')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('null')]),
                    t._v('\n    comOpt'),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' IFormItemCompOpt\n'),
                    a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: 'label' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#label' } }, [t._v('#')]),
                t._v(' label')
              ]),
              t._v(' '),
              a('ul', [
                a('li', [t._v('类型： '), a('code', [t._v('string')])]),
                t._v(' '),
                a('li', [t._v('默认值：'), a('code', [t._v('-')])]),
                t._v(' '),
                a('li', [t._v('可选值：'), a('code', [t._v('-')])])
              ]),
              t._v(' '),
              a('p', [t._v('label 名称')]),
              t._v(' '),
              a('h2', { attrs: { id: 'type' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#type' } }, [t._v('#')]),
                t._v(' type')
              ]),
              t._v(' '),
              a('ul', [
                a('li', [t._v('类型： '), a('code', [t._v('ItemType')])]),
                t._v(' '),
                a('li', [t._v('默认值：'), a('code', [t._v('-')])]),
                t._v(' '),
                a('li', [
                  t._v('可选值：'),
                  a('code', [
                    t._v(
                      'select|text|date|button|radio|upload|formList|checkbox|cascade|textGroup|autoComplete'
                    )
                  ])
                ])
              ]),
              t._v(' '),
              a('p', [a('code', [t._v('formItem')]), t._v('类型 不同类型映射不同的子组件')]),
              t._v(' '),
              a('div', { staticClass: 'language-ts extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-ts' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('type')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token class-name' } }, [
                      t._v('ItemType')
                    ]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'select'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'text'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'date'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'button'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'radio'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'upload'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'formList'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'cascade'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'checkbox'")]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'autoComplete'")
                    ]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'singleGroup'")
                    ]),
                    t._v('\n  '),
                    a('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    a('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'textGroup'")]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: 'required' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#required' } }, [t._v('#')]),
                t._v(' required')
              ]),
              t._v(' '),
              a('ul', [
                a('li', [t._v('类型： '), a('code', [t._v('Boolean')])]),
                t._v(' '),
                a('li', [t._v('默认值：'), a('code', [t._v('false')])])
              ]),
              t._v(' '),
              a('p', [t._v('是否必填 目前为效果的 没有验证框架需要手动处理')]),
              t._v(' '),
              a('h2', { attrs: { id: 'show' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#show' } }, [t._v('#')]),
                t._v(' show')
              ]),
              t._v(' '),
              a('ul', [
                a('li', [t._v('类型： '), a('code', [t._v('Boolean')])]),
                t._v(' '),
                a('li', [t._v('默认值：'), a('code', [t._v('true')])])
              ]),
              t._v(' '),
              a('p', [t._v('是否显示')]),
              t._v(' '),
              a('h2', { attrs: { id: 'wrap' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#wrap' } }, [t._v('#')]),
                t._v(' wrap')
              ]),
              t._v(' '),
              a('ul', [
                a('li', [t._v('类型： '), a('code', [t._v('Boolean')])]),
                t._v(' '),
                a('li', [t._v('默认值：'), a('code', [t._v('false')])])
              ]),
              t._v(' '),
              a('p', [
                t._v('是否换行 设置当前'),
                a('code', [t._v('FormItem')]),
                t._v('项为 true 的话 下一个'),
                a('code', [t._v('FormItem')]),
                t._v(' 换行显示')
              ]),
              t._v(' '),
              a('h2', { attrs: { id: 'comopt' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#comopt' } }, [t._v('#')]),
                t._v(' comOpt')
              ]),
              t._v(' '),
              a('ul', [a('li', [t._v('类型: '), a('code', [t._v('IFormItemCompOpt')])])]),
              t._v(' '),
              a('p', [
                t._v('组件属性 一般为'),
                a('code', [t._v('element-ui')]),
                t._v('组件的属性配置')
              ])
            ])
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
