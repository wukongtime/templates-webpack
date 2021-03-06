#### 常用依赖
* axios    axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端。
* babel-polyfill      防止ie 报这个错 vuex requires a Promise polyfill in this browser。polyfill指的是“用于实现浏览器不支持原生功能的代码”，比如，现代浏览器应该支持fetch函数，对于不支持的浏览器，网页中引入对应fetch的polyfill后，这个polyfill就给全局的window对象上增加一个fetch函数，让这个网页中的JavaScript可以直接使用fetch函数了，就好像浏览器本来就支持fetch一样。
* bootstrap  简洁、直观、强悍的前端开发框架。
* echarts  使用 JavaScript 实现的开源可视化库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的矢量图形库 ZRender，提供直观，交互丰富，可高度个性化定制的数据可视化图表。
* less  Less 是一门CSS 预处理语言，它扩展了CSS 语言，增加了变量、Mixin、函数等特性。
* less-loader		将less编译为css。
* css-loader		css-loader使我们可以在程序中require CSS文件，将css文件当做模块来处理。同时也会遍历 CSS 文件，找到其中的@import与url（），当作css依赖的模块并处理它们。
* style-loader	通过注入style标签将CSS添加到DOM
* element-ui     饿了么开源的一套公共组建
* iview    开源的公共组建
* eslint  是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。
* eslint-plugin-vue  vue官方的eslint插件
* lodash  是一个一致性、模块化、高性能的 JavaScript 实用工具库
* mockjs  Mock.js生成随机数据,拦截Ajax 请求 开始 前后端分离 让前端攻城师独立于后端进行开发。 增加单元测试的真实性 通过随机数据,模拟各种场景。
* moment  是一个 JavaScript 日期处理类库,用于解析、检验、操作、以及显示日期
* vue  前端框架
* vue-router  是Vue.js 官方的路由管理器。它和Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。
* vuex  是一个专为 Vue.js 应用程序开发的状态管理模式。
* vuex-persistedstate		使用了 HTML 5中的 localStorage 来做缓存，这样在刷新页面后之前 state 的数据不会丢失,与vuex配合使用
* autoprefixer		css自动补全前缀，它可以解析CSS文件并且添加浏览器前缀到CSS内容里，使用Can I Use（caniuse网站）的数据来决定哪些前缀是需要的。
* webpack  是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。
* babel 是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
* extract-text-webpack-plugin 该插件的主要是为了抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象.
* html-webpack-plugin  为html文件中引入的外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题;可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口
#### 项目结构
![](./_image/1528780934071.jpg)




 
 
