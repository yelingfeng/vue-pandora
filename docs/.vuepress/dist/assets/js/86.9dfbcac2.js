;(window.webpackJsonp = window.webpackJsonp || []).push([
  [86],
  {
    890: function(t, a, s) {
      'use strict'
      s.r(a)
      var e = s(58),
        n = Object(e.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a
            return s('ContentSlotsDistributor', { attrs: { 'slot-key': t.$parent.slotKey } }, [
              s('h1', { attrs: { id: '基础属性' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#基础属性' } }, [t._v('#')]),
                t._v(' 基础属性')
              ]),
              t._v(' '),
              s('p', [
                t._v('主要包括 '),
                s('code', [t._v('FormOption')]),
                t._v(','),
                s('code', [t._v('FormItemOpt')]),
                t._v(','),
                s('code', [t._v('FormItemCompOpt')]),
                t._v(' 三个主要属性')
              ]),
              t._v(' '),
              s('ol', [
                s('li', [t._v('FormOption 构建整体 Form 的属性')]),
                t._v(' '),
                s('li', [t._v('FormItemOpt 构建一个 FormItem 的属性')]),
                t._v(' '),
                s('li', [t._v('FormItemCompOpt 构建一个 FormItem 内部组件的属性')])
              ]),
              t._v(' '),
              s('h2', { attrs: { id: 'formoption-说明' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#formoption-说明' } }, [
                  t._v('#')
                ]),
                t._v(' FormOption 说明')
              ]),
              t._v(' '),
              s('table', [
                s('thead', [
                  s('tr', [
                    s('th', { staticStyle: { 'text-align': 'left' } }, [t._v('属性')]),
                    t._v(' '),
                    s('th', [t._v('类型')]),
                    t._v(' '),
                    s('th', [t._v('说明')])
                  ])
                ]),
                t._v(' '),
                s('tbody', [
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('inline')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('行内表单模式')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('labelPosition')]),
                    t._v(' '),
                    s('td', [t._v('string(left,right )')]),
                    t._v(' '),
                    s('td', [t._v('表单 label 标签的位置')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('labelWidth')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('表单 label 标签的宽度')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('btnPos')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('按钮位置 默认 right')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('items')]),
                    t._v(' '),
                    s('td', [s('code', [t._v('FormItemOpt')])]),
                    t._v(' '),
                    s('td', [t._v('数组对象')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('btns')]),
                    t._v(' '),
                    s('td', [s('code', [t._v('FormItemOpt')])]),
                    t._v(' '),
                    s('td', [t._v('数组对象')])
                  ])
                ])
              ]),
              t._v(' '),
              s('div', { staticClass: 'language-ts extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-ts' } }, [
                  s('code', [
                    t._v('\n '),
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('private')]),
                    t._v(' formObj'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' FormOption '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n   inline'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   labelPosition'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'right'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   labelWidth'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'100'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   btnPos'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'right'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   items'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n   btns'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('...')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v('\n '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n\n')
                  ])
                ])
              ]),
              s('h2', { attrs: { id: 'formitemopt-说明' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#formitemopt-说明' } }, [
                  t._v('#')
                ]),
                t._v(' FormItemOpt 说明')
              ]),
              t._v(' '),
              s('table', [
                s('thead', [
                  s('tr', [
                    s('th', { staticStyle: { 'text-align': 'left' } }, [t._v('属性')]),
                    t._v(' '),
                    s('th', [t._v('类型')]),
                    t._v(' '),
                    s('th', [t._v('说明')])
                  ])
                ]),
                t._v(' '),
                s('tbody', [
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('label')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('label 名称')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('type')]),
                    t._v(' '),
                    s('td', [s('code', [t._v('ItemType')])]),
                    t._v(' '),
                    s('td', [t._v('item 类型')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('required?')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否必填项')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('wrap?')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否换行')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('show?')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否显示')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('comOpt')]),
                    t._v(' '),
                    s('td', [s('code', [t._v('FormItemCompOpt')])]),
                    t._v(' '),
                    s('td', [t._v('对象')])
                  ])
                ])
              ]),
              t._v(' '),
              s('div', { staticClass: 'language-ts extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-ts' } }, [
                  s('code', [
                    s('span', { pre: !0, attrs: { class: 'token keyword' } }, [t._v('type')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token class-name' } }, [
                      t._v('ItemType')
                    ]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('=')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'select'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'text'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'date'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'button'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'radio'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'checkbox'")]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v('|')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'autoComplete'")
                    ]),
                    t._v('\n\nitems'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('[')]),
                    t._v('\n  '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n    label'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'任务名称'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    type'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'text'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n    comOpt'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n      id'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'taskName'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      width'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token number' } }, [t._v('210')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      disabled'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      show'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('true')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      placeholder'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    t._v('\n    '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n  '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n'),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(']')]),
                    t._v('\n')
                  ])
                ])
              ]),
              s('h2', { attrs: { id: 'formitemcompopt-说明' } }, [
                s('a', { staticClass: 'header-anchor', attrs: { href: '#formitemcompopt-说明' } }, [
                  t._v('#')
                ]),
                t._v(' FormItemCompOpt 说明')
              ]),
              t._v(' '),
              s('table', [
                s('thead', [
                  s('tr', [
                    s('th', { staticStyle: { 'text-align': 'left' } }, [t._v('属性')]),
                    t._v(' '),
                    s('th', [t._v('类型')]),
                    t._v(' '),
                    s('th', [t._v('说明')])
                  ])
                ]),
                t._v(' '),
                s('tbody', [
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('id')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('id')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('value')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('any')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('type')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('类型')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('width?')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('number')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('isAll?')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否全选')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('disabled?')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否禁用')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('placeholder?')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('占位符')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('format')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('设置日期显示格式')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('clearable')]),
                    t._v(' '),
                    s('td', [t._v('boolean')]),
                    t._v(' '),
                    s('td', [t._v('是否显示清除按钮')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('data')]),
                    t._v(' '),
                    s('td', [t._v('any[]')]),
                    t._v(' '),
                    s('td', [t._v('数据')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('className?')]),
                    t._v(' '),
                    s('td', [t._v('string')]),
                    t._v(' '),
                    s('td', [t._v('iconclassname')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('click?')]),
                    t._v(' '),
                    s('td', [t._v('Function')]),
                    t._v(' '),
                    s('td', [t._v('click 事件回调')])
                  ]),
                  t._v(' '),
                  s('tr', [
                    s('td', { staticStyle: { 'text-align': 'left' } }, [t._v('change?')]),
                    t._v(' '),
                    s('td', [t._v('Function')]),
                    t._v(' '),
                    s('td', [t._v('change 事件回调')])
                  ])
                ])
              ]),
              t._v(' '),
              s('div', { staticClass: 'language-ts extra-class' }, [
                s('pre', { pre: !0, attrs: { class: 'language-ts' } }, [
                  s('code', [
                    t._v('    comOpt'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    t._v('\n      id'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'queryUpdateTime'")
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      clearable'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      value'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("''")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      type'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [
                      t._v("'datetimerange'")
                    ]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      disabled'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token boolean' } }, [t._v('false')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      width'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token string' } }, [t._v("'210'")]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v(',')]),
                    t._v('\n      pickOptions'),
                    s('span', { pre: !0, attrs: { class: 'token operator' } }, [t._v(':')]),
                    t._v(' '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('{')]),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n    '),
                    s('span', { pre: !0, attrs: { class: 'token punctuation' } }, [t._v('}')]),
                    t._v('\n')
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
      a.default = n.exports
    }
  }
])
