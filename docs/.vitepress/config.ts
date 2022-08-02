import { defineConfig } from 'vitepress'

const nav = [
  {
    text: 'Components',
    link: '/components/index',
  },
]

const sidebar = {
  // This sidebar gets displayed when user is
  // under `guide` directory.
  '/components': [
    {
      text: '组件',
      items: [
        // This shows `/guide/index.md` page.
        { text: 'Button', link: '/components/button/index' },
      ],
    },
  ],
}

export default defineConfig({
  base: '/ping/',
  title: 'Watermelon',
  head: [
    [
      // 设置网站标题
      'link',
      {
        rel: 'icon',
        href: '/logo.svg',
      },
    ],
  ],
  markdown: {},
  themeConfig: {
    logo: '/logo.svg',
    nav,
    sidebar,
    socialLinks: [{ icon: 'github', link: 'https://github.com/zingxy' }],
  },
})
