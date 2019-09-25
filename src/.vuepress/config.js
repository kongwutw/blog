module.exports = {
  base: '/blog/',
  dest: 'docs',
  title:'空无的博客',
  description:'让全栈编程更容易！',
  head:[
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    sidebarDepth: 3,
    navBar: true,
    nav: [
      {
        text: '教程',
        items: [
          { text: 'JS入门', link: '/js/1' },
          { text: '前端进阶', link: '/fe/vue' },
        ]
      },
      {
        text: '实战分享',
        items: [
          { text: 'vue服务端渲染', link: '/share/ssr'},
          { text: '小程序开发总结', link: '/share/mp'},
          { text: 'go+vue前后端分离实战', link: '/share/iris'},
          { text: 'uni-app多端开发回顾', link: '/share/uni'},
        ]
      },
      {
        text: '常用网址',
        link: '/url/fe'
      },
      {
        text: 'github',
        link: 'https://github.com/kongwutw/'
      },
    ],
    sidebar: {
      '/fe/': genSidebarConfig('大前端教程', ['vue', 'VueRouter', 'vuex',  'linux', 'vscode', 'node', 'code', 'suanfa', 'ngnix', 'pm2']),
      '/js/': genSidebarConfig('JS入门', ['1']),
    }
  }
}

function genSidebarConfig (title, children) {
  return [
    { title, children }
  ]
}
