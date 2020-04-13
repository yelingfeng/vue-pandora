import Vue from 'vue'

import { Form } from './VForm'
import { Table } from './VTable'

export function install(vue: typeof Vue, options: {}): void

export class VForm extends Form {}

export class VTable extends Table {}
