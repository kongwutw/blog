---
title: 'koa+vue全栈开发实战'
sidebar: auto
collapsable: true
---
# JS全栈koa+vue前后端分离开发分享
## 前言
前端时间分享了一篇TS全栈koa+vue前后端分离开发的文章，里面也分享了其在github上的地址(其中小程序并没有配ts)：
- 后端：[https://github.com/yibiankeji/yb-server-koa.git](https://github.com/yibiankeji/yb-server-koa.git)
- h5: [https://github.com/yibiankeji/yb-h5-vue.git](https://github.com/yibiankeji/yb-h5-vue.git )
- 小程序：[https://github.com/yibiankeji/yb-mp.git](https://github.com/yibiankeji/yb-mp.git)

里面几乎用到了前端所有最新的前沿技术，包括pwa，和测试等，当然使用ts基于react-native或weex开发原生APP的并没有分享！

后来发现，前端还是小白居多，实际场景还是中小项目居多，且前端基础普遍薄弱，一下接受太多新东西，反而影响了开发效率。

所以后来，我去掉测试，pwa和ts等锦上添花的功能，转而专注在对koa和vue基础使用上，于是指导两个小白准备了这套js全栈koa+vue的前后端开发分享。

本项目主要实现登录注册、token校验，修改密码，上传头像和修改用户信息和列表下拉刷新、上拉加载等功能，没有具体的业务应用场景，但真实业务改改即可用来部署上线。

本人在阿里云服务器正在使用的一套JS全栈系统就基于此，包括h5，pc后端，小程序和node后端。

## 技术架构
前后端分离，后端没有选用大而全360的thinkjs或定制化阿里的egg, 而是基于它们底层都使用的web开发框架 koa, 同时前端基于vue 最新脚手架cli 3.x 搭建：
- 后端使用sequelize作为ORM操作mysql数据库, 使用koa-jwt进行token校验，使用koa-body实现图片上传等，核心库当前版本为：
    - node v10.13.0,
    - koa 2.6.x,
    - sequelize 4.41.x, 
    - koa-jwt 3.5.x, 
    - koa-body 4.0.x等。
- 前端使用官方路由库vue-router管理页面切换，官方状态库管vuex公共数据，使用axios处理请求，滴滴基于vue的移动端组件库cube-ui框架等：
    - vue 2.5.17, 
    - vue-router 3.0.1, 
    - vuex 3.0.1, 
    - axios 0.18.0, 
    - cube-ui 1.12.2
## 启动系统
- koa后端
    - 下载源码
        ```
          git clone https://github.com/yibiankeji/js-server-koa.git   
        ```
    - 安装项目有关依赖
        ```
          cd js-server-koa &&  npm install 
        ```
    - 安装mysql数据库并创建项目数据库
        ```
          brew install mysql (mac下安装，其他安装上网搜)
          mysql -u root -p   //进入数据库，需输密码
          create database ybkj;    //创建数据库
          exit  //退出数据库
        ```
     - 启动项目
        ```
          npm start  
        ```
      - 测试服务
        ```
          curl -H "Content-Type:application/json" -X POST -d '{"username":"18911681482", "password":"123456"}' http://localhost:8888/api/user/login
          // 若未创建，返回用户不存在即说明成功
        ```
- vue h5
    - 下载源码
        ```
          git clone https://github.com/yibiankeji/js-h5-vue.git   
        ```
    - 安装项目有关依赖
        ```
          cd js-h5-vue &&  npm install 
        ```
    - 启动项目
        ```
          npm start  
        ```
## 上线部署
项目代码里面并没有基于pm2上线部署的分享，这里只简单提一下，如有需要，请加我qq私聊。
### 配置服务器免密登陆
将本地Mac生成的公钥 添加到远程服务器
```
ssh-keygen
ssh-copy-id -i .ssh/id_rsa.pub 用户名@47.92.xx.xxx
```

### 安装pm2 
在本地电脑安装pm2工具
```
npm install -g pm2
```

### 初始化配置文件
```
pm2 ecosytem
```
记得改成json格式，后端参考的例子如下：
```
{
  apps : [
    {
      name: "server",
      script: "src/app.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],
  deploy : {
    production : {
      user: "xqart",
      host: "47.xx.xxx.xxx",
      ref: "origin/master",
      repo: "git@github.com:yibiankeji/js-server-koa.git ",
      path: "/home/study/server",
      "post-deploy": "git pull && npm install && pm2 start ecosystem.json --env production"
    }
  }
}

```
h5参考的例子如下：
```
{
  apps : [
    {
      name: "h5",
      script: "build/build.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],
  deploy : {
    production : {
      user : "xqart",
      host : "47.xx.xxx.xxx",
      ref  : "origin/master",
      repo : "git@github.com:yibiankeji/js-h5-vue.git",
      path : "/home/study/h5",
      "post-deploy" : "git pull && npm install && npm run build"
    }
  }
}


```
### 初始化远程服务器
```
pm2 deploy production setup
```
### 部署
在两个项目下分别执行：
```
pm2 deploy production
```
然后就可以在本地电脑一键部署到远程云服务器了！而对于nginx的安装和配置，这里就不多说了，具体看我简书关于部署的博客。