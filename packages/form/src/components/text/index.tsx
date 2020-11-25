import { defineComponent } from 'vue'
/**
 * Text component
 */
const VText = defineComponent({
  name : 'v-Text',
  setup(props){
    return () => <div>Text</div>
  },
})
export default VText
