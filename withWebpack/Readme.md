# webpack构建HelloWorld
webpack和browserify在HelloWorld程序上作用是一样的，都是将源文件转译并输出
## 使用
克隆程序，然后执行:
```
cd ./withWebpack
yarn
npm run build
打开index.html即可查看源码
```
具体踩坑过程看文件夹里面的Readme
# 
## package包说明
### babel
babel-core 调用Babel的API进行转码,若没有的话babel将会报错:
```
Unknown option: D:\code\github\react-hello-world\withWebpa
ck\.babelrc.presets
```
babel-loader 供webpack调用的loader
babel-preset-es2015 用于解析 ES6
babel-preset-react 用于解析 JSX

## 相关知识
建一个webpack的配置文件，运行:
```
webpack --config webpack.dev.config.js
```