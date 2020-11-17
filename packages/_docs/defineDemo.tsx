import { storiesOf } from '@andoshin11/storybook-vue3'
import { defineComponent } from 'vue'
import { ShowDocs } from './showdocs'

export function defineDemo(
  {
    module,
    category,
    name,
    docs,
  }: { module: NodeModule; category: string; name: string; docs: string },
  Demo?: any,
) {
  const Wrapper = defineComponent({
    render() {
      // @ts-ignore
      const Docs: any = <ShowDocs md={docs} />
      return (
        <div>
          {Demo ? (
            <div id="demo">
              <Demo />
            </div>
          ) : null}
          {Docs}
        </div>
      )
    },
  })

  storiesOf(category, module).add(name, () => Wrapper as any)
}

export const html = String.raw
