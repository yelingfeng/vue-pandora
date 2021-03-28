import Vue, { VNode } from 'vue'
import { ComponentRenderProxy } from '@vue/composition-api'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    interface ElementClass extends ComponentRenderProxy {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
