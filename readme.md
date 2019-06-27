##webpack 4.0
安装

1. 初始化 npm init -y 生成 package.json
2. npm install webpack webpack-cli -D
   -D 表示开发环境

### webpack 目录结构

- src
 - indxe.js
 - a.css 
- webpack.config.js


## 建立 webpack 默认配置文件

> webpack.config.js

### webpack 命令

1. npx webpack 打包命令 会存在一些默认的配置 (打包不了 css,图标等)
2. 自己配置脚本命令 package.json  
   npm run build --> "build":"webpack"
   自动找默认配置文件：webpack.config.js
   yezui1314A

### module css,js,图片这些都被视为模块 但是除了 js css,图片等是不能直接解析 需要对应的 loader 去处理

- css->loader ->css-loader，style-loader
- less->loader->less-loader,css-loader，style-loader
- img ->loader ->file-loader/url-loader
- es6->es5 ->babel-loader

## css 处理

npm install css-loader style-loader
如果使用 less
npm install less less-loader
