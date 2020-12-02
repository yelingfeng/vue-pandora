import { defineComponent } from 'vue'
import Button from './components/button/src/index';

export const FormJx = (a: number, b: number) => {
  return a + b
}

export const Form = defineComponent({
  setup() {
    const button1 = {
        label :'Primary button',
        type: 'primary',
        disabled:false,
        click(e:Event){
          console.log(e)
        }
    }
    const button2 = {
        label :'Dashed button',
        type: 'dashed',
        disabled:false,
        click(e:Event){
          console.log(e)
        }
    }
    return () =>
      <div>
        <h1>Vue pandora 2.0 Form Demp</h1>
        <Button {...button1}></Button>
        <Button {...button2}></Button>
      </div>
  }
}) 
