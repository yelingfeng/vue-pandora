;(window.webpackJsonp = window.webpackJsonp || []).push([
  [25],
  {
    793: function(t, e, n) {},
    813: function(t, e, n) {
      'use strict'
      n(793)
    },
    825: function(t, e, n) {
      'use strict'
      n.r(e)
      n(195)
      var i = {
          data: function() {
            return {
              hovering: !1,
              isExpanded: !1,
              fixedControl: !1,
              scrollParent: null,
              langConfig: {
                'hide-text': '隐藏代码',
                'show-text': '显示代码',
                'button-text': '在线运行',
                'tooltip-text': '前往 jsfiddle.net 运行此示例'
              }
            }
          },
          props: {
            jsfiddle: Object,
            default: function() {
              return {}
            }
          },
          methods: {
            scrollHandler: function() {
              var t = this.$refs.meta.getBoundingClientRect(),
                e = t.top,
                n = t.bottom
              t.left
              this.fixedControl =
                n > document.documentElement.clientHeight &&
                e + 44 <= document.documentElement.clientHeight
            },
            removeScrollHandler: function() {
              this.scrollParent &&
                this.scrollParent.removeEventListener('scroll', this.scrollHandler)
            }
          },
          computed: {
            lang: function() {
              return this.$route.path.split('/')[1]
            },
            blockClass: function() {
              return 'demo-'
                .concat(this.lang, ' demo-')
                .concat(this.$router.currentRoute.path.split('/').pop())
            },
            iconClass: function() {
              return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
            },
            controlText: function() {
              return this.isExpanded ? this.langConfig['hide-text'] : this.langConfig['show-text']
            },
            codeArea: function() {
              return this.$el.getElementsByClassName('meta')[0]
            },
            codeAreaHeight: function() {
              return this.$el.getElementsByClassName('description').length > 0
                ? this.$el.getElementsByClassName('description')[0].clientHeight +
                    this.$el.getElementsByClassName('highlight')[0].clientHeight +
                    20
                : this.$el.getElementsByClassName('highlight')[0].clientHeight
            }
          },
          watch: {
            isExpanded: function(t) {
              var e = this
              if (
                ((this.codeArea.style.height = t ? ''.concat(this.codeAreaHeight + 1, 'px') : '0'),
                !t)
              )
                return (
                  (this.fixedControl = !1),
                  (this.$refs.control.style.left = '0'),
                  void this.removeScrollHandler()
                )
              setTimeout(function() {
                ;(e.scrollParent = document.querySelector(
                  '.page-component__scroll > .el-scrollbar__wrap'
                )),
                  e.scrollParent && e.scrollParent.addEventListener('scroll', e.scrollHandler),
                  e.scrollHandler()
              }, 200)
            }
          },
          mounted: function() {
            var t = this
            this.$nextTick(function() {
              var e = t.$el.getElementsByClassName('highlight')[0]
              0 === t.$el.getElementsByClassName('description').length &&
                ((e.style.width = '100%'), (e.borderRight = 'none'))
            })
          },
          beforeDestroy: function() {
            this.removeScrollHandler()
          }
        },
        o = (n(813), n(58)),
        s = Object(o.a)(
          i,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              {
                staticClass: 'demo-block',
                class: [t.blockClass, { hover: t.hovering }],
                on: {
                  mouseenter: function(e) {
                    t.hovering = !0
                  },
                  mouseleave: function(e) {
                    t.hovering = !1
                  }
                }
              },
              [
                n('div', { staticStyle: { padding: '24px' } }, [t._t('source')], 2),
                t._v(' '),
                n('div', { ref: 'meta', staticClass: 'meta' }, [
                  t.$slots.default
                    ? n('div', { staticClass: 'description' }, [t._t('default')], 2)
                    : t._e(),
                  t._v(' '),
                  n(
                    'div',
                    {
                      directives: [{ name: 'highlight', rawName: 'v-highlight' }],
                      staticClass: 'highlight '
                    },
                    [t._t('highlight')],
                    2
                  )
                ]),
                t._v(' '),
                n(
                  'div',
                  {
                    ref: 'control',
                    staticClass: 'demo-block-control',
                    on: {
                      click: function(e) {
                        t.isExpanded = !t.isExpanded
                      }
                    }
                  },
                  [
                    n('transition', { attrs: { name: 'arrow-slide' } }, [
                      n('i', { class: [t.iconClass, { hovering: t.hovering }] })
                    ]),
                    t._v(' '),
                    n('transition', { attrs: { name: 'text-slide' } }, [
                      n(
                        'span',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: t.hovering,
                              expression: 'hovering'
                            }
                          ]
                        },
                        [t._v(t._s(t.controlText))]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = s.exports
    }
  }
])
