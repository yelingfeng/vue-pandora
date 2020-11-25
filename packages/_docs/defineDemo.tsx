import { storiesOf } from '@andoshin11/storybook-vue3'
import { defineComponent } from 'vue'
import { ShowDocs } from './showdocs'
import { transformKnobs } from './transformKnobs'
import { withKnobs } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
export function defineDemo(
  {
    module, 
    category,
    name, 
    control,
    docs,
  } : { module: NodeModule; category: string; name: string; docs: string,control:object },
  Demo?: any,
) {
  const Wrapper = defineComponent({
    render(){
      let _controlProps = {}
      if(control && Object.keys(control).length){
        _controlProps = transformKnobs(control)
      }
      // @ts-ignore
      const Docs: any = <ShowDocs md={docs} />
      return (
        <div>
        {Demo ? (
            <div id="demo">
              <Demo {..._controlProps}/>
            </div>
          ) : null}
          {Docs}
        </div>
      )
    }
  })
  storiesOf(category, module)
    .addDecorator(withKnobs)
    .add(name, ()=> Wrapper as any) 
}
