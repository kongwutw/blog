// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: '空无',
  description: '让全栈编程更容易~',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }]],
  themeConfig: {
    repo: 'vitejs/vite',
    logo: '/logo.png',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Suggest changes to this page',
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: '关于空无', link: '/plugins/' },
      {
        text: '常用网址',
        items: [
          {
            text: '掘金社区',
            link: 'https://juejin.cn/'
          },
        ]
      },
    ],
    sidebar: {
      '/plugins': 'auto',
      '/': [
        {
          text: 'Guide',
          children: [
            {
              text: 'env',
              link: '/guide/why'
            },
            {
              text: 'mp',
              link: '/guide/'
            },
          ]
        },
        {
          text: 'APIs',
          children: [
            {
              text: 'Plugin API',
              link: '/guide/api-plugin'
            },
          ]
        }
      ]
    }
  }
}
