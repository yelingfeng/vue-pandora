;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    794: function(e, t, o) {},
    814: function(e, t, o) {
      'use strict'
      o(794)
    },
    826: function(e, t, o) {
      'use strict'
      o.r(t)
      var n = {
          name: 'CodeFormat',
          props: {
            sourceHeight: { type: Boolean, default: !1 },
            isShowModule: { type: Boolean, default: !1 }
          },
          data: function() {
            return {
              qrCodeDialog: !1,
              hovering: !1,
              isExpanded: !1,
              fixedControl: !1,
              scrollParent: null
            }
          },
          computed: {
            lang: function() {
              return this.$route.path.split('/')[1]
            },
            iconClass: function() {
              return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
            },
            controlText: function() {
              return this.isExpanded ? '隐藏代码' : '显示代码'
            },
            codeArea: function() {
              return this.$el.getElementsByClassName('meta')[0]
            }
          },
          watch: {
            isExpanded: function(e) {
              var t = this
              if ((this.setCodeAreaHeight(), !e))
                return (this.fixedControl = !1), void this.removeScrollHandler()
              setTimeout(function() {
                ;(t.scrollParent = window),
                  t.scrollParent && t.scrollParent.addEventListener('scroll', t.scrollHandler),
                  t.scrollHandler()
              }, 200)
            }
          },
          beforeDestroy: function() {
            this.removeScrollHandler()
          },
          methods: {
            getCodeAreaHeight: function() {
              return this.$el.getElementsByClassName('description').length > 0
                ? this.$el.getElementsByClassName('description')[0].clientHeight +
                    this.$el.getElementsByClassName('highlight')[0].clientHeight +
                    20
                : this.$el.getElementsByClassName('highlight')[0].clientHeight
            },
            setCodeAreaHeight: function() {
              this.codeArea.style.height = this.isExpanded
                ? ''.concat(this.getCodeAreaHeight() + 1, 'px')
                : '0'
            },
            copyCode: function() {
              var e = this.$el.querySelectorAll('pre')[0]
              e.setAttribute('contenteditable', 'true'),
                e.focus(),
                document.execCommand('selectAll', !1, null),
                document.execCommand('copy')
                  ? (e.removeAttribute('contenteditable'), this.$message.success('复制成功！'))
                  : this.$message.error('复制失败！')
            },
            scrollHandler: function() {
              var e = this.$refs.meta.getBoundingClientRect(),
                t = e.top,
                o = e.bottom
              e.left
              this.fixedControl =
                o > document.documentElement.clientHeight &&
                t + 44 <= document.documentElement.clientHeight
            },
            removeScrollHandler: function() {
              this.scrollParent &&
                this.scrollParent.removeEventListener('scroll', this.scrollHandler)
            }
          }
        },
        s = (o(814), o(58)),
        i = Object(s.a)(
          n,
          function() {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t
            return o(
              'div',
              {
                staticClass: 'code-format',
                class: { hover: e.hovering, styleModule: e.isShowModule },
                on: {
                  mouseenter: function(t) {
                    e.hovering = !0
                  },
                  mouseleave: function(t) {
                    e.hovering = !1
                  }
                }
              },
              [
                o(
                  'div',
                  { staticClass: 'source', class: { source_height: e.sourceHeight } },
                  [e._t('source')],
                  2
                ),
                e._v(' '),
                o('div', { ref: 'meta', staticClass: 'meta' }, [
                  e.$slots.default
                    ? o('div', { staticClass: 'description' }, [e._t('default')], 2)
                    : e._e(),
                  e._v(' '),
                  o('div', { staticClass: 'highlight' }, [e._t('highlight')], 2)
                ]),
                e._v(' '),
                o(
                  'div',
                  {
                    ref: 'control',
                    staticClass: 'code-format-control',
                    class: { 'is-fixed': e.fixedControl },
                    on: {
                      click: function(t) {
                        e.isExpanded = !e.isExpanded
                      }
                    }
                  },
                  [
                    o('transition', { attrs: { name: 'arrow-slide' } }, [
                      o('i', { class: [e.iconClass, { hovering: e.hovering }] })
                    ]),
                    e._v(' '),
                    o('transition', { attrs: { name: 'text-slide' } }, [
                      o(
                        'span',
                        {
                          directives: [
                            {
                              name: 'show',
                              rawName: 'v-show',
                              value: e.hovering,
                              expression: 'hovering'
                            }
                          ]
                        },
                        [e._v(e._s(e.controlText))]
                      )
                    ]),
                    e._v(' '),
                    o(
                      'div',
                      { staticClass: 'control-button-container' },
                      [
                        o(
                          'el-button',
                          {
                            directives: [
                              {
                                name: 'show',
                                rawName: 'v-show',
                                value: e.isExpanded,
                                expression: 'isExpanded'
                              }
                            ],
                            ref: 'copyButton',
                            staticClass: 'control-button copy-button',
                            attrs: { size: 'small', type: 'text' },
                            on: {
                              click: function(t) {
                                return t.stopPropagation(), e.copyCode(t)
                              }
                            }
                          },
                          [e._v('复制代码')]
                        )
                      ],
                      1
                    )
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
      t.default = i.exports
    }
  }
])
