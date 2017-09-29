# 用browserify构建Hello world
## 使用
克隆程序，然后执行:
```
cd ./withBrowserify
yarn
node processToBrowser或npm run build
打开index.html即可查看源码
```
## 踩坑过程
开发步骤直接可参考[Getting started with npm and Browserify in a React project](https://codeutopia.net/blog/2016/01/25/getting-started-with-npm-and-browserify-in-a-react-project/)
下面主要是记录自己的一个历程
### ES6、react的jsx语法需要进行转译
```
yarn add react react-dom
yarn add babel-cli --dev
yarn add babel-preset-react babel-preset-es2015 --dev
```
.babelrc内容如下
```
{
  "presets": ["react", "es2015"]
}
```
转译js文件,--watch表示热修改，--out-file没有的话默认输出到控制台
```
babel ./src/index.js --watch --out-file ./out/build.js
```
### 浏览器还是不能识别build.js里的语法
> Uncaught ReferenceError: require is not defined

[Browserify：浏览器加载Node.js模块](http://javascript.ruanyifeng.com/tool/browserify.html)
使用[browserify](http://browserify.org/)转译
```
yarn add browserify --dev
yarn add babelify --dev
```
browserify.js内容，node执行此文件完成转译，终于能识别了
```javascript
var fs = require("fs");
var browserify = require("browserify");
browserify("./src/index.js")
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(fs.createWriteStream("./out/buildb.js"));
```
### render无法找到
改换react-dom的render就可以了
