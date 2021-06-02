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
            { text: 'JS入门导读', link: '/jsGuide/1' },
            { text: 'JS高级导读', link: '/dd/1-3' },
          { text: '全栈入门', link: '/static/1_1' },
          { text: 'JS入门', link: '/js/1' },
          { text: '前端进阶', link: '/fe/vue' },
        ]
      },
      {
        text: '实战分享',
        items: [
          { text: '开发环境配置参考', link: '/share/env'},
          { text: 'vue服务端渲染', link: '/share/ssr'},
          { text: '小程序开发总结', link: '/share/mp'},
          { text: 'go+vue前后端分离实战', link: '/share/iris'},
          { text: 'uni-app多端开发回顾', link: '/share/uni'},
          { text: 'koa+vue全栈开发实战', link: '/share/koa'},
        ]
      },
      {
        text: '面试宝典',
        link: '/interview/1'
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
      '/interview/': genSidebarConfig('面试宝典', ['1', '2', '3', '4', '5', '6', '7', '8']),
      '/fe/': genSidebarConfig('大前端教程', ['vue', 'VueRouter', 'vuex',  'linux', 'vscode', 'node', 'code', 'suanfa', 'ngnix', 'pm2', 'ssh']),
      '/jsGuide/': genSidebarConfig('JS入门导读', ['1', '2', '3', '4', '5', '6', '7', '8', '9']),
      '/js/': genSidebarConfig('JS入门', ['1', '2', '3', '4', '5', '6', '7', '8']),
      '/dd/': genSidebarConfig('导读', ['1-3', '4-6', '7-9', '10-12', '13-15', '16-18', '19-21', '22-25']),
      '/static/': genSidebarConfig('全栈入门',  ['1_1', '1_2', '1_3', '2_1', '2_2', '3_1', '3_2', '3_3', '4_1', '4_2', '4_3', '5_1', '5_2', '5_3', '6_1','6_2', '6_3']),
    }
  }
}

function genSidebarConfig (title, children) {
  return [
    { title, children }
  ]
}
