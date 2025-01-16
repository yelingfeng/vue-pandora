;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    751: function(t, e, n) {},
    753: function(t, e) {
      t.exports = function(t) {
        return null == t
      }
    },
    755: function(t, e, n) {},
    756: function(t, e, n) {},
    757: function(t, e, n) {},
    759: function(t, e, n) {
      'use strict'
      n(751)
    },
    761: function(t, e, n) {
      'use strict'
      n.r(e)
      n(11)
      var a = n(776),
        i = n(763),
        r = n(744)
      function s(t, e) {
        if ('group' === e.type) {
          var n = e.path && Object(r.e)(t, e.path),
            a = e.children.some(function(e) {
              return 'group' === e.type ? s(t, e) : 'page' === e.type && Object(r.e)(t, e.path)
            })
          return n || a
        }
        return !1
      }
      var o = {
          name: 'SidebarLinks',
          components: { SidebarGroup: a.default, SidebarLink: i.default },
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
                  var a = e[n]
                  if (s(t, a)) return n
                }
                return -1
              })(this.$route, this.items)
              t > -1 && (this.openGroupIndex = t)
            },
            toggleGroup: function(t) {
              this.openGroupIndex = t === this.openGroupIndex ? -1 : t
            },
            isActive: function(t) {
              return Object(r.e)(this.$route, t.regularPath)
            }
          }
        },
        l = n(58),
        u = Object(l.a)(
          o,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return t.items.length
              ? n(
                  'ul',
                  { staticClass: 'sidebar-links' },
                  t._l(t.items, function(e, a) {
                    return n(
                      'li',
                      { key: a },
                      [
                        'group' === e.type
                          ? n('SidebarGroup', {
                              attrs: {
                                item: e,
                                open: a === t.openGroupIndex,
                                collapsable: e.collapsable || e.collapsible,
                                depth: t.depth
                              },
                              on: {
                                toggle: function(e) {
                                  return t.toggleGroup(a)
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
      e.default = u.exports
    },
    763: function(t, e, n) {
      'use strict'
      n.r(e)
      n(11), n(301), n(48), n(136), n(100)
      var a = n(744)
      function i(t, e, n, a, i) {
        var r = {
          props: { to: e, activeClass: '', exactActiveClass: '' },
          class: { active: a, 'sidebar-link': !0 }
        }
        return i > 2 && (r.style = { 'padding-left': i + 'rem' }), t('RouterLink', r, n)
      }
      function r(t, e, n, s, o) {
        var l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1
        return !e || l > o
          ? null
          : t(
              'ul',
              { class: 'sidebar-sub-headers' },
              e.map(function(e) {
                var u = Object(a.e)(s, n + '#' + e.slug)
                return t('li', { class: 'sidebar-sub-header' }, [
                  i(t, n + '#' + e.slug, e.title, u, e.level - 1),
                  r(t, e.children, n, s, o, l + 1)
                ])
              })
            )
      }
      var s = {
          functional: !0,
          props: ['item', 'sidebarDepth'],
          render: function(t, e) {
            var n = e.parent,
              s = n.$page,
              o = (n.$site, n.$route),
              l = n.$themeConfig,
              u = n.$themeLocaleConfig,
              c = e.props,
              d = c.item,
              p = c.sidebarDepth,
              h = Object(a.e)(o, d.path),
              f =
                'auto' === d.type
                  ? h ||
                    d.children.some(function(t) {
                      return Object(a.e)(o, d.basePath + '#' + t.slug)
                    })
                  : h,
              v =
                'external' === d.type
                  ? (function(t, e, n) {
                      return t(
                        'a',
                        {
                          attrs: { href: e, target: '_blank', rel: 'noopener noreferrer' },
                          class: { 'sidebar-link': !0 }
                        },
                        [n, t('OutboundLink')]
                      )
                    })(t, d.path, d.title || d.path)
                  : i(t, d.path, d.title || d.path, f),
              b = [s.frontmatter.sidebarDepth, p, u.sidebarDepth, l.sidebarDepth, 1].find(function(
                t
              ) {
                return void 0 !== t
              }),
              g = u.displayAllHeaders || l.displayAllHeaders
            return 'auto' === d.type
              ? [v, r(t, d.children, d.basePath, o, b)]
              : (f || g) && d.headers && !a.d.test(d.path)
              ? [v, r(t, Object(a.c)(d.headers), d.path, o, b)]
              : v
          }
        },
        o = (n(759), n(58)),
        l = Object(o.a)(s, void 0, void 0, !1, null, null, null)
      e.default = l.exports
    },
    764: function(t, e, n) {},
    767: function(t, e, n) {
      'use strict'
      n(755)
    },
    768: function(t, e, n) {
      var a = n(78),
        i = n(38),
        r = n(63)
      t.exports = function(t) {
        return 'string' == typeof t || (!i(t) && r(t) && '[object String]' == a(t))
      }
    },
    769: function(t, e, n) {
      'use strict'
      n(756)
    },
    770: function(t, e, n) {},
    771: function(t, e, n) {
      'use strict'
      n(757)
    },
    772: function(t, e, n) {},
    776: function(t, e, n) {
      'use strict'
      n.r(e)
      var a = n(744),
        i = {
          name: 'SidebarGroup',
          components: { DropdownTransition: n(747).default },
          props: ['item', 'open', 'collapsable', 'depth'],
          beforeCreate: function() {
            this.$options.components.SidebarLinks = n(761).default
          },
          methods: { isActive: a.e }
        },
        r = (n(771), n(58)),
        s = Object(r.a)(
          i,
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
      e.default = s.exports
    },
    777: function(t, e, n) {
      'use strict'
      n.r(e)
      n(48), n(136), n(101)
      var a = n(753),
        i = n.n(a),
        r = n(744),
        s = {
          name: 'PageEdit',
          computed: {
            lastUpdated: function() {
              return this.$page.lastUpdated
            },
            lastUpdatedText: function() {
              return 'string' == typeof this.$themeLocaleConfig.lastUpdated
                ? this.$themeLocaleConfig.lastUpdated
                : 'string' == typeof this.$site.themeConfig.lastUpdated
                ? this.$site.themeConfig.lastUpdated
                : 'Last Updated'
            },
            editLink: function() {
              var t = i()(this.$page.frontmatter.editLink)
                  ? this.$site.themeConfig.editLinks
                  : this.$page.frontmatter.editLink,
                e = this.$site.themeConfig,
                n = e.repo,
                a = e.docsDir,
                r = void 0 === a ? '' : a,
                s = e.docsBranch,
                o = void 0 === s ? 'master' : s,
                l = e.docsRepo,
                u = void 0 === l ? n : l
              return t && u && this.$page.relativePath
                ? this.createEditLink(n, u, r, o, this.$page.relativePath)
                : null
            },
            editLinkText: function() {
              return (
                this.$themeLocaleConfig.editLinkText ||
                this.$site.themeConfig.editLinkText ||
                'Edit this page'
              )
            }
          },
          methods: {
            createEditLink: function(t, e, n, a, i) {
              if (/bitbucket.org/.test(e))
                return (
                  e.replace(r.a, '') +
                  '/src' +
                  '/'.concat(a, '/') +
                  (n ? n.replace(r.a, '') + '/' : '') +
                  i +
                  '?mode=edit&spa=0&at='.concat(a, '&fileviewer=file-view-default')
                )
              return /gitlab.com/.test(e)
                ? e.replace(r.a, '') +
                    '/-/edit' +
                    '/'.concat(a, '/') +
                    (n ? n.replace(r.a, '') + '/' : '') +
                    i
                : (r.i.test(e) ? e : 'https://github.com/'.concat(e)).replace(r.a, '') +
                    '/edit' +
                    '/'.concat(a, '/') +
                    (n ? n.replace(r.a, '') + '/' : '') +
                    i
            }
          }
        },
        o = (n(767), n(58)),
        l = Object(o.a)(
          s,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('footer', { staticClass: 'page-edit' }, [
              t.editLink
                ? n(
                    'div',
                    { staticClass: 'edit-link' },
                    [
                      n(
                        'a',
                        {
                          attrs: { href: t.editLink, target: '_blank', rel: 'noopener noreferrer' }
                        },
                        [t._v(t._s(t.editLinkText))]
                      ),
                      t._v(' '),
                      n('OutboundLink')
                    ],
                    1
                  )
                : t._e(),
              t._v(' '),
              t.lastUpdated
                ? n('div', { staticClass: 'last-updated' }, [
                    n('span', { staticClass: 'prefix' }, [t._v(t._s(t.lastUpdatedText) + ':')]),
                    t._v(' '),
                    n('span', { staticClass: 'time' }, [t._v(t._s(t.lastUpdated))])
                  ])
                : t._e()
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = l.exports
    },
    778: function(t, e, n) {
      'use strict'
      n.r(e)
      n(77)
      var a = n(744),
        i = n(768),
        r = n.n(i),
        s = n(753),
        o = n.n(s),
        l = {
          name: 'PageNav',
          props: ['sidebarItems'],
          computed: {
            prev: function() {
              return c(u.PREV, this)
            },
            next: function() {
              return c(u.NEXT, this)
            }
          }
        }
      var u = {
        NEXT: {
          resolveLink: function(t, e) {
            return d(t, e, 1)
          },
          getThemeLinkConfig: function(t) {
            return t.nextLinks
          },
          getPageLinkConfig: function(t) {
            return t.frontmatter.next
          }
        },
        PREV: {
          resolveLink: function(t, e) {
            return d(t, e, -1)
          },
          getThemeLinkConfig: function(t) {
            return t.prevLinks
          },
          getPageLinkConfig: function(t) {
            return t.frontmatter.prev
          }
        }
      }
      function c(t, e) {
        var n = e.$themeConfig,
          i = e.$page,
          s = e.$route,
          l = e.$site,
          u = e.sidebarItems,
          c = t.resolveLink,
          d = t.getThemeLinkConfig,
          p = t.getPageLinkConfig,
          h = d(n),
          f = p(i),
          v = o()(f) ? h : f
        return !1 === v ? void 0 : r()(v) ? Object(a.k)(l.pages, v, s.path) : c(i, u)
      }
      function d(t, e, n) {
        var a = []
        !(function t(e, n) {
          for (var a = 0, i = e.length; a < i; a++)
            'group' === e[a].type ? t(e[a].children || [], n) : n.push(e[a])
        })(e, a)
        for (var i = 0; i < a.length; i++) {
          var r = a[i]
          if ('page' === r.type && r.path === decodeURIComponent(t.path)) return a[i + n]
        }
      }
      var p = l,
        h = (n(769), n(58)),
        f = Object(h.a)(
          p,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return t.prev || t.next
              ? n('div', { staticClass: 'page-nav' }, [
                  n('p', { staticClass: 'inner' }, [
                    t.prev
                      ? n(
                          'span',
                          { staticClass: 'prev' },
                          [
                            t._v('\n      ←\n      '),
                            'external' === t.prev.type
                              ? n(
                                  'a',
                                  {
                                    staticClass: 'prev',
                                    attrs: {
                                      href: t.prev.path,
                                      target: '_blank',
                                      rel: 'noopener noreferrer'
                                    }
                                  },
                                  [
                                    t._v(
                                      '\n        ' +
                                        t._s(t.prev.title || t.prev.path) +
                                        '\n\n        '
                                    ),
                                    n('OutboundLink')
                                  ],
                                  1
                                )
                              : n(
                                  'RouterLink',
                                  { staticClass: 'prev', attrs: { to: t.prev.path } },
                                  [
                                    t._v(
                                      '\n        ' + t._s(t.prev.title || t.prev.path) + '\n      '
                                    )
                                  ]
                                )
                          ],
                          1
                        )
                      : t._e(),
                    t._v(' '),
                    t.next
                      ? n(
                          'span',
                          { staticClass: 'next' },
                          [
                            'external' === t.next.type
                              ? n(
                                  'a',
                                  {
                                    attrs: {
                                      href: t.next.path,
                                      target: '_blank',
                                      rel: 'noopener noreferrer'
                                    }
                                  },
                                  [
                                    t._v(
                                      '\n        ' +
                                        t._s(t.next.title || t.next.path) +
                                        '\n\n        '
                                    ),
                                    n('OutboundLink')
                                  ],
                                  1
                                )
                              : n('RouterLink', { attrs: { to: t.next.path } }, [
                                  t._v(
                                    '\n        ' + t._s(t.next.title || t.next.path) + '\n      '
                                  )
                                ]),
                            t._v('\n      →\n    ')
                          ],
                          1
                        )
                      : t._e()
                  ])
                ])
              : t._e()
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = f.exports
    },
    779: function(t, e, n) {
      'use strict'
      n(764)
    },
    781: function(t, e, n) {
      'use strict'
      n(770)
    },
    782: function(t, e, n) {
      'use strict'
      n(772)
    },
    796: function(t, e, n) {
      'use strict'
      n.r(e)
      var a = {
          name: 'Home',
          components: { NavLink: n(746).default },
          computed: {
            data: function() {
              return this.$page.frontmatter
            },
            actionLink: function() {
              return { link: this.data.actionLink, text: this.data.actionText }
            }
          }
        },
        i = (n(779), n(58)),
        r = Object(i.a)(
          a,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'main',
              {
                staticClass: 'home',
                attrs: { 'aria-labelledby': null !== t.data.heroText ? 'main-title' : null }
              },
              [
                n('header', { staticClass: 'hero' }, [
                  t.data.heroImage
                    ? n('img', {
                        attrs: { src: t.$withBase(t.data.heroImage), alt: t.data.heroAlt || 'hero' }
                      })
                    : t._e(),
                  t._v(' '),
                  null !== t.data.heroText
                    ? n('h1', { attrs: { id: 'main-title' } }, [
                        t._v('\n      ' + t._s(t.data.heroText || t.$title || 'Hello') + '\n    ')
                      ])
                    : t._e(),
                  t._v(' '),
                  null !== t.data.tagline
                    ? n('p', { staticClass: 'description' }, [
                        t._v(
                          '\n      ' +
                            t._s(
                              t.data.tagline || t.$description || 'Welcome to your VuePress site'
                            ) +
                            '\n    '
                        )
                      ])
                    : t._e(),
                  t._v(' '),
                  t.data.actionText && t.data.actionLink
                    ? n(
                        'p',
                        { staticClass: 'action' },
                        [
                          n('NavLink', {
                            staticClass: 'action-button',
                            attrs: { item: t.actionLink }
                          })
                        ],
                        1
                      )
                    : t._e()
                ]),
                t._v(' '),
                t.data.features && t.data.features.length
                  ? n(
                      'div',
                      { staticClass: 'features' },
                      t._l(t.data.features, function(e, a) {
                        return n('div', { key: a, staticClass: 'feature' }, [
                          n('h2', [t._v(t._s(e.title))]),
                          t._v(' '),
                          n('p', [t._v(t._s(e.details))])
                        ])
                      }),
                      0
                    )
                  : t._e(),
                t._v(' '),
                n('Content', { staticClass: 'theme-default-content custom' }),
                t._v(' '),
                t.data.footer
                  ? n('div', { staticClass: 'footer' }, [
                      t._v('\n    ' + t._s(t.data.footer) + '\n  ')
                    ])
                  : n('Content', { staticClass: 'footer', attrs: { 'slot-key': 'footer' } })
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
      e.default = r.exports
    },
    797: function(t, e, n) {
      'use strict'
      n.r(e)
      var a = n(777),
        i = n(778),
        r = { components: { PageEdit: a.default, PageNav: i.default }, props: ['sidebarItems'] },
        s = (n(781), n(58)),
        o = Object(s.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'main',
              { staticClass: 'page' },
              [
                t._t('top'),
                t._v(' '),
                n('Content', { staticClass: 'theme-default-content' }),
                t._v(' '),
                n('PageEdit'),
                t._v(' '),
                n('PageNav', t._b({}, 'PageNav', { sidebarItems: t.sidebarItems }, !1)),
                t._v(' '),
                t._t('bottom')
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
    },
    798: function(t, e, n) {
      'use strict'
      n.r(e)
      var a = n(761),
        i = n(775),
        r = {
          name: 'Sidebar',
          components: { SidebarLinks: a.default, NavLinks: i.default },
          props: ['items']
        },
        s = (n(782), n(58)),
        o = Object(s.a)(
          r,
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
    },
    824: function(t, e, n) {
      'use strict'
      n.r(e)
      var a = n(796),
        i = n(817),
        r = n(797),
        s = n(798),
        o = n(744),
        l = {
          name: 'Layout',
          components: { Home: a.default, Page: r.default, Sidebar: s.default, Navbar: i.default },
          data: function() {
            return { isSidebarOpen: !1 }
          },
          computed: {
            shouldShowNavbar: function() {
              var t = this.$site.themeConfig
              return (
                !1 !== this.$page.frontmatter.navbar &&
                !1 !== t.navbar &&
                (this.$title || t.logo || t.repo || t.nav || this.$themeLocaleConfig.nav)
              )
            },
            shouldShowSidebar: function() {
              var t = this.$page.frontmatter
              return !t.home && !1 !== t.sidebar && this.sidebarItems.length
            },
            sidebarItems: function() {
              return Object(o.l)(this.$page, this.$page.regularPath, this.$site, this.$localePath)
            },
            pageClasses: function() {
              var t = this.$page.frontmatter.pageClass
              return [
                {
                  'no-navbar': !this.shouldShowNavbar,
                  'sidebar-open': this.isSidebarOpen,
                  'no-sidebar': !this.shouldShowSidebar
                },
                t
              ]
            }
          },
          mounted: function() {
            var t = this
            this.$router.afterEach(function() {
              t.isSidebarOpen = !1
            })
          },
          methods: {
            toggleSidebar: function(t) {
              ;(this.isSidebarOpen = 'boolean' == typeof t ? t : !this.isSidebarOpen),
                this.$emit('toggle-sidebar', this.isSidebarOpen)
            },
            onTouchStart: function(t) {
              this.touchStart = { x: t.changedTouches[0].clientX, y: t.changedTouches[0].clientY }
            },
            onTouchEnd: function(t) {
              var e = t.changedTouches[0].clientX - this.touchStart.x,
                n = t.changedTouches[0].clientY - this.touchStart.y
              Math.abs(e) > Math.abs(n) &&
                Math.abs(e) > 40 &&
                (e > 0 && this.touchStart.x <= 80 ? this.toggleSidebar(!0) : this.toggleSidebar(!1))
            }
          }
        },
        u = n(58),
        c = Object(u.a)(
          l,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              {
                staticClass: 'theme-container',
                class: t.pageClasses,
                on: { touchstart: t.onTouchStart, touchend: t.onTouchEnd }
              },
              [
                t.shouldShowNavbar
                  ? n('Navbar', { on: { 'toggle-sidebar': t.toggleSidebar } })
                  : t._e(),
                t._v(' '),
                n('div', {
                  staticClass: 'sidebar-mask',
                  on: {
                    click: function(e) {
                      return t.toggleSidebar(!1)
                    }
                  }
                }),
                t._v(' '),
                n('Sidebar', {
                  attrs: { items: t.sidebarItems },
                  on: { 'toggle-sidebar': t.toggleSidebar },
                  scopedSlots: t._u(
                    [
                      {
                        key: 'top',
                        fn: function() {
                          return [t._t('sidebar-top')]
                        },
                        proxy: !0
                      },
                      {
                        key: 'bottom',
                        fn: function() {
                          return [t._t('sidebar-bottom')]
                        },
                        proxy: !0
                      }
                    ],
                    null,
                    !0
                  )
                }),
                t._v(' '),
                t.$page.frontmatter.home
                  ? n('Home')
                  : n('Page', {
                      attrs: { 'sidebar-items': t.sidebarItems },
                      scopedSlots: t._u(
                        [
                          {
                            key: 'top',
                            fn: function() {
                              return [t._t('page-top')]
                            },
                            proxy: !0
                          },
                          {
                            key: 'bottom',
                            fn: function() {
                              return [t._t('page-bottom')]
                            },
                            proxy: !0
                          }
                        ],
                        null,
                        !0
                      )
                    })
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
      e.default = c.exports
    }
  }
])
