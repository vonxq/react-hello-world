# 用browserify构建第一个React程序

## 使用
克隆程序，然后执行:
```
yarn
node processToBrowser或npm run build
打开index.html即可查看源码
```


## 第一个React程序(不含ES6)
好像如果不能在线加载依赖，不使用webpack程序都跑不起来，babel和node都会报jsx语法不能识别
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

### 整体源码

