;(window.webpackJsonp = window.webpackJsonp || []).push([
  [92],
  {
    897: function(t, e, a) {
      'use strict'
      a.r(e)
      var s = a(58),
        l = Object(s.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e
            return a('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              a('h1', { attrs: { id: '下拉树形结构组件' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#下拉树形结构组件' } }, [
                  t._v('#')
                ]),
                t._v(' 下拉树形结构组件')
              ]),
              t._v(' '),
              a('blockquote', [a('p', [t._v('v-tree-select')])]),
              t._v(' '),
              a('p', [a('strong', [t._v('代码示例：')])]),
              t._v(' '),
              a('div', { staticClass: 'language-html extra-class' }, [
                a('pre', { pre: !0, attrs: { class: 'language-html' } }, [
                  a('code', [
                    a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                      a('span', { pre: !0, attrs: { class: 'token tag' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('<')]),
                        t._v('v-tree-select')
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                        t._v(':options')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('treeList'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                        t._v('placeholder')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('请选择tree结构'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [t._v('width')]),
                      a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('50%'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                        t._v(':defaultData')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('defaultValue'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                        t._v(':treeProps')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('treeProps'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      t._v('\n  '),
                      a('span', { pre: !0, attrs: { class: 'token attr-name' } }, [
                        t._v('@handleNodeClick')
                      ]),
                      a('span', { pre: !0, attrs: { class: 'token attr-value' } }, [
                        a('span', { pre: !0, attrs: { class: 'token punctuation attr-equals' } }, [
                          t._v('=')
                        ]),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')]),
                        t._v('selectDrop'),
                        a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('"')])
                      ]),
                      t._v('\n'),
                      a('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('/>')])
                    ]),
                    t._v('\n')
                  ])
                ])
              ]),
              a('h2', { attrs: { id: '基础属性' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#基础属性' } }, [t._v('#')]),
                t._v(' 基础属性')
              ]),
              t._v(' '),
              a('blockquote', [a('p', [t._v('继承 el-select 和 el-tree Attributes')])]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('参数')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('说明')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('类型')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('默认值')])
                  ])
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('options')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('tree 原始数据源')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Array')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('无')])
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('treeProps')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('tree 配置')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Object')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('el-tree props 默认值一样')
                    ])
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('checkBoxBtn')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('是否显示全选、反选、清空操作(多选的情况下)')
                    ]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('true')])
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('multiple')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('是否开启多选')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Boolean')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('false')])
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('width')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('选择宽度（可以设置 px 或者%）')
                    ]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('String')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('100%')])
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('defaultData')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('单选默认值')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Object')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('{}')])
                  ]),
                  t._v(' '),
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('defaultValue')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('多选默认值')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('Array')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('[]')])
                  ])
                ])
              ]),
              t._v(' '),
              a('h2', { attrs: { id: '事件' } }, [
                a('a', { staticClass: 'header-anchor', attrs: { href: '#事件' } }, [t._v('#')]),
                t._v(' 事件')
              ]),
              t._v(' '),
              a('blockquote', [a('p', [t._v('继承 el-select 和 el-tree events')])]),
              t._v(' '),
              a('table', [
                a('thead', [
                  a('tr', [
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('事件名')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('说明')]),
                    t._v(' '),
                    a('th', { staticStyle: { 'text-align': 'left' } }, [t._v('返回值')])
                  ])
                ]),
                t._v(' '),
                a('tbody', [
                  a('tr', [
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('handleNodeClick')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [t._v('选中 tree 节点')]),
                    t._v(' '),
                    a('td', { staticStyle: { 'text-align': 'left' } }, [
                      t._v('单选传出当前选择项；多选传出选中的集合。')
                    ])
                  ])
                ])
              ])
            ])
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = l.exports
    }
  }
])
