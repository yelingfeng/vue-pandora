import { PropType } from 'vue'

export interface BasicProps {
  width: string
  height: string
  data: object[]
}
export const basicProps = {
  width: {
    type: String as PropType<string>,
    default: '100%'
  },
  data: {
    type: Array as PropType<any[]>,
    default: null
  },
  height: {
    type: String as PropType<string>,
    default: '100%'
  }
}
