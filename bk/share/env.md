---
title: 'JS全栈环境配置'
sidebar: auto
collapsable: true
---
# Mac系统下JS全栈环境配置

## 前言
俗话说，工欲善其事，必先利其器。所以，想从事js 全栈开发的朋友们，强烈建议大家买一台苹果笔记笔记本电脑，全新的Mac便宜的六千多就有了，二手三千多的也能满足要求了。因为Mac电脑不仅美观，满足日常办公和娱乐，而且对软件开发支持的很好，而且和Linux服务器环境也很像，需要Windows系统也可以通过虚拟机使用。

自从我使用过Mac进行软件开发后，我就再也不用Windows了，开发体验和效率都不错，如果上班的公司不提供Mac，我就用自己的。同时，我每去一个团队，都会尽量争取整个团队都使用Mac，甚至招人时也可会把是否熟练使用Mac进行开发作为重要考虑因素之一！

在此分享一下自己这几年使用Mac系统进行软件开发搭建环境的一些心得和建议吧。

## 配置终端
Terminal程序一般我都会放在快捷入口，然后把shell改为oh~my-zsh, 因为shell的类型有很多种，Mac默认的bash的功能虽然已经很强大，但提示功能不够强大，界面也不够炫。而zsh的功能极其强大，只是配置过于复杂，起初只有极客才在用。后来，有个穷极无聊的程序员创建了一个名为oh-my-zsh的开源项目...

从此，只需简单的安装配置，小白们就可以用上狂拽炫酷吊炸天的zsh,配置过程如下：

```
查看系统是否安装了zsh:
  cat /etc/shells 
Mac默认有，没有则安装：
  brew install zsh
查看当前系统的shell:
  echo $SHELL
不是zsh，则切换
  chsh -s /bin/zsh
安装oh my zsh:
  wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh
配置文件
  cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```

   然后把常用的Linux命令写到 .zshrc文件中：
```
vi ~/.zshrc
source ~/.zshrc
```
  建议大家把一些常用的命令写到.zshrc中：
```
vi ~/.zshrc
source ~/.zshrc
常用的命令：
alias vb="vi ~/.zshrc"
alias sb="source ~/.zshrc
alias ns="npm start"
alias nl="npm run lint"
alias nb="npm run build"
alias np="npm run deploy"
alias gcz="git cz"
alias ga="git add ."
alias gs="git status"
alias gp="git push"
alias gl="git pull"
alias gc="git clone"
alias gcd="git checkout dev"
alias gcm="git checkout master"
alias ni="npm install"
```

## 安装node和npm
最简单的就是使用braw install node, 但作为一个专业的js 码农，建议大家先安装nvm这个node版本管理工具, 维护多个版本的node将会是一件非常麻烦的事情，而nvm就是为解决这个问题而产生的：
```
  sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```
常用命令
```
nvm ls-remote // 查看node有哪些版本可以安装
nvm ls // 查看本地 所有安装的版本
nvm install node // 安装最新版 Node.js
nvm install --lts // 安装最新稳定版
nvm install v10.10.0 // 安装 node 10.10.0
nvm use v9.6.2 // 切换到node 9.6.2
```
一般安装node的时候,就会同时安装npm了，大家可以根据需要安装崭新的经过重新设计的npm客户端yarn。
```
sudo npm install -g yarn
```

## 安装编辑器vscode 
作为一个操作系统出生的js全栈工程师，我使用多的编辑器有很多，webstorm，sublime，atom以及vscode等，都不错，用习惯了都差不多，但是个人体验过之后，从稳定性和效率来看，对于js 全栈开发，还是推荐使用vscode。

相比atom经常因为插件而崩掉，vscode虽然是微软近几年才打造的轻量编辑器，目前来看插件质量还是不错的，且支持node后端调试，和Markdown预览，不用配置太多就能使用得顺心。

下载官网：
```
https://code.visualstudio.com/
```
安装好后，根据自己的需要添加一下常用的插件：
```
Auto Close Tag
Auto Rename Tag
Bracket Pair Colorizer
Color Highlight
HTML Snippets
HTML CSS Support
HTMLHint
file-icons
JavaScript (ES6) code snippets
Material Icon Theme
GitLens 
eslint
vueur
Vue 2 Snippets
Vue Peek
VueHelper
Node modules resolve
```

## 安装mysql
作为全栈开发，必须得和数据库打交道，这里只分享MySQL在Mac的两种方式安装方式, 5.7后的大版本直接跳到了8.0了，建议大家先使用5.7，且5.7后为了安全，首次安装会默认生成一个特别复杂的密码，需要在安装时记下或截图：

通过brew安装：
```
brew install mysql // 安装最新8.0以后的版本
brew install mysql@5.7 
```
通过官网下载安装包：
```
https://www.mysql.com/downloads/
选择最下面的MySQL Community Downloads
然后下载 MySQL Community Server
```

安装成功后 一般服务启动的设置，在Mac的系统设置的最下面。然后通过以下命令验证是否安装成功和服务使用正常：
```
mysql -u root -p
```

而其他软件的安装，比如react-native 或者 weex等，根据官网提示操作即可。