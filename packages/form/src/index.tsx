import { defineComponent, reactive } from 'vue'
import { Button } from 'ant-design-vue';

export const FormJx = (a: number, b: number) => {
  return a + b
}

export const FormDemo = defineComponent({
  data() {
    const form = reactive({
      name: '',
    })
    return {
      form,
    }
  },
  components:{
    'a-button':Button
  },
  render(){
    return (
      <div>
        <h1>element-plus ant-Design</h1>
        <a-button type="primary">Primary button</a-button>
        <a-button type="danger">Danger</a-button>
      </div>
    )
  } ,
})
