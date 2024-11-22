import unocss from 'unocss/vite';
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BNS NEO",
  description: "BNS NEO Website Built with Vitepress",
  base: '/bns-neo/',
  lang: 'ko-KR',
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
          { text: '홍문가호', link: '/던전/홍문가호' },
        ]
      },
      {
        text: '도화첩',
        items: [
          { text: '도화', link: '/도화첩/도화' },
          { text: '인연', link: '/도화첩/인연' },
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

    search: {
      provider: 'local',
      options: {
        locales: {
          ko: {
            translations: {
              button: {
                buttonText: '검색',
                buttonAriaLabel: '검색'
              }
            }
          }
        }
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/f7dec8/bns-neo' }
    ],

    docFooter: {
      prev: '이전',
      next: '다음'
    },

    outline: {
      label: '이 페이지 목차'
    },

    lastUpdated: {
      text: '업데이트 날짜'
    },

    returnToTopLabel: '맨 위로 돌아가기',
    sidebarMenuLabel: '사이드바 메뉴',
    darkModeSwitchLabel: '다크 모드',
    lightModeSwitchTitle: '라이트 모드로 변경',
    darkModeSwitchTitle: '다크 모드로 변경'
  },

  ignoreDeadLinks: true,

  lastUpdated: true,

  vite: {
    plugins: [
      unocss()
    ]
  }
})
