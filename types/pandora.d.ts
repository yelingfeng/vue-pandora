import Vue from 'vue'

import { Form } from './VForm'
import { Table } from './VTable'
import { GisMap } from './VGisMap'

export function install(vue: typeof Vue, options: {}): void

export class VForm extends Form {}

export class VTable extends Table {}

export class VGisMap extends GisMap {}
