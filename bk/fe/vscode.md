# 推荐 vscode
作为一个操作系统出生的js全栈工程师，我使用多的编辑器有很多，webstorm，sublime，atom以及vscode等，都不错，用习惯了都差不多，但是个人体验过之后，从稳定性和效率来看，对于js 全栈开发，还是推荐使用vscode。

相比atom经常因为插件而崩掉，vscode虽然是微软近几年才打造的轻量编辑器，目前来看插件质量还是不错的，且支持node后端调试，和Markdown预览，不用配置太多就能使用得顺心。
## vscode 的特点
+ 开源，免费；
+ 自定义配置
+ 集成git
+ 智能提示强大
+ 支持各种文件格式
+ 调试功能强大
+ 各种方便的快捷键
+ 强大的插件扩展

## mac常用快捷键
+ 全局

Command + Shift + P / F1 显示命令面板

Command + Shift + F 全局搜索关键字

Command + P 搜索文件

Command + Shift + N 打开新窗口

Command + Shift + W 关闭窗口

Command + N 新建文件
+ 基本

Control + ` 打开关闭终端

Control + Command + F 文件内查找替换

Command + \ 分屏

Command + B 关闭打开左边文件列表

shift + Option + F 格式化代码

Option + Up 或 option + Down 向上或向下移动一行

Shift + Option + Up 或 Shift + Option + Down  向上或向下复制一行


## 下载官网：
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
TabNine
```

## 常用配置

+ 配置代码模板

首选项 > 用户代码片段 > 新建代码片段

vue模板
```
{
	"Print to console": {
		"scope": "javascript,typescript",
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	},
	"Create vue template": {
		"prefix": "vue",
		"body": [
				"<template>",
				"	<div></div>",
				"</template>",
				"<script>",
				"export default {",
				"  name: \"${1:component_name}\",",
				"  data () {",
				"    return {",
				"    };",
				"  },",
				"  created() {",
				"  },",
				"  components: {",
				"  },",
				"  methods: {",
				"  }",
				"}",
				"</script>",
				"<style lang=\"${2:less}\" scoped>",
				"</style>"
		],
	}
}
```

+ 保存时自动修复ESlint错误

code > 首选项 -> 设置 -> 用户设置 -> 拓展 -> ESlint -> 点击“在setting.json”中编辑
```
    {
        "workbench.editor.enablePreview": false, //打开文件不覆盖
        "search.followSymlinks": false, //关闭rg.exe进程
        "editor.minimap.enabled": false, //关闭快速预览
        "liveServer.settings.donotShowInfoMsg": true, //关闭liveserver提示
        "files.autoSave": "afterDelay", //打开自动保存
        "editor.fontSize": 16, //设置文字大小
        "editor.lineHeight": 24, //设置文字行高
        "editor.lineNumbers": "on", //开启行数提示
        "editor.quickSuggestions": { //开启自动显示建议
            "other": true,
            "comments": true,
            "strings": true
        },
        "workbench.colorTheme": "Darcula Theme from IntelliJ", //指定工作台中使用的颜色主题
        "window.zoomLevel": 0, // 调整窗口的缩放级别
        "editor.tabSize": 2, //制表符符号eslint
        "editor.formatOnSave": true, //每次保存自动格式化
        "eslint.autoFixOnSave": true, // 每次保存的时候将代码按eslint格式进行修复
        "prettier.eslintIntegration": true, //让prettier使用eslint的代码格式进行校验
        "prettier.semi": false, //去掉代码结尾的分号
        "prettier.singleQuote": true, //使用带引号替代双引号
        "javascript.format.insertSpaceBeforeFunctionParenthesis": true, //让函数(名)和后面的括号之间加个空格
        "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
        "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
        "vetur.format.defaultFormatterOptions": {
            "js-beautify-html": {
                "wrap_attributes": "force-aligned" //属性强制折行对齐
            }
        },
        "eslint.validate": [ //开启对.vue文件中错误的检查
            "javascript",
            "javascriptreact",
            {
                "language": "html",
                "autoFix": true
            },
            {
                "language": "vue",
                "autoFix": true
            }
        ],
    }
```