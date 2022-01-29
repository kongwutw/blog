# pm2 部署 

## 关于pm2
开发时，我们需要npm run …来启动一个node项目，如果终端被关掉，程序跟着停止，特别是启动多个项目时，多有不便，特别是部署到线上的时候，如果报错了可能直接终止整个运行，supervisor或nodemon一般只用在开发环境的。

而线上我们一般使用PM2，它是带有负载均衡功能的node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等。

### 安装pm2
打开我们本地的终端，输入如下命令登录远程服务器：
```
ssh 用户名@云服务器IP地址
// 例子 ssh root@173.123.34.55
```
或者
```
vi ~/.ssh/config
// 添加如下内容
Host test
  HostName 172.**6.122.***
  User root
  Port 53808
// 此时通过 ssh test 也可以访问，Port一般默认为22
```
之后输入密码，登录成功后输入下面命令，-g是安装到全局(若提示npm命令不存在，则需要安装node或是环境配置有问题)：
```
npm install -g pm2
```
### 常用命令：
- 启动:  pm2 start app.js
- 停止：pm2 stop app_name|app_id
- 停止所有：pm2 stop all
- 重启：pm2 restart app_name|app_id
- 删除：pm2 delete app_name|app_id
- 查看某一个进程的信息：pm2 describe app_name|app_id
- 查看所有的进程：pm2 list
- 查看所有的进程状态：pm2 status

## 本地一键自动部署
### 配置免密登录
将本地Mac生成的公钥 添加到远程服务器
```
ssh-keygen
ssh-copy-id -i .ssh/id_rsa.pub 用户名@47.92.xx.xxx
```
或者
```
cat ~/.ssh/id_rsa.pub
// 复制内容后登录服务器添加到如下文件
vi ~/.ssh/authorized_keys
```

### 初始化配置文件
```
pm2 ecosystem
```
编辑，ecosystem.json文件，参考的例子如下：
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
      repo : "git@gitee.com:kongwutw/xqart-h5-vue.git",
      path : "/home/xqart/h5",
      "post-deploy" : "git pull"
    }
  }
}

```
### 初始化远程服务器
```
pm2 deploy production setup
```
### 部署到服务器
在项目根目录下执行：
```
pm2 deploy production
``