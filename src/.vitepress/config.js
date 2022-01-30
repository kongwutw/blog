// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  "lang": "zh-cn",
  outDir: '../docs',
  base:'/blog/',
  title: '空无',
  description: '让全栈编程更容易~',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }]],
  themeConfig: {
    repo: 'kongwutw/blog',
    logo: '/logo.png',
    docsDir: 'docs',
    docsBranch: 'main',
    nav: [
      { text: '技术文章', link: '/tech/' },
      { text: '关于小编', link: '/about/' },
      {
        text: '常用网址',
        items: [
          {
            text: '知乎',
            link: 'https://juejin.cn/'
          },
          {
            text: '掘金',
            link: 'https://www.zhihu.com/'
          },
          {
            text: 'vue官网',
            link: 'https://vuejs.org/'
          },
          {
            text: 'vite官网',
            link: 'https://vitejs.dev/'
          },
          {
            text: 'antdv官网',
            link: 'https://antdv.com/'
          },
          {
            text: 'react官网',
            link: 'https://reactjs.org/'
          },
          {
            text: 'flutter官网',
            link: 'https://flutter.dev/'
          },
          {
            text: 'uni-app官网',
            link: 'https://uniapp.dcloud.net.cn/'
          },
        ]
      },
    ],
    sidebar: {
      '/about': 'auto',
      '/': [
        {
          text: '技术调研',
          children: [
            {
              text: '22年大前端热点技术',
              link: '/tech/'
            },
          ]
        },
        {
          text: '技术原理',
          children: [
            {
              text: '深入浅出依赖注入',
              link: '/tech/di/about'
            },
            {
              text: '基于inversify打造DI业务框架',
              link: '/tech/di/inversify'
            },
            {
              text: 'Angular 的依赖注入',
              link: '/tech/di/angular'
            },
            {
              text: 'TS实现可在React中使用的DI',
              link: '/tech/di/react'
            },
          ]
        },
      ]
    }
  }
}
