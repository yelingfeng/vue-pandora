;(window.webpackJsonp = window.webpackJsonp || []).push([
  [12, 14, 27, 28],
  {
    744: function(t, e, n) {
      'use strict'
      n.d(e, 'd', function() {
        return i
      }),
        n.d(e, 'a', function() {
          return a
        }),
        n.d(e, 'i', function() {
          return s
        }),
        n.d(e, 'f', function() {
          return u
        }),
        n.d(e, 'g', function() {
          return l
        }),
        n.d(e, 'h', function() {
          return c
        }),
        n.d(e, 'b', function() {
          return f
        }),
        n.d(e, 'e', function() {
          return p
        }),
        n.d(e, 'k', function() {
          return h
        }),
        n.d(e, 'l', function() {
          return d
        }),
        n.d(e, 'c', function() {
          return v
        }),
        n.d(e, 'j', function() {
          return g
        })
      n(48), n(101), n(292), n(136), n(77), n(293), n(193), n(100), n(11), n(60), n(59)
      var i = /#.*$/,
        r = /\.(md|html)$/,
        a = /\/$/,
        s = /^[a-z]+:/i
      function o(t) {
        return decodeURI(t)
          .replace(i, '')
          .replace(r, '')
      }
      function u(t) {
        return s.test(t)
      }
      function l(t) {
        return /^mailto:/.test(t)
      }
      function c(t) {
        return /^tel:/.test(t)
      }
      function f(t) {
        if (u(t)) return t
        var e = t.match(i),
          n = e ? e[0] : '',
          r = o(t)
        return a.test(r) ? t : r + '.html' + n
      }
      function p(t, e) {
        var n = decodeURIComponent(t.hash),
          r = (function(t) {
            var e = t.match(i)
            if (e) return e[0]
          })(e)
        return (!r || n === r) && o(t.path) === o(e)
      }
      function h(t, e, n) {
        if (u(e)) return { type: 'external', path: e }
        n &&
          (e = (function(t, e, n) {
            var i = t.charAt(0)
            if ('/' === i) return t
            if ('?' === i || '#' === i) return e + t
            var r = e.split('/')
            ;(n && r[r.length - 1]) || r.pop()
            for (var a = t.replace(/^\//, '').split('/'), s = 0; s < a.length; s++) {
              var o = a[s]
              '..' === o ? r.pop() : '.' !== o && r.push(o)
            }
            '' !== r[0] && r.unshift('')
            return r.join('/')
          })(e, n))
        for (var i = o(e), r = 0; r < t.length; r++)
          if (o(t[r].regularPath) === i)
            return Object.assign({}, t[r], { type: 'page', path: f(t[r].path) })
        return (
          console.error('[vuepress] No matching page found for sidebar item "'.concat(e, '"')), {}
        )
      }
      function d(t, e, n, i) {
        var r = n.pages,
          a = n.themeConfig,
          s = (i && a.locales && a.locales[i]) || a
        if ('auto' === (t.frontmatter.sidebar || s.sidebar || a.sidebar)) return m(t)
        var o = s.sidebar || a.sidebar
        if (o) {
          var u = (function(t, e) {
              if (Array.isArray(e)) return { base: '/', config: e }
              for (var n in e)
                if (0 === ((i = t), /(\.html|\/)$/.test(i) ? i : i + '/').indexOf(encodeURI(n)))
                  return { base: n, config: e[n] }
              var i
              return {}
            })(e, o),
            l = u.base,
            c = u.config
          return 'auto' === c
            ? m(t)
            : c
            ? c.map(function(t) {
                return (function t(e, n, i) {
                  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                  if ('string' == typeof e) return h(n, e, i)
                  if (Array.isArray(e)) return Object.assign(h(n, e[0], i), { title: e[1] })
                  var a = e.children || []
                  return 0 === a.length && e.path
                    ? Object.assign(h(n, e.path, i), { title: e.title })
                    : {
                        type: 'group',
                        path: e.path,
                        title: e.title,
                        sidebarDepth: e.sidebarDepth,
                        initialOpenGroupIndex: e.initialOpenGroupIndex,
                        children: a.map(function(e) {
                          return t(e, n, i, r + 1)
                        }),
                        collapsable: !1 !== e.collapsable
                      }
                })(t, r, l)
              })
            : []
        }
        return []
      }
      function m(t) {
        var e = v(t.headers || [])
        return [
          {
            type: 'group',
            collapsable: !1,
            title: t.title,
            path: null,
            children: e.map(function(e) {
              return {
                type: 'auto',
                title: e.title,
                basePath: t.path,
                path: t.path + '#' + e.slug,
                children: e.children || []
              }
            })
          }
        ]
      }
      function v(t) {
        var e
        return (
          (t = t.map(function(t) {
            return Object.assign({}, t)
          })).forEach(function(t) {
            2 === t.level ? (e = t) : e && (e.children || (e.children = [])).push(t)
          }),
          t.filter(function(t) {
            return 2 === t.level
          })
        )
      }
      function g(t) {
        return Object.assign(t, { type: t.items && t.items.length ? 'links' : 'link' })
      }
    },
    745: function(t, e, n) {},
    746: function(t, e, n) {
      'use strict'
      n.r(e)
      n(748), n(11), n(137)
      var i = n(744),
        r = {
          name: 'NavLink',
          props: { item: { required: !0 } },
          computed: {
            link: function() {
              return Object(i.b)(this.item.link)
            },
            exact: function() {
              var t = this
              return this.$site.locales
                ? Object.keys(this.$site.locales).some(function(e) {
                    return e === t.link
                  })
                : '/' === this.link
            },
            isNonHttpURI: function() {
              return Object(i.g)(this.link) || Object(i.h)(this.link)
            },
            isBlankTarget: function() {
              return '_blank' === this.target
            },
            isInternal: function() {
              return !Object(i.f)(this.link) && !this.isBlankTarget
            },
            target: function() {
              return this.isNonHttpURI
                ? null
                : this.item.target
                ? this.item.target
                : Object(i.f)(this.link)
                ? '_blank'
                : ''
            },
            rel: function() {
              return this.isNonHttpURI || !1 === this.item.rel
                ? null
                : this.item.rel
                ? this.item.rel
                : this.isBlankTarget
                ? 'noopener noreferrer'
                : null
            }
          },
          methods: {
            focusoutAction: function() {
              this.$emit('focusout')
            }
          }
        },
        a = n(58),
        s = Object(a.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return t.isInternal
              ? n(
                  'RouterLink',
                  {
                    staticClass: 'nav-link',
                    attrs: { to: t.link, exact: t.exact },
                    nativeOn: {
                      focusout: function(e) {
                        return t.focusoutAction(e)
                      }
                    }
                  },
                  [t._v('\n  ' + t._s(t.item.text) + '\n')]
                )
              : n(
                  'a',
                  {
                    staticClass: 'nav-link external',
                    attrs: { href: t.link, target: t.target, rel: t.rel },
                    on: { focusout: t.focusoutAction }
                  },
                  [
                    t._v('\n  ' + t._s(t.item.text) + '\n  '),
                    t.isBlankTarget ? n('OutboundLink') : t._e()
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
      e.default = s.exports
    },
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
        r = (n(749), n(58)),
        a = Object(r.a)(
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
      e.default = a.exports
    },
    748: function(t, e, n) {
      'use strict'
      var i = n(1),
        r = n(294)
      i(
        { target: 'String', proto: !0, forced: n(295)('link') },
        {
          link: function(t) {
            return r(this, 'a', 'href', t)
          }
        }
      )
    },
    749: function(t, e, n) {
      'use strict'
      n(745)
    },
    750: function(t, e, n) {},
    754: function(t, e, n) {},
    758: function(t, e, n) {
      'use strict'
      n(750)
    },
    762: function(t, e, n) {
      'use strict'
      n.r(e)
      var i = n(746),
        r = n(747),
        a = n(297),
        s = n.n(a),
        o = {
          name: 'DropdownLink',
          components: { NavLink: i.default, DropdownTransition: r.default },
          props: { item: { required: !0 } },
          data: function() {
            return { open: !1 }
          },
          computed: {
            dropdownAriaLabel: function() {
              return this.item.ariaLabel || this.item.text
            }
          },
          watch: {
            $route: function() {
              this.open = !1
            }
          },
          methods: {
            setOpen: function(t) {
              this.open = t
            },
            isLastItemOfArray: function(t, e) {
              return s()(e) === t
            },
            handleDropdown: function() {
              0 === event.detail && this.setOpen(!this.open)
            }
          }
        },
        u = (n(758), n(58)),
        l = Object(u.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              { staticClass: 'dropdown-wrapper', class: { open: t.open } },
              [
                n(
                  'button',
                  {
                    staticClass: 'dropdown-title',
                    attrs: { type: 'button', 'aria-label': t.dropdownAriaLabel },
                    on: { click: t.handleDropdown }
                  },
                  [
                    n('span', { staticClass: 'title' }, [t._v(t._s(t.item.text))]),
                    t._v(' '),
                    n('span', { staticClass: 'arrow down' })
                  ]
                ),
                t._v(' '),
                n(
                  'button',
                  {
                    staticClass: 'mobile-dropdown-title',
                    attrs: { type: 'button', 'aria-label': t.dropdownAriaLabel },
                    on: {
                      click: function(e) {
                        return t.setOpen(!t.open)
                      }
                    }
                  },
                  [
                    n('span', { staticClass: 'title' }, [t._v(t._s(t.item.text))]),
                    t._v(' '),
                    n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' })
                  ]
                ),
                t._v(' '),
                n('DropdownTransition', [
                  n(
                    'ul',
                    {
                      directives: [
                        { name: 'show', rawName: 'v-show', value: t.open, expression: 'open' }
                      ],
                      staticClass: 'nav-dropdown'
                    },
                    t._l(t.item.items, function(e, i) {
                      return n(
                        'li',
                        { key: e.link || i, staticClass: 'dropdown-item' },
                        [
                          'links' === e.type
                            ? n('h4', [t._v('\n          ' + t._s(e.text) + '\n        ')])
                            : t._e(),
                          t._v(' '),
                          'links' === e.type
                            ? n(
                                'ul',
                                { staticClass: 'dropdown-subitem-wrapper' },
                                t._l(e.items, function(i) {
                                  return n(
                                    'li',
                                    { key: i.link, staticClass: 'dropdown-subitem' },
                                    [
                                      n('NavLink', {
                                        attrs: { item: i },
                                        on: {
                                          focusout: function(n) {
                                            t.isLastItemOfArray(i, e.items) &&
                                              t.isLastItemOfArray(e, t.item.items) &&
                                              t.setOpen(!1)
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  )
                                }),
                                0
                              )
                            : n('NavLink', {
                                attrs: { item: e },
                                on: {
                                  focusout: function(n) {
                                    t.isLastItemOfArray(e, t.item.items) && t.setOpen(!1)
                                  }
                                }
                              })
                        ],
                        1
                      )
                    }),
                    0
                  )
                ])
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
      e.default = l.exports
    },
    765: function(t, e, n) {
      'use strict'
      n(754)
    },
    775: function(t, e, n) {
      'use strict'
      n.r(e)
      var i = n(98),
        r =
          (n(137),
          n(100),
          n(48),
          n(101),
          n(11),
          n(195),
          n(136),
          n(292),
          n(298),
          n(299),
          n(300),
          n(196),
          n(762)),
        a = n(744),
        s = {
          name: 'NavLinks',
          components: { NavLink: n(746).default, DropdownLink: r.default },
          computed: {
            userNav: function() {
              return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
            },
            nav: function() {
              var t = this,
                e = this.$site.locales
              if (e && Object.keys(e).length > 1) {
                var n = this.$page.path,
                  r = this.$router.options.routes,
                  a = this.$site.themeConfig.locales || {},
                  s = {
                    text: this.$themeLocaleConfig.selectText || 'Languages',
                    ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
                    items: Object.keys(e).map(function(i) {
                      var s,
                        o = e[i],
                        u = (a[i] && a[i].label) || o.lang
                      return (
                        o.lang === t.$lang
                          ? (s = n)
                          : ((s = n.replace(t.$localeConfig.path, i)),
                            r.some(function(t) {
                              return t.path === s
                            }) || (s = i)),
                        { text: u, link: s }
                      )
                    })
                  }
                return [].concat(Object(i.a)(this.userNav), [s])
              }
              return this.userNav
            },
            userLinks: function() {
              return (this.nav || []).map(function(t) {
                return Object.assign(Object(a.j)(t), { items: (t.items || []).map(a.j) })
              })
            },
            repoLink: function() {
              var t = this.$site.themeConfig.repo
              return t ? (/^https?:/.test(t) ? t : 'https://github.com/'.concat(t)) : null
            },
            repoLabel: function() {
              if (this.repoLink) {
                if (this.$site.themeConfig.repoLabel) return this.$site.themeConfig.repoLabel
                for (
                  var t = this.repoLink.match(/^https?:\/\/[^/]+/)[0],
                    e = ['GitHub', 'GitLab', 'Bitbucket'],
                    n = 0;
                  n < e.length;
                  n++
                ) {
                  var i = e[n]
                  if (new RegExp(i, 'i').test(t)) return i
                }
                return 'Source'
              }
            }
          }
        },
        o = (n(765), n(58)),
        u = Object(o.a)(
          s,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return t.userLinks.length || t.repoLink
              ? n(
                  'nav',
                  { staticClass: 'nav-links' },
                  [
                    t._l(t.userLinks, function(t) {
                      return n(
                        'div',
                        { key: t.link, staticClass: 'nav-item' },
                        [
                          'links' === t.type
                            ? n('DropdownLink', { attrs: { item: t } })
                            : n('NavLink', { attrs: { item: t } })
                        ],
                        1
                      )
                    }),
                    t._v(' '),
                    t.repoLink
                      ? n(
                          'a',
                          {
                            staticClass: 'repo-link',
                            attrs: {
                              href: t.repoLink,
                              target: '_blank',
                              rel: 'noopener noreferrer'
                            }
                          },
                          [t._v('\n    ' + t._s(t.repoLabel) + '\n    '), n('OutboundLink')],
                          1
                        )
                      : t._e()
                  ],
                  2
                )
              : t._e()
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = u.exports
    }
  }
])
