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

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '소식',
        items: [
          { text: '업데이트', link: '/news/updates/' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      // {
      //   text: '출석부',
      //   items: [
      //     { text: '2회차', link: '/출석부/2회차' },
      //     { text: '1회차', link: '/출석부/1회차' },
      //   ]
      // },
      {
        text: '던전',
        items: [
          { text: '홍문가호', link: '/dungeon/fatigue' },
        ]
      },
      {
        text: '아이템',
        items: [
          {
            text: '교환',
            items: [
              { text: '세력', link: '/items/exchange/faction' },
              { text: '전장', link: '/items/exchange/battlefield' },
            ]
          }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/f7dec8/bns-neo' }
    ]
  }
})
