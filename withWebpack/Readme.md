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
## 添加CSS加载功能
webpack加载css功能
css-loader能识别CSS文件
style-loader能加载CSS的style样式
** 注意: loader一定是style-loader在前（webpack的配置从右往左，style-loader写在前能保证css解析后style再被包裹），否则会报错(Module build failed: Unknown word) **
> css-loader是允许webpack识别.css的文件
style-loader是将webpack识别完的css文件中的内容，在编译完运行文件的时候，将这些css用style标签包起来嵌在head内

注: 行内样式的识别加载不需要任何loader
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