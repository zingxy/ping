import DefaultTheme from 'vitepress/theme'

import TsxComp from '../../../src/components/TsxComp'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('TSXComp', TsxComp)
  },
}
