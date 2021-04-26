/*!
 * vue-pandroa v1.1.7
 * (c) 2021-2021
 * Released under the MIT License.
 */
;(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(
        exports,
        require('./Table/index.vue'),
        require('./Form/index.vue'),
        require('./__styles/vform.css'),
        require('./__styles/vtable.css'),
        require('../__hooks/usePandoraForm'),
        require('../__hooks/usePandoraTable'),
        require('./Table/baseTable/index.vue')
      )
    : typeof define === 'function' && define.amd
    ? define([
        'exports',
        './Table/index.vue',
        './Form/index.vue',
        './__styles/vform.css',
        './__styles/vtable.css',
        '../__hooks/usePandoraForm',
        '../__hooks/usePandoraTable',
        './Table/baseTable/index.vue'
      ], factory)
    : ((global = typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory(
        (global.VuePandora = {}),
        global.index_vue,
        global.index_vue$1,
        null,
        null,
        global.usePandoraForm,
        global.usePandoraTable,
        global.index_vue$2
      ))
})(this, function(
  exports,
  index_vue,
  index_vue$1,
  vform_css,
  vtable_css,
  usePandoraForm,
  usePandoraTable,
  index_vue$2
) {
  'use strict'

  function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : { default: e }
  }

  var index_vue__default = /*#__PURE__*/ _interopDefaultLegacy(index_vue)
  var index_vue__default$1 = /*#__PURE__*/ _interopDefaultLegacy(index_vue$1)
  var index_vue__default$2 = /*#__PURE__*/ _interopDefaultLegacy(index_vue$2)

  Object.defineProperty(exports, 'VTable', {
    enumerable: true,
    get: function() {
      return index_vue__default['default']
    }
  })
  Object.defineProperty(exports, 'VForm', {
    enumerable: true,
    get: function() {
      return index_vue__default$1['default']
    }
  })
  Object.defineProperty(exports, 'usePandoraForm', {
    enumerable: true,
    get: function() {
      return usePandoraForm.usePandoraForm
    }
  })
  Object.defineProperty(exports, 'usePandoraTable', {
    enumerable: true,
    get: function() {
      return usePandoraTable.usePandoraTable
    }
  })
  Object.defineProperty(exports, 'BaseTable', {
    enumerable: true,
    get: function() {
      return index_vue__default$2['default']
    }
  })

  Object.defineProperty(exports, '__esModule', { value: true })
})
