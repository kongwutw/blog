# Linux 入门
本文将分享Linux的基础教程及常用命令。

## 什么是Linux？
Linux是三种主流的操作系统之一，其他两种是我们熟知的windows系统和Mac系统，普通大众一般不知道，因为Linux更多的是应用于服务器上。
它是一套免费使用和自由传播的类Unix操作系统，并且继承了Unix以网络为核心的设计思想。

## 什么是终端？
怎样看出电影中哪个人是电脑大神？就是看他是不是在用终端。操作系统分为两个部分：
- 内核：负责系统的全部逻辑操作，由海量命令组成；
- 用户交互界面：开机之后所有我们所看到的东西，比如窗口，软件等

终端就是连接内核与交互界面的这座桥，它允许用户在交互界面上打开一个叫做「Terminal 终端」的应用程序，在其中输入命令，系统会直接给出反馈。

## 如何打开终端？ 
- 对于Windows，win10以下版本，不支持Linux风格的terminal，一般需要安装git bash, 里面集成了大多数的Linux命令；
- 对于Mac 系统，有如下三种打开方式：首先，F4 去找 到对应的 图标， 其次，可以在搜索框 输入Terminal，最后可以把把固定到 面板，经常使用的话 会 特别 便利。

## 什么是命令？
命令就是 你告诉电脑希望它做什么的 那句话，分为：
- 系统自带命令，如ls，cd等命令；
- 需要安装才能使用的命令，如node和npm等命令；

## 什么是路径？
当你需要使用终端对文件夹进行操作时，终端需要你告诉它，你想要修改的文件在哪里，这时我们需要了解路径的概念。系统中的每一个文件都有一个存放位置，这一存放位置就称作路径。

终端启动后，它的默认路径在当前用户文件夹的根目录上，为了确定这一点，你可以输入 pwd 命令来查看当前路径。若你想改变当前路径，则可以输入 cd /其他文件夹

但路径其实分为两种：
- 相对路径：路径的最前面为一个点(代表当前路径)或两个点(代表当前路径的上一路径)， 如'./', '../static'等；
- 绝对路径：路径的最前面只为'/'，如'/root/static', '/home/user';

## 常用Linux命令？
- ls 查看目录下包含的文件或目录；
- pwd 在终端打印当前 目录；
- cd 切换路径；
- mkdir 创建目录；
- touch 创建文件
- rm 删除文件或目录，删除目录时需要加 -rf 参数；
- mv 移动文件或目录，在当前目录下移动时为 修改名字；
- ssh 登录远程服务器；
- npm install 安装node项目依赖；
- git pull 从远程仓库 拉取最新代码；
- man 超级命令 去查看的有关命令的介绍。

linux系统自带和可安装使用的终端命令很多很多，我们只介绍了最常用的几个命令，其他命令用到时去查即可。

## 统一配置terminal
把terminal放在mac的快捷入口，然后把shell改为oh~my-zsh, 因为shell的类型有很多种，Mac默认的bash的功能虽然已经很强大，但提示功能不够强大，界面也不够炫。

而zsh的功能极其强大，只是配置过于复杂，起初只有极客才在用。后来，有个穷极无聊的程序员创建了一个名为oh-my-zsh的开源项目...

从此，只需简单的安装配置，小白们就可以用上狂拽炫酷吊炸天的zsh,配置过程如下：
```
查看系统是否安装了zsh:
  cat /etc/shells 
Mac默认有，没有则安装：
  brew install zsh
查看当前系统的shell:
  echo $SHELL
不是zsh，则切换
  chsh -s /bin/zsh
安装oh my zsh:
  sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
配置文件
  cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc
```
   然后把常用的Linux命令写到 .zshrc文件中：
```
vi ~/.zshrc
// 编辑后需要提交才生效
source ~/.zshrc
```
  比如我们团队的.zshrc配置如下：
```
export ZSH=$HOME/.oh-my-zsh
ZSH_THEME="robbyrussell"
plugins=(git)
source $ZSH/oh-my-zsh.sh

alias vb="vi ~/.zshrc"
alias sb="source ~/.zshrc"

alias ni="npm install"
alias ns="npm start"
alias nl="npm run lint"
alias nb="npm run build"
alias nd="npm run dev"
alias npd="npm run pd"
alias ndd="npm run td"

alias ga="git add ."
alias gs="git status"
alias gp="git push"
alias gl="git pull"
alias gr="git reset --hard"
alias gc="git clone"
alias gcd="git checkout dev"
alias gcm="git checkout master"
alias gst="git stash"
alias gsp="git stash pop"

alias cp="cd ~/kpl"
alias cpv="cd ~/kpl/vue"
alias cpm="cd ~/kpl/uni"

alias cvm="cd ~/kpl/vue/vue-music-class"
alias cvs="cd ~/kpl/vue/ops_client"
```



