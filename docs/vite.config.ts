import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [vueJsx(), Icons({ autoInstall: true })],
})
