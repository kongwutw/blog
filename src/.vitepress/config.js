// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
const sites = require('./cfg/sites');
const job = require('./cfg/job');
const tech = require('./cfg/tech');
const manage = require('./cfg/manage');
 
module.exports = {
  "lang": "zh-cn",
  outDir: '../docs',
  base:'/blog/',
  title: '三一习惯',
  description: '每周跑一十公里强体魄，每周读一本好书启智慧，每周做一次公益得快乐~',
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
      sites
    ],
    sidebar: {
      '/about': 'auto',
      '/job': job,
      '/tech': tech,
      '/manage': manage,
    }
  }
}
