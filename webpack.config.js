//webpack 是基于node的
let path = require("path");
module.exports = {
  mode: "production", //开发模式（写代码）development  生产模式（打包） production
  entry: "./src/index.js", //入口 可以是相对路径,
  output: {
    //出口 不配置默认打包出来的是dist文件夹 打包出来的js叫做main.js
    path: path.resolve(__dirname, "dist"), //必须是绝对路径，
    filename: "bundle.js" //打包出来的文件名称
  },
  //用来处理模块
  module:{
	  //ruel 规则 rules 复数 很多规则 每一条规则都是个对象
    rules:[
		{
         test:/\.css$/,  //匹配文件 正则
		 use:["style-loader","css-loader"]   //表示使用什么样loader css-loader 负责解析require/import 语法的  style-loader 负责把css变成内联样式  执行顺序从右往左 
		 //所以我们需要先解析语法在插入内联样式 
		}
	]
  }
};
