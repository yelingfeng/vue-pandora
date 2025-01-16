;(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    744: function(t, e, n) {
      'use strict'
      n.d(e, 'd', function() {
        return r
      }),
        n.d(e, 'a', function() {
          return a
        }),
        n.d(e, 'i', function() {
          return o
        }),
        n.d(e, 'f', function() {
          return u
        }),
        n.d(e, 'g', function() {
          return c
        }),
        n.d(e, 'h', function() {
          return l
        }),
        n.d(e, 'b', function() {
          return d
        }),
        n.d(e, 'e', function() {
          return f
        }),
        n.d(e, 'k', function() {
          return p
        }),
        n.d(e, 'l', function() {
          return h
        }),
        n.d(e, 'c', function() {
          return v
        }),
        n.d(e, 'j', function() {
          return m
        })
      n(48), n(101), n(292), n(136), n(77), n(293), n(193), n(100), n(11), n(60), n(59)
      var r = /#.*$/,
        i = /\.(md|html)$/,
        a = /\/$/,
        o = /^[a-z]+:/i
      function s(t) {
        return decodeURI(t)
          .replace(r, '')
          .replace(i, '')
      }
      function u(t) {
        return o.test(t)
      }
      function c(t) {
        return /^mailto:/.test(t)
      }
      function l(t) {
        return /^tel:/.test(t)
      }
      function d(t) {
        if (u(t)) return t
        var e = t.match(r),
          n = e ? e[0] : '',
          i = s(t)
        return a.test(i) ? t : i + '.html' + n
      }
      function f(t, e) {
        var n = decodeURIComponent(t.hash),
          i = (function(t) {
            var e = t.match(r)
            if (e) return e[0]
          })(e)
        return (!i || n === i) && s(t.path) === s(e)
      }
      function p(t, e, n) {
        if (u(e)) return { type: 'external', path: e }
        n &&
          (e = (function(t, e, n) {
            var r = t.charAt(0)
            if ('/' === r) return t
            if ('?' === r || '#' === r) return e + t
            var i = e.split('/')
            ;(n && i[i.length - 1]) || i.pop()
            for (var a = t.replace(/^\//, '').split('/'), o = 0; o < a.length; o++) {
              var s = a[o]
              '..' === s ? i.pop() : '.' !== s && i.push(s)
            }
            '' !== i[0] && i.unshift('')
            return i.join('/')
          })(e, n))
        for (var r = s(e), i = 0; i < t.length; i++)
          if (s(t[i].regularPath) === r)
            return Object.assign({}, t[i], { type: 'page', path: d(t[i].path) })
        return (
          console.error('[vuepress] No matching page found for sidebar item "'.concat(e, '"')), {}
        )
      }
      function h(t, e, n, r) {
        var i = n.pages,
          a = n.themeConfig,
          o = (r && a.locales && a.locales[r]) || a
        if ('auto' === (t.frontmatter.sidebar || o.sidebar || a.sidebar)) return g(t)
        var s = o.sidebar || a.sidebar
        if (s) {
          var u = (function(t, e) {
              if (Array.isArray(e)) return { base: '/', config: e }
              for (var n in e)
                if (0 === ((r = t), /(\.html|\/)$/.test(r) ? r : r + '/').indexOf(encodeURI(n)))
                  return { base: n, config: e[n] }
              var r
              return {}
            })(e, s),
            c = u.base,
            l = u.config
          return 'auto' === l
            ? g(t)
            : l
            ? l.map(function(t) {
                return (function t(e, n, r) {
                  var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                  if ('string' == typeof e) return p(n, e, r)
                  if (Array.isArray(e)) return Object.assign(p(n, e[0], r), { title: e[1] })
                  var a = e.children || []
                  return 0 === a.length && e.path
                    ? Object.assign(p(n, e.path, r), { title: e.title })
                    : {
                        type: 'group',
                        path: e.path,
                        title: e.title,
                        sidebarDepth: e.sidebarDepth,
                        initialOpenGroupIndex: e.initialOpenGroupIndex,
                        children: a.map(function(e) {
                          return t(e, n, r, i + 1)
                        }),
                        collapsable: !1 !== e.collapsable
                      }
                })(t, i, c)
              })
            : []
        }
        return []
      }
      function g(t) {
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
      function m(t) {
        return Object.assign(t, { type: t.items && t.items.length ? 'links' : 'link' })
      }
    },
    753: function(t, e) {
      t.exports = function(t) {
        return null == t
      }
    },
    755: function(t, e, n) {},
    767: function(t, e, n) {
      'use strict'
      n(755)
    },
    777: function(t, e, n) {
      'use strict'
      n.r(e)
      n(48), n(136), n(101)
      var r = n(753),
        i = n.n(r),
        a = n(744),
        o = {
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
                r = e.docsDir,
                a = void 0 === r ? '' : r,
                o = e.docsBranch,
                s = void 0 === o ? 'master' : o,
                u = e.docsRepo,
                c = void 0 === u ? n : u
              return t && c && this.$page.relativePath
                ? this.createEditLink(n, c, a, s, this.$page.relativePath)
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
            createEditLink: function(t, e, n, r, i) {
              if (/bitbucket.org/.test(e))
                return (
                  e.replace(a.a, '') +
                  '/src' +
                  '/'.concat(r, '/') +
                  (n ? n.replace(a.a, '') + '/' : '') +
                  i +
                  '?mode=edit&spa=0&at='.concat(r, '&fileviewer=file-view-default')
                )
              return /gitlab.com/.test(e)
                ? e.replace(a.a, '') +
                    '/-/edit' +
                    '/'.concat(r, '/') +
                    (n ? n.replace(a.a, '') + '/' : '') +
                    i
                : (a.i.test(e) ? e : 'https://github.com/'.concat(e)).replace(a.a, '') +
                    '/edit' +
                    '/'.concat(r, '/') +
                    (n ? n.replace(a.a, '') + '/' : '') +
                    i
            }
          }
        },
        s = (n(767), n(58)),
        u = Object(s.a)(
          o,
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
      e.default = u.exports
    }
  }
])
