import { defineComponent, reactive } from 'vue'

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
  template: `
    <h1>element-plus 是什么玩意？</h1>
  `,
})
