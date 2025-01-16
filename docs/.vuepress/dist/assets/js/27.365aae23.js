;(window.webpackJsonp = window.webpackJsonp || []).push([
  [27],
  {
    745: function(t, e, n) {},
    747: function(t, e, n) {
      'use strict'
      n.r(e)
      var i = {
          name: 'DropdownTransition',
          methods: {
            setHeight: function(t) {
              t.style.height = t.scrollHeight + 'px'
            },
            unsetHeight: function(t) {
              t.style.height = ''
            }
          }
        },
        s = (n(749), n(58)),
        o = Object(s.a)(
          i,
          function() {
            var t = this.$createElement
            return (this._self._c || t)(
              'transition',
              {
                attrs: { name: 'dropdown' },
                on: {
                  enter: this.setHeight,
                  'after-enter': this.unsetHeight,
                  'before-leave': this.setHeight
                }
              },
              [this._t('default')],
              2
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = o.exports
    },
    749: function(t, e, n) {
      'use strict'
      n(745)
    }
  }
])
