import { App } from 'vue'
import Button from './src/Button'

// 具名导出

export { Button }

// 使用插件， 全局注册

export default {
  install(app: App) {
    app.component(Button.name, Button)
  },
}
