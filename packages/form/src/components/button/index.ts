import { App } from 'vue'
import Button from './src/index'

export default (app: App): void => {
  app.component(Button.name, Button)
}

export { Button }
