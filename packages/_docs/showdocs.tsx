import { defineComponent } from 'vue'

export interface DocsProps {
  md: any
  class?: string
}

export const ShowDocs = (props) => {
  return (
    // @ts-ignore domPropsInnerHTML
    <div
      class={`markdown-body ${props.class || ''}`}
      v-html={props.md.default}
    />
  )
}

// export const ShowDocsFunc

export const redirect = (url: string) =>
  defineComponent({
    setup() {
      window.open(url, '_blank')
      history.back()
    },
  }) as any
