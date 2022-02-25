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
      { text: '专业技能', link: '/tech/' },
      { text: '通用能力', link: '/manage/' },
      { text: '职场心得', link: '/job/interview/' },
      { text: '关于小编', link: '/about/' },
      {
        text: '常用网址',
        items: [
          {
            text: '知乎',
            link: 'https://www.zhihu.com/'
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/'
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
      '/job': [
        {
          text: '面试宝典',
          children: [
            {
              text: '准备简历',
              link: '/job/interview/'
            },
            {
              text: 'web基础',
              link: '/job/interview/2'
            },
            {
              text: '深入JS',
              link: '/job/interview/3'
            },
            {
              text: '算法',
              link: '/job/interview/4'
            },
            {
              text: 'vue',
              link: '/job/interview/5'
            },
            {
              text: 'react',
              link: '/job/interview/6'
            },
            {
              text: '性能优化',
              link: '/job/interview/7'
            },
            {
              text: '浏览器',
              link: '/job/interview/8'
            },
          ]
        },
        {
          text: '高效工作',
          children: [
            {
              text: '十条经验',
              link: '/job/think/ten'
            },
            {
              text: '如何高效？',
              link: '/job/think/how'
            },
            {
              text: '七个习惯',
              link: '/job/think/seven'
            },
          ]
        },
      ],
      '/tech': [
        {
          text: '效能提升',
          children: [
            {
              text: '快速落地WebIDE',
              link: '/tech/tool/theia'
            },
          ]
        },
        {
          text: '技术调研',
          children: [
            {
              text: '22年大前端热点技术',
              link: '/tech/'
            },
            {
              text: '关于前端基建的思考',
              link: '/tech/base'
            },
            {
              text: '物联网常见协议',
              link: '/tech/iot'
            },
            {
              text: '深入看透低代码',
              link: '/tech/low'
            },
            {
              text: '边缘计算与端智能',
              link: '/tech/edge'
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
            {
              text: 'React 和 Vue 中的 Hooks 对比',
              link: '/tech/di/hooks'
            },
          ]
        },
        {
          text: '基础知识',
          children: [
            {
              text: 'ES5 读书指南',
              link: '/tech/es5q'
            },
            {
              text: '红宝书 读书指南',
              link: '/tech/hbs'
            },
          ]
        },
        {
          text: 'JS全栈入门教程',
          children: [
            {
              text: '1_1 教程简介',
              link: '/tech/site/1_1'
            },
            {
              text: '1_2 最终代码和效果',
              link: '/tech/site/1_2'
            },
            {
              text: '1_3 学习建议',
              link: '/tech/site/1_3'
            },
            {
              text: '2_1 node简介',
              link: '/tech/site/2_1'
            },
            {
              text: '2_2 vscode',
              link: '/tech/site/2_2'
            },
            {
              text: '3_1 Linux 入门',
              link: '/tech/site/3_1'
            },
            {
              text: '3_2 初始化项目',
              link: '/tech/site/3_2'
            },
            {
              text: '3_3 koa-static处理静态资源',
              link: '/tech/site/3_3'
            },
            {
              text: '3_4 分析 koa-static 的源码',
              link: '/tech/site/3_4'
            },
            {
              text: '4_1 koa 简介',
              link: '/tech/site/4_1'
            },
            {
              text: '4_2 koa 源码',
              link: '/tech/site/4_2'
            },
            {
              text: '4_3 koa 中间件',
              link: '/tech/site/4_3'
            },
            {
              text: '5_1 从0实现响应式导航栏',
              link: '/tech/site/5_1'
            },
            {
              text: '5_2 导航栏的吸顶',
              link: '/tech/site/5_2'
            },
            {
              text: '5_3 导航栏响应滚动',
              link: '/tech/site/5_3'
            },
            {
              text: '6_1 上线部署前的准备',
              link: '/tech/site/6_1'
            },
            {
              text: '6_2 基于node服务器部署静态网站',
              link: '/tech/site/6_2'
            },
            {
              text: '6_3 基于ngnix部署静态网站',
              link: '/tech/site/6_3'
            },
          ]
        },
      ],
      '/manage': [
        {
          text: '理论指导',
          children: [
            {
              text: '管理者管什么？',
              link: '/manage/index'
            },
          ]
        },
        {
          text: '实践总结',
          children: [
            {
              text: '近期管理的认知迭代',
              link: '/manage/sum'
            },
          ]
        },
      ]
    }
  }
}
