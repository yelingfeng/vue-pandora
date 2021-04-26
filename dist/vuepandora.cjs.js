/*!
 * vue-pandroa v1.1.7
 * (c) 2021-2021
 * Released under the MIT License.
 */
'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

var index_vue = require('./Table/index.vue')
var index_vue$1 = require('./Form/index.vue')
require('./__styles/vform.css')
require('./__styles/vtable.css')
var usePandoraForm = require('../__hooks/usePandoraForm')
var usePandoraTable = require('../__hooks/usePandoraTable')
var index_vue$2 = require('./Table/baseTable/index.vue')

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
