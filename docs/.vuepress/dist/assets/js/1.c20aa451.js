;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1, 12, 14, 27, 28, 29],
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
          return o
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
          return h
        }),
        n.d(e, 'k', function() {
          return p
        }),
        n.d(e, 'l', function() {
          return d
        }),
        n.d(e, 'c', function() {
          return m
        }),
        n.d(e, 'j', function() {
          return v
        })
      n(48), n(101), n(292), n(136), n(77), n(293), n(193), n(100), n(11), n(60), n(59)
      var i = /#.*$/,
        r = /\.(md|html)$/,
        s = /\/$/,
        o = /^[a-z]+:/i
      function a(t) {
        return decodeURI(t)
          .replace(i, '')
          .replace(r, '')
      }
      function u(t) {
        return o.test(t)
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
          r = a(t)
        return s.test(r) ? t : r + '.html' + n
      }
      function h(t, e) {
        var n = decodeURIComponent(t.hash),
          r = (function(t) {
            var e = t.match(i)
            if (e) return e[0]
          })(e)
        return (!r || n === r) && a(t.path) === a(e)
      }
      function p(t, e, n) {
        if (u(e)) return { type: 'external', path: e }
        n &&
          (e = (function(t, e, n) {
            var i = t.charAt(0)
            if ('/' === i) return t
            if ('?' === i || '#' === i) return e + t
            var r = e.split('/')
            ;(n && r[r.length - 1]) || r.pop()
            for (var s = t.replace(/^\//, '').split('/'), o = 0; o < s.length; o++) {
              var a = s[o]
              '..' === a ? r.pop() : '.' !== a && r.push(a)
            }
            '' !== r[0] && r.unshift('')
            return r.join('/')
          })(e, n))
        for (var i = a(e), r = 0; r < t.length; r++)
          if (a(t[r].regularPath) === i)
            return Object.assign({}, t[r], { type: 'page', path: f(t[r].path) })
        return (
          console.error('[vuepress] No matching page found for sidebar item "'.concat(e, '"')), {}
        )
      }
      function d(t, e, n, i) {
        var r = n.pages,
          s = n.themeConfig,
          o = (i && s.locales && s.locales[i]) || s
        if ('auto' === (t.frontmatter.sidebar || o.sidebar || s.sidebar)) return g(t)
        var a = o.sidebar || s.sidebar
        if (a) {
          var u = (function(t, e) {
              if (Array.isArray(e)) return { base: '/', config: e }
              for (var n in e)
                if (0 === ((i = t), /(\.html|\/)$/.test(i) ? i : i + '/').indexOf(encodeURI(n)))
                  return { base: n, config: e[n] }
              var i
              return {}
            })(e, a),
            l = u.base,
            c = u.config
          return 'auto' === c
            ? g(t)
            : c
            ? c.map(function(t) {
                return (function t(e, n, i) {
                  var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                  if ('string' == typeof e) return p(n, e, i)
                  if (Array.isArray(e)) return Object.assign(p(n, e[0], i), { title: e[1] })
                  var s = e.children || []
                  return 0 === s.length && e.path
                    ? Object.assign(p(n, e.path, i), { title: e.title })
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
      function g(t) {
        var e = m(t.headers || [])
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
      function m(t) {
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
        o = Object(s.a)(
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
      e.default = o.exports
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
        s = n(297),
        o = n.n(s),
        a = {
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
              return o()(e) === t
            },
            handleDropdown: function() {
              0 === event.detail && this.setOpen(!this.open)
            }
          }
        },
        u = (n(758), n(58)),
        l = Object(u.a)(
          a,
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
    766: function(t, e, n) {},
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
        o = {
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
                  o = {
                    text: this.$themeLocaleConfig.selectText || 'Languages',
                    ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
                    items: Object.keys(e).map(function(i) {
                      var o,
                        a = e[i],
                        u = (s[i] && s[i].label) || a.lang
                      return (
                        a.lang === t.$lang
                          ? (o = n)
                          : ((o = n.replace(t.$localeConfig.path, i)),
                            r.some(function(t) {
                              return t.path === o
                            }) || (o = i)),
                        { text: u, link: o }
                      )
                    })
                  }
                return [].concat(Object(i.a)(this.userNav), [o])
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
        a = (n(765), n(58)),
        u = Object(a.a)(
          o,
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
    780: function(t, e, n) {
      'use strict'
      n(766)
    },
    788: function(t, e, n) {},
    789: function(t, e, n) {},
    799: function(t, e, n) {
      'use strict'
      n.r(e)
      n(780)
      var i = n(58),
        r = Object(i.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              {
                staticClass: 'sidebar-button',
                on: {
                  click: function(e) {
                    return t.$emit('toggle-sidebar')
                  }
                }
              },
              [
                n(
                  'svg',
                  {
                    staticClass: 'icon',
                    attrs: {
                      xmlns: 'http://www.w3.org/2000/svg',
                      'aria-hidden': 'true',
                      role: 'img',
                      viewBox: '0 0 448 512'
                    }
                  },
                  [
                    n('path', {
                      attrs: {
                        fill: 'currentColor',
                        d:
                          'M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z'
                      }
                    })
                  ]
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
      e.default = r.exports
    },
    808: function(t, e, n) {
      'use strict'
      n(788)
    },
    809: function(t, e, n) {
      'use strict'
      n(789)
    },
    817: function(t, e, n) {
      'use strict'
      n.r(e)
      n(302),
        n(77),
        n(59),
        n(11),
        n(48),
        n(292),
        n(201),
        n(202),
        n(193),
        n(101),
        n(298),
        n(299),
        n(300),
        n(196),
        n(100),
        n(309),
        n(136),
        n(310)
      var i = n(306),
        r = n.n(i),
        s = function(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = r()(e, 'title', '')
          return (
            r()(e, 'frontmatter.tags') && (i += ' '.concat(e.frontmatter.tags.join(' '))),
            n && (i += ' '.concat(n)),
            o(t, i)
          )
        },
        o = function(t, e) {
          var n = function(t) {
              return t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
            },
            i = new RegExp('[^\0-]'),
            r = t
              .split(/\s+/g)
              .map(function(t) {
                return t.trim()
              })
              .filter(function(t) {
                return !!t
              })
          if (i.test(t))
            return r.some(function(t) {
              return e.toLowerCase().indexOf(t) > -1
            })
          var s = t.endsWith(' ')
          return new RegExp(
            r
              .map(function(t, e) {
                return r.length !== e + 1 || s
                  ? '(?=.*\\b'.concat(n(t), '\\b)')
                  : '(?=.*\\b'.concat(n(t), ')')
              })
              .join('') + '.+',
            'gi'
          ).test(e)
        },
        a = {
          name: 'SearchBox',
          data: function() {
            return { query: '', focused: !1, focusIndex: 0, placeholder: void 0 }
          },
          computed: {
            showSuggestions: function() {
              return this.focused && this.suggestions && this.suggestions.length
            },
            suggestions: function() {
              var t = this.query.trim().toLowerCase()
              if (t) {
                for (
                  var e = this.$site.pages,
                    n = this.$site.themeConfig.searchMaxSuggestions || 5,
                    i = this.$localePath,
                    r = [],
                    o = 0;
                  o < e.length && !(r.length >= n);
                  o++
                ) {
                  var a = e[o]
                  if (this.getPageLocalePath(a) === i && this.isSearchable(a))
                    if (s(t, a)) r.push(a)
                    else if (a.headers)
                      for (var u = 0; u < a.headers.length && !(r.length >= n); u++) {
                        var l = a.headers[u]
                        l.title &&
                          s(t, a, l.title) &&
                          r.push(Object.assign({}, a, { path: a.path + '#' + l.slug, header: l }))
                      }
                }
                return r
              }
            },
            alignRight: function() {
              return (this.$site.themeConfig.nav || []).length + (this.$site.repo ? 1 : 0) <= 2
            }
          },
          mounted: function() {
            ;(this.placeholder = this.$site.themeConfig.searchPlaceholder || ''),
              document.addEventListener('keydown', this.onHotkey)
          },
          beforeDestroy: function() {
            document.removeEventListener('keydown', this.onHotkey)
          },
          methods: {
            getPageLocalePath: function(t) {
              for (var e in this.$site.locales || {})
                if ('/' !== e && 0 === t.path.indexOf(e)) return e
              return '/'
            },
            isSearchable: function(t) {
              var e = null
              return (
                null === e ||
                (e = Array.isArray(e) ? e : new Array(e)).filter(function(e) {
                  return t.path.match(e)
                }).length > 0
              )
            },
            onHotkey: function(t) {
              t.srcElement === document.body &&
                ['s', '/'].includes(t.key) &&
                (this.$refs.input.focus(), t.preventDefault())
            },
            onUp: function() {
              this.showSuggestions &&
                (this.focusIndex > 0
                  ? this.focusIndex--
                  : (this.focusIndex = this.suggestions.length - 1))
            },
            onDown: function() {
              this.showSuggestions &&
                (this.focusIndex < this.suggestions.length - 1
                  ? this.focusIndex++
                  : (this.focusIndex = 0))
            },
            go: function(t) {
              this.showSuggestions &&
                (this.$router.push(this.suggestions[t].path),
                (this.query = ''),
                (this.focusIndex = 0))
            },
            focus: function(t) {
              this.focusIndex = t
            },
            unfocus: function() {
              this.focusIndex = -1
            }
          }
        },
        u = (n(808), n(58)),
        l = Object(u.a)(
          a,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n('div', { staticClass: 'search-box' }, [
              n('input', {
                ref: 'input',
                class: { focused: t.focused },
                attrs: {
                  'aria-label': 'Search',
                  placeholder: t.placeholder,
                  autocomplete: 'off',
                  spellcheck: 'false'
                },
                domProps: { value: t.query },
                on: {
                  input: function(e) {
                    t.query = e.target.value
                  },
                  focus: function(e) {
                    t.focused = !0
                  },
                  blur: function(e) {
                    t.focused = !1
                  },
                  keyup: [
                    function(e) {
                      return !e.type.indexOf('key') && t._k(e.keyCode, 'enter', 13, e.key, 'Enter')
                        ? null
                        : t.go(t.focusIndex)
                    },
                    function(e) {
                      return !e.type.indexOf('key') &&
                        t._k(e.keyCode, 'up', 38, e.key, ['Up', 'ArrowUp'])
                        ? null
                        : t.onUp(e)
                    },
                    function(e) {
                      return !e.type.indexOf('key') &&
                        t._k(e.keyCode, 'down', 40, e.key, ['Down', 'ArrowDown'])
                        ? null
                        : t.onDown(e)
                    }
                  ]
                }
              }),
              t._v(' '),
              t.showSuggestions
                ? n(
                    'ul',
                    {
                      staticClass: 'suggestions',
                      class: { 'align-right': t.alignRight },
                      on: { mouseleave: t.unfocus }
                    },
                    t._l(t.suggestions, function(e, i) {
                      return n(
                        'li',
                        {
                          key: i,
                          staticClass: 'suggestion',
                          class: { focused: i === t.focusIndex },
                          on: {
                            mousedown: function(e) {
                              return t.go(i)
                            },
                            mouseenter: function(e) {
                              return t.focus(i)
                            }
                          }
                        },
                        [
                          n(
                            'a',
                            {
                              attrs: { href: e.path },
                              on: {
                                click: function(t) {
                                  t.preventDefault()
                                }
                              }
                            },
                            [
                              n('span', { staticClass: 'page-title' }, [
                                t._v(t._s(e.title || e.path))
                              ]),
                              t._v(' '),
                              e.header
                                ? n('span', { staticClass: 'header' }, [
                                    t._v('> ' + t._s(e.header.title))
                                  ])
                                : t._e()
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  )
                : t._e()
            ])
          },
          [],
          !1,
          null,
          null,
          null
        ).exports,
        c = n(799),
        f = n(775)
      function h(t, e) {
        return t.ownerDocument.defaultView.getComputedStyle(t, null)[e]
      }
      var p = {
          name: 'Navbar',
          components: {
            SidebarButton: c.default,
            NavLinks: f.default,
            SearchBox: l,
            AlgoliaSearchBox: {}
          },
          data: function() {
            return { linksWrapMaxWidth: null }
          },
          computed: {
            algolia: function() {
              return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
            },
            isAlgoliaSearch: function() {
              return this.algolia && this.algolia.apiKey && this.algolia.indexName
            }
          },
          mounted: function() {
            var t = this,
              e = parseInt(h(this.$el, 'paddingLeft')) + parseInt(h(this.$el, 'paddingRight')),
              n = function() {
                document.documentElement.clientWidth < 719
                  ? (t.linksWrapMaxWidth = null)
                  : (t.linksWrapMaxWidth =
                      t.$el.offsetWidth -
                      e -
                      ((t.$refs.siteName && t.$refs.siteName.offsetWidth) || 0))
              }
            n(), window.addEventListener('resize', n, !1)
          }
        },
        d =
          (n(809),
          Object(u.a)(
            p,
            function() {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e
              return n(
                'header',
                { staticClass: 'navbar' },
                [
                  n('SidebarButton', {
                    on: {
                      'toggle-sidebar': function(e) {
                        return t.$emit('toggle-sidebar')
                      }
                    }
                  }),
                  t._v(' '),
                  n('RouterLink', { staticClass: 'home-link', attrs: { to: t.$localePath } }, [
                    t.$site.themeConfig.logo
                      ? n('img', {
                          staticClass: 'logo',
                          attrs: { src: t.$withBase(t.$site.themeConfig.logo), alt: t.$siteTitle }
                        })
                      : t._e(),
                    t._v(' '),
                    t.$siteTitle
                      ? n(
                          'span',
                          {
                            ref: 'siteName',
                            staticClass: 'site-name',
                            class: { 'can-hide': t.$site.themeConfig.logo }
                          },
                          [t._v(t._s(t.$siteTitle))]
                        )
                      : t._e()
                  ]),
                  t._v(' '),
                  n(
                    'div',
                    {
                      staticClass: 'links',
                      style: t.linksWrapMaxWidth ? { 'max-width': t.linksWrapMaxWidth + 'px' } : {}
                    },
                    [
                      t.isAlgoliaSearch
                        ? n('AlgoliaSearchBox', { attrs: { options: t.algolia } })
                        : !1 !== t.$site.themeConfig.search && !1 !== t.$page.frontmatter.search
                        ? n('SearchBox')
                        : t._e(),
                      t._v(' '),
                      n('NavLinks', { staticClass: 'can-hide' })
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
          ))
      e.default = d.exports
    }
  }
])
