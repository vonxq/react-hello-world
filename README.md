# 三种方式实现React的Hello world
主要是想理解一下各个工具作用，也再复习一下流程
[Webpack、Browserify和Gulp三者之间到底是怎样的关系？](https://www.zhihu.com/question/37020798)
## 最简单的Hello world
justHtml下index.html，浏览器打开即可看到
在线加载了react、react-dom、babel三个库
这个程序也说明React确实是个library
## webpack构建Hello World
### 使用
克隆程序，然后执行:
```
cd ./withWebpack
yarn
node processToBrowser或npm run build
打开index.html即可查看源码
```
具体踩坑过程看文件夹里面的Readme

## 用browserify构建Hello world
做这个主要是想弄清楚webpack在React程序构建时的作用及必须性，脚手架直接集成了webpack，很多不能理解
### 使用
克隆程序，然后执行:
```
cd ./withBrowserify
yarn
node processToBrowser或npm run build
打开index.html即可查看源码
```
具体踩坑过程看文件夹里面的Readme
