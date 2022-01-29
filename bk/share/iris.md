---
title: 'iris'
sidebar: auto
collapsable: true
---
近期，我们在一个新的项目中使用了go和vue开发了一个前后端分离的web系统，让线下机构通过h5进行排课，管理机构老师和学生等，本文用于项目总结时，让参加的朋友了解一些有关的前置知识。

## 何为前后端分离？
随着近几年移动互联网的兴起，特别是前端领域的html5，CSS3，ECMAScript5和6（也就是javaScript语言的规范）的制定并被业界支持，前后端 分离这种技术架构越来越流行，笔者近3年 参与的实际项目，基本上都是 采用前后端分离的开发模式。

那么，什么是前后端分离呢？去网上一搜，答案挺多的，都没有绝对的对错，只是站在不同的角度去定义而已。我比较认可的定义如下：在技术架构上，前后端只通过Restful风格（最佳实践）的API以JSON 数据格式（使用最多）进行交互，而不是组织或岗位的分离。

## 关于go
Go（又称 Golang）是一个 Google 于2007年9月开始设计，并于2009年开源的编程语言，静态强类型、编译型、并发型，并具有垃圾回收功能。

语法与 C 相近，但对于变量的声明有所不同，它简洁、清晰而高效。对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。

## 关于iris框架
Iris是社区驱动的Go语言开源Web 框架，提供的api都是极简风格，很容易上手，支持中间件扩展，并有丰富的中间件生态库。
- 官网：[https://iris-go.com/](https://iris-go.com/)

整个iris框架共三层结构：
- 应用的配置和注册信息：如路由、中间件、日志。
- 中间的服务端实例：从iris实例拿配置信息进行配置。
- 底层net/http包：负责TCP连接建立、监听接受，请求收取并解析，缓冲区管理，写入响应。

## 关于vuejs
Vuejs是一套用于构建用户界面的渐进式JavaScript框架，Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。
- [官方入门教程](https://cn.vuejs.org/v2/guide/)
- [官方API文档](https://cn.vuejs.org/v2/api/)

## 参与已有vue项目的开发
### 体验应用
- 测试地址
http://yundi.100wlc.com
### 下载代码
```
git clone http://gitlab.weilaicheng.com/Front-end/xxx.git
```
### 安装nodejs
```
brew install node
```
### 安装依赖
```
npm install
```

### 启动项目
- 连接测试服务器接口
```
npm run test
```
- 连接线上服务器接口
```
npm run prod
```

### 部署到测试环境
- 本地打包并提交代码到gitlab
```
npm run td
```
- 使用pm2本地一键部署（需要配置ssh本地免密登录云服务器）
```
npm run pm2
```

## 参与已有 go iris项目开发
### 安装环境（参考）
- 下载Mac系统的安装包
到 https://studygolang.com/dl 选择所用操作系统对应最新的安装包
- 安装go
Mac 可以通过 brew install go 直接安装，也可通过上一步下载的安装包点击一步步安装
- 配置环境变量
```
vi ~/.zshrc // 若用的的是bash则编辑 .bashrc文件
 // 打开配置文件后输入如下内容
export GO111MODULE=auto // 启用mod依赖管理 
export GOPROXY=https://goproxy.io // 配置代理提高下载速度
export PATH=$PATH:/Users/xian2/go/bin  // 配置GOPATH
// 提交生效
source ~/.zshrc
```
- 安装mysql 和 redis
brew install 即可，或者去对应官网下载安装。

### 参与开发
- 下载源码
```
git clone git@gitlab.weilaicheng.com:kpl/xxx.git
```
- 新增配置
```
cd yd_user_zeus
mkdir conf
cp confs/dev.ini conf/config.ini
```
把 config.ini 的mysql密码等配置改成你本地的
- 找后端研发导入数据库
一般 通过 sequelpro 这个mysql数据管理工具导入

-安装 iris 热更新工具
```
go get github.com/kataras/rizla
```
- 启动项目
```
rizla main.go
```
- 访问 
http://127.0.0.1:8081/user_zeus/api/v2/hello  查看是否成功启动

更多内容请参与我们的现场的技术分享，没有加入我们公司的，请把简历砸过来：1007344228@qq.com。