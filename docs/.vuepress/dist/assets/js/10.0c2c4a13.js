;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10, 3, 12, 14, 18, 27, 28],
  {
    744: function(t, e, n) {
      'use strict'
      n.d(e, 'd', function() {
        return i
      }),
        n.d(e, 'a', function() {
          return s
        }),
        n.d(e, 'i', function() {
          return a
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
          return p
        }),
        n.d(e, 'e', function() {
          return h
        }),
        n.d(e, 'k', function() {
          return f
        }),
        n.d(e, 'l', function() {
          return d
        }),
        n.d(e, 'c', function() {
          return b
        }),
        n.d(e, 'j', function() {
          return v
        })
      n(48), n(101), n(292), n(136), n(77), n(293), n(193), n(100), n(11), n(60), n(59)
      var i = /#.*$/,
        r = /\.(md|html)$/,
        s = /\/$/,
        a = /^[a-z]+:/i
      function o(t) {
        return decodeURI(t)
          .replace(i, '')
          .replace(r, '')
      }
      function u(t) {
        return a.test(t)
      }
      function l(t) {
        return /^mailto:/.test(t)
      }
      function c(t) {
        return /^tel:/.test(t)
      }
      function p(t) {
        if (u(t)) return t
        var e = t.match(i),
          n = e ? e[0] : '',
          r = o(t)
        return s.test(r) ? t : r + '.html' + n
      }
      function h(t, e) {
        var n = decodeURIComponent(t.hash),
          r = (function(t) {
            var e = t.match(i)
            if (e) return e[0]
          })(e)
        return (!r || n === r) && o(t.path) === o(e)
      }
      function f(t, e, n) {
        if (u(e)) return { type: 'external', path: e }
        n &&
          (e = (function(t, e, n) {
            var i = t.charAt(0)
            if ('/' === i) return t
            if ('?' === i || '#' === i) return e + t
            var r = e.split('/')
            ;(n && r[r.length - 1]) || r.pop()
            for (var s = t.replace(/^\//, '').split('/'), a = 0; a < s.length; a++) {
              var o = s[a]
              '..' === o ? r.pop() : '.' !== o && r.push(o)
            }
            '' !== r[0] && r.unshift('')
            return r.join('/')
          })(e, n))
        for (var i = o(e), r = 0; r < t.length; r++)
          if (o(t[r].regularPath) === i)
            return Object.assign({}, t[r], { type: 'page', path: p(t[r].path) })
        return (
          console.error('[vuepress] No matching page found for sidebar item "'.concat(e, '"')), {}
        )
      }
      function d(t, e, n, i) {
        var r = n.pages,
          s = n.themeConfig,
          a = (i && s.locales && s.locales[i]) || s
        if ('auto' === (t.frontmatter.sidebar || a.sidebar || s.sidebar)) return m(t)
        var o = a.sidebar || s.sidebar
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
                  if ('string' == typeof e) return f(n, e, i)
                  if (Array.isArray(e)) return Object.assign(f(n, e[0], i), { title: e[1] })
                  var s = e.children || []
                  return 0 === s.length && e.path
                    ? Object.assign(f(n, e.path, i), { title: e.title })
                    : {
                        type: 'group',
                        path: e.path,
                        title: e.title,
                        sidebarDepth: e.sidebarDepth,
                        initialOpenGroupIndex: e.initialOpenGroupIndex,
                        children: s.map(function(e) {
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
        var e = b(t.headers || [])
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
      function b(t) {
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
      function v(t) {
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
        s = n(58),
        a = Object(s.a)(
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
      e.default = a.exports
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
        s = Object(r.a)(
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
      e.default = s.exports
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
    751: function(t, e, n) {},
    754: function(t, e, n) {},
    757: function(t, e, n) {},
    758: function(t, e, n) {
      'use strict'
      n(750)
    },
    759: function(t, e, n) {
      'use strict'
      n(751)
    },
    761: function(t, e, n) {
      'use strict'
      n.r(e)
      n(11)
      var i = n(776),
        r = n(763),
        s = n(744)
      function a(t, e) {
        if ('group' === e.type) {
          var n = e.path && Object(s.e)(t, e.path),
            i = e.children.some(function(e) {
              return 'group' === e.type ? a(t, e) : 'page' === e.type && Object(s.e)(t, e.path)
            })
          return n || i
        }
        return !1
      }
      var o = {
          name: 'SidebarLinks',
          components: { SidebarGroup: i.default, SidebarLink: r.default },
          props: ['items', 'depth', 'sidebarDepth', 'initialOpenGroupIndex'],
          data: function() {
            return { openGroupIndex: this.initialOpenGroupIndex || 0 }
          },
          watch: {
            $route: function() {
              this.refreshIndex()
            }
          },
          created: function() {
            this.refreshIndex()
          },
          methods: {
            refreshIndex: function() {
              var t = (function(t, e) {
                for (var n = 0; n < e.length; n++) {
                  var i = e[n]
                  if (a(t, i)) return n
                }
                return -1
              })(this.$route, this.items)
              t > -1 && (this.openGroupIndex = t)
            },
            toggleGroup: function(t) {
              this.openGroupIndex = t === this.openGroupIndex ? -1 : t
            },
            isActive: function(t) {
              return Object(s.e)(this.$route, t.regularPath)
            }
          }
        },
        u = n(58),
        l = Object(u.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return t.items.length
              ? n(
                  'ul',
                  { staticClass: 'sidebar-links' },
                  t._l(t.items, function(e, i) {
                    return n(
                      'li',
                      { key: i },
                      [
                        'group' === e.type
                          ? n('SidebarGroup', {
                              attrs: {
                                item: e,
                                open: i === t.openGroupIndex,
                                collapsable: e.collapsable || e.collapsible,
                                depth: t.depth
                              },
                              on: {
                                toggle: function(e) {
                                  return t.toggleGroup(i)
                                }
                              }
                            })
                          : n('SidebarLink', {
                              attrs: { 'sidebar-depth': t.sidebarDepth, item: e }
                            })
                      ],
                      1
                    )
                  }),
                  0
                )
              : t._e()
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = l.exports
    },
    762: function(t, e, n) {
      'use strict'
      n.r(e)
      var i = n(746),
        r = n(747),
        s = n(297),
        a = n.n(s),
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
              return a()(e) === t
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
    763: function(t, e, n) {
      'use strict'
      n.r(e)
      n(11), n(301), n(48), n(136), n(100)
      var i = n(744)
      function r(t, e, n, i, r) {
        var s = {
          props: { to: e, activeClass: '', exactActiveClass: '' },
          class: { active: i, 'sidebar-link': !0 }
        }
        return r > 2 && (s.style = { 'padding-left': r + 'rem' }), t('RouterLink', s, n)
      }
      function s(t, e, n, a, o) {
        var u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1
        return !e || u > o
          ? null
          : t(
              'ul',
              { class: 'sidebar-sub-headers' },
              e.map(function(e) {
                var l = Object(i.e)(a, n + '#' + e.slug)
                return t('li', { class: 'sidebar-sub-header' }, [
                  r(t, n + '#' + e.slug, e.title, l, e.level - 1),
                  s(t, e.children, n, a, o, u + 1)
                ])
              })
            )
      }
      var a = {
          functional: !0,
          props: ['item', 'sidebarDepth'],
          render: function(t, e) {
            var n = e.parent,
              a = n.$page,
              o = (n.$site, n.$route),
              u = n.$themeConfig,
              l = n.$themeLocaleConfig,
              c = e.props,
              p = c.item,
              h = c.sidebarDepth,
              f = Object(i.e)(o, p.path),
              d =
                'auto' === p.type
                  ? f ||
                    p.children.some(function(t) {
                      return Object(i.e)(o, p.basePath + '#' + t.slug)
                    })
                  : f,
              m =
                'external' === p.type
                  ? (function(t, e, n) {
                      return t(
                        'a',
                        {
                          attrs: { href: e, target: '_blank', rel: 'noopener noreferrer' },
                          class: { 'sidebar-link': !0 }
                        },
                        [n, t('OutboundLink')]
                      )
                    })(t, p.path, p.title || p.path)
                  : r(t, p.path, p.title || p.path, d),
              b = [a.frontmatter.sidebarDepth, h, l.sidebarDepth, u.sidebarDepth, 1].find(function(
                t
              ) {
                return void 0 !== t
              }),
              v = l.displayAllHeaders || u.displayAllHeaders
            return 'auto' === p.type
              ? [m, s(t, p.children, p.basePath, o, b)]
              : (d || v) && p.headers && !i.d.test(p.path)
              ? [m, s(t, Object(i.c)(p.headers), p.path, o, b)]
              : m
          }
        },
        o = (n(759), n(58)),
        u = Object(o.a)(a, void 0, void 0, !1, null, null, null)
      e.default = u.exports
    },
    765: function(t, e, n) {
      'use strict'
      n(754)
    },
    771: function(t, e, n) {
      'use strict'
      n(757)
    },
    772: function(t, e, n) {},
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
        s = n(744),
        a = {
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
                  s = this.$site.themeConfig.locales || {},
                  a = {
                    text: this.$themeLocaleConfig.selectText || 'Languages',
                    ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
                    items: Object.keys(e).map(function(i) {
                      var a,
                        o = e[i],
                        u = (s[i] && s[i].label) || o.lang
                      return (
                        o.lang === t.$lang
                          ? (a = n)
                          : ((a = n.replace(t.$localeConfig.path, i)),
                            r.some(function(t) {
                              return t.path === a
                            }) || (a = i)),
                        { text: u, link: a }
                      )
                    })
                  }
                return [].concat(Object(i.a)(this.userNav), [a])
              }
              return this.userNav
            },
            userLinks: function() {
              return (this.nav || []).map(function(t) {
                return Object.assign(Object(s.j)(t), { items: (t.items || []).map(s.j) })
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
          a,
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
    },
    776: function(t, e, n) {
      'use strict'
      n.r(e)
      var i = n(744),
        r = {
          name: 'SidebarGroup',
          components: { DropdownTransition: n(747).default },
          props: ['item', 'open', 'collapsable', 'depth'],
          beforeCreate: function() {
            this.$options.components.SidebarLinks = n(761).default
          },
          methods: { isActive: i.e }
        },
        s = (n(771), n(58)),
        a = Object(s.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'section',
              {
                staticClass: 'sidebar-group',
                class: [
                  { collapsable: t.collapsable, 'is-sub-group': 0 !== t.depth },
                  'depth-' + t.depth
                ]
              },
              [
                t.item.path
                  ? n(
                      'RouterLink',
                      {
                        staticClass: 'sidebar-heading clickable',
                        class: { open: t.open, active: t.isActive(t.$route, t.item.path) },
                        attrs: { to: t.item.path },
                        nativeOn: {
                          click: function(e) {
                            return t.$emit('toggle')
                          }
                        }
                      },
                      [
                        n('span', [t._v(t._s(t.item.title))]),
                        t._v(' '),
                        t.collapsable
                          ? n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' })
                          : t._e()
                      ]
                    )
                  : n(
                      'p',
                      {
                        staticClass: 'sidebar-heading',
                        class: { open: t.open },
                        on: {
                          click: function(e) {
                            return t.$emit('toggle')
                          }
                        }
                      },
                      [
                        n('span', [t._v(t._s(t.item.title))]),
                        t._v(' '),
                        t.collapsable
                          ? n('span', { staticClass: 'arrow', class: t.open ? 'down' : 'right' })
                          : t._e()
                      ]
                    ),
                t._v(' '),
                n(
                  'DropdownTransition',
                  [
                    t.open || !t.collapsable
                      ? n('SidebarLinks', {
                          staticClass: 'sidebar-group-items',
                          attrs: {
                            items: t.item.children,
                            'sidebar-depth': t.item.sidebarDepth,
                            'initial-open-group-index': t.item.initialOpenGroupIndex,
                            depth: t.depth + 1
                          }
                        })
                      : t._e()
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
      e.default = a.exports
    },
    782: function(t, e, n) {
      'use strict'
      n(772)
    },
    798: function(t, e, n) {
      'use strict'
      n.r(e)
      var i = n(761),
        r = n(775),
        s = {
          name: 'Sidebar',
          components: { SidebarLinks: i.default, NavLinks: r.default },
          props: ['items']
        },
        a = (n(782), n(58)),
        o = Object(a.a)(
          s,
          function() {
            var t = this.$createElement,
              e = this._self._c || t
            return e(
              'aside',
              { staticClass: 'sidebar' },
              [
                e('NavLinks'),
                this._v(' '),
                this._t('top'),
                this._v(' '),
                e('SidebarLinks', { attrs: { depth: 0, items: this.items } }),
                this._v(' '),
                this._t('bottom')
              ],
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
    }
  }
])
