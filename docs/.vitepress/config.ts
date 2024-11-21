import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BNS NEO",
  description: "BNS NEO Website Built with Vitepress",
  base: '/bns-neo/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '소식',
        items: [
          { text: '업데이트', link: '/소식/업데이트/' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '출석부',
        items: [
          { text: '2회차', link: '/출석부/2회차' },
          { text: '1회차', link: '/출석부/1회차' },
        ]
      },
      {
        text: '던전',
        items: [
          { text: '홍문가호', link: '/던전/홍문가호' },
        ]
      },
      {
        text: '교환',
        items: [
          { text: '전장', link: '/교환/전장' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/f7dec8/bns-neo' }
    ]
  }
})
