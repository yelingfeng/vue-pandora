;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    621: function(t, e, s) {},
    650: function(t, e, s) {
      'use strict'
      s(621)
    },
    657: function(t, e, s) {
      'use strict'
      s.r(e)
      var o = {
          name: 'DemoPage',
          props: ['title', 'description'],
          data: function() {
            return { isShow: !1, codeTextBtn: '显示代码' }
          },
          methods: {
            handleToggleShow: function() {
              ;(this.isShow = !this.isShow),
                (this.codeTextBtn = this.isShow ? '隐藏代码' : '显示代码')
            }
          }
        },
        i = (s(650), s(32)),
        c = Object(i.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              s = t._self._c || e
            return s('div', { staticClass: 'code' }, [
              s('div', { staticClass: 'code--title' }, [
                s('h2', [t._v(t._s(t.title))]),
                t._v(' '),
                s('small', [t._v(t._s(t.description))])
              ]),
              t._v(' '),
              s('div', { staticClass: 'code--demo' }, [
                s('div', { staticClass: 'code-content' }, [t._t('codeComp')], 2)
              ]),
              t._v(' '),
              t.isShow ? s('div', { staticClass: 'code--segment' }, [t._t('codeText')], 2) : t._e(),
              t._v(' '),
              t.$slots.codeText
                ? s('div', { staticClass: 'code--button', on: { click: t.handleToggleShow } }, [
                    t._v('\n    ' + t._s(t.codeTextBtn) + '\n  ')
                  ])
                : t._e()
            ])
          },
          [],
          !1,
          null,
          '7e3bdc5c',
          null
        )
      e.default = c.exports
    }
  }
])
