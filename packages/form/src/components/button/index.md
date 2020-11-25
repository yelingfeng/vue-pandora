# Button
> Form 下 vButton组件

```tsx
  import Button from 'VForm/Button'
  const Demo = defineComponent({
    setup() {
      const button1 = {
          label :'Primary button',
          type: 'primary',
          disabled:false,
          click(e:Event){
            console.log(e)
          }
      }
      return () =>
        <div>
          <Button {...button1}></Button>
        </div>
      }
  })


```