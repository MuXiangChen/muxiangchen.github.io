import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'
const __dirname = import.meta.dirname || getDirname(import.meta.url)

export default defineUserConfig({
  bundler: viteBundler(),
    base: '/',
    head: [['link', { rel: 'icon', href: '/images/heroicon.png' }]],
    title: '穆相臣的博客',
    theme: defaultTheme({
        logo: '/images/heroicon.png',
        navbar: [
          { text: '前端教程', link: '/Frontend/' },
          { text: '技术', link: '/TechDoc/' },
          { text: '设计', link: '/Design/' },
          { text: '产品', link: '/Products/' }
      ],
      sidebar: {
        '/Frontend/': [
          {
            text: '00-前端工具',
            prefix: '/00-前端工具/',
            children: [
              '/Frontend/00-前端工具/01-VS Code的使用.md',
              '/Frontend/00-前端工具/02-Git的使用.md',
              '/Frontend/00-前端工具/03-网络抓包和代理工具：Whistle.md',
              '/Frontend/00-前端工具/04-解决 Git 不区分大小写导致的文件冲突问题.md',
              '/Frontend/00-前端工具/Atom在前端的使用.md',
              '/Frontend/00-前端工具/chrome浏览器.md',
              '/Frontend/00-前端工具/Emmet in VS Code.md',
              '/Frontend/00-前端工具/GitHub的使用.md',
              '/Frontend/00-前端工具/iconMoon.md',
              '/Frontend/00-前端工具/Mac安装和配置iTerm2.md',
              '/Frontend/00-前端工具/Sublime Text在前端中的使用.md',
              '/Frontend/00-前端工具/VS Code的使用积累.md',
              '/Frontend/00-前端工具/WebStorm的使用.md'
            ]
          },
          {
            text: '01-HTML',
            children: [
              '/Frontend/01-HTML/01-认识Web和Web标准.md',
              '/Frontend/01-HTML/02-浏览器的介绍.md',
              '/Frontend/01-HTML/03-初识HTML.md',
              '/Frontend/01-HTML/04-HTML标签：排版标签.md',
              '/Frontend/01-HTML/05-HTML标签：字体标签和超链接.md',
              '/Frontend/01-HTML/06-HTML标签：图片标签.md',
              '/Frontend/01-HTML/07-html标签图文详解（二）.md',
              '/Frontend/01-HTML/08-HTML5详解.md',
              '/Frontend/01-HTML/09-HTML5举例：简单的视频播放器.md',
              '/Frontend/01-HTML/10-HTML5详解（二）.md',
              '/Frontend/01-HTML/11-HTML5详解（三）.md',
              '/Frontend/01-HTML/12-HTML基础回顾.md',
            ]
          },
          {
            text: '02-CSS基础',
            children: [
              '/Frontend/02-CSS基础/01-CSS属性：字体属性和文本属性.md',
              '/Frontend/02-CSS基础/02-CSS属性：背景属性.md',
              '/Frontend/02-CSS基础/03-CSS样式表和选择器.md',
              '/Frontend/02-CSS基础/04-CSS选择器：伪类.md',
              '/Frontend/02-CSS基础/05-CSS样式表的继承性和层叠性.md',
              '/Frontend/02-CSS基础/06-CSS盒模型详解.md',
              '/Frontend/02-CSS基础/07-浮动.md',
              '/Frontend/02-CSS基础/08-CSS属性：定位属性.md',
              '/Frontend/02-CSS基础/09-CSS案例讲解：博雅互动.md',
              '/Frontend/02-CSS基础/10-CSS3选择器详解.md',
              '/Frontend/02-CSS基础/11-CSS3属性详解（一）.md',
              '/Frontend/02-CSS基础/12-CSS3属性详解：动画详解.md',
              '/Frontend/02-CSS基础/13-CSS3属性：Flex布局图文详解.md',
              '/Frontend/02-CSS基础/14-CSS3属性详解：Web字体.md',
              '/Frontend/02-CSS基础/15-Sass入门.md',
              '/Frontend/02-CSS基础/16-浏览器的兼容性问题.md',
              '/Frontend/02-CSS基础/17-CSS3的常见边框汇总.md',
            ]
          },
          {
            text: '03-CSS进阶',
            children: [
              '/Frontend/03-CSS进阶/00-准备.md',
              '/Frontend/03-CSS进阶/01-CSS中的非布局样式.md',
              '/Frontend/03-CSS进阶/02-CSS布局.md',
              '/Frontend/03-CSS进阶/03-网页设计和开发中，关于字体的常识.md',
              '/Frontend/03-CSS进阶/04-如何让一个元素水平垂直居中？.md',
              '/Frontend/03-CSS进阶/CSS开发积累.md',
              '/Frontend/03-CSS进阶/CSS文章推荐.md',
              '/Frontend/03-CSS进阶/CSS的一些小知识.md',
              '/Frontend/03-CSS进阶/CSS面试题.md',
            ]
          },
          {
            text: '04-JavaScript基础',
            children: [
              '/Frontend/04-JavaScript基础/01-编程语言和JavaScript简介.md',
              '/Frontend/04-JavaScript基础/02-开始写JavaScript：hello world.md',
              '/Frontend/04-JavaScript基础/03-常量和变量.md',
              '/Frontend/04-JavaScript基础/04-标识符、关键字、保留字.md',
              '/Frontend/04-JavaScript基础/05-变量的数据类型：基本数据类型和引用数据类型.md',
              '/Frontend/04-JavaScript基础/06-基本数据类型：String 和 Boolean.md',
              '/Frontend/04-JavaScript基础/07-基本数据类型：Number.md',
              '/Frontend/04-JavaScript基础/08-基本数据类型：Undefined 和 Null.md',
              '/Frontend/04-JavaScript基础/09-数据类型转换.md',
              '/Frontend/04-JavaScript基础/10-运算符.md',
              '/Frontend/04-JavaScript基础/11-流程控制语句：选择结构（if和switch）.md',
              '/Frontend/04-JavaScript基础/12-流程控制语句：循环结构（for和while）.md',
              '/Frontend/04-JavaScript基础/13-对象简介.md',
              '/Frontend/04-JavaScript基础/14-基本包装类型.md',
              '/Frontend/04-JavaScript基础/15-内置对象 String：字符串的常见方法.md',
              '/Frontend/04-JavaScript基础/16-内置对象：Number和Math.md',
              '/Frontend/04-JavaScript基础/17-内置对象：Date.md',
              '/Frontend/04-JavaScript基础/18-数组简介.md',
              '/Frontend/04-JavaScript基础/19-数组的常见方法.md',
              '/Frontend/04-JavaScript基础/20-函数简介.md',
              '/Frontend/04-JavaScript基础/21-递归函数.md',
              '/Frontend/04-JavaScript基础/22-立即执行函数.md',
              '/Frontend/04-JavaScript基础/23-作用域、变量提升、函数提升.md',
              '/Frontend/04-JavaScript基础/24-预编译.md',
              '/Frontend/04-JavaScript基础/25-this指向.md',
              '/Frontend/04-JavaScript基础/26-闭包.md',
              '/Frontend/04-JavaScript基础/27-面向对象简介.md',
              '/Frontend/04-JavaScript基础/28-对象的创建&构造函数.md',
              '/Frontend/04-JavaScript基础/29-对象的基本操作.md',
              '/Frontend/04-JavaScript基础/30-浅拷贝和深拷贝.md',
              '/Frontend/04-JavaScript基础/31-对象的高级操作（待更新）.md',
              '/Frontend/04-JavaScript基础/32-原型链和原型继承（待更新）.md',
              '/Frontend/04-JavaScript基础/33-类和构造继承（待更新）.md',
              '/Frontend/04-JavaScript基础/34-正则表达式.md',
              '/Frontend/04-JavaScript基础/35-事件简介.md',
              '/Frontend/04-JavaScript基础/36-DOM简介和DOM操作.md',
              '/Frontend/04-JavaScript基础/37-通过style对象获取和设置行内样式.md',
              '/Frontend/04-JavaScript基础/38-offset相关属性和匀速动画（含轮播图的实现）.md',
              '/Frontend/04-JavaScript基础/39-scroll相关属性和缓动动画.md',
              '/Frontend/04-JavaScript基础/40-client（可视区）相关属性.md',
              '/Frontend/04-JavaScript基础/41-事件的绑定和事件对象Event.md',
              '/Frontend/04-JavaScript基础/42-事件的传播和事件冒泡.md',
              '/Frontend/04-JavaScript基础/43-事件委托.md',
              '/Frontend/04-JavaScript基础/44-键盘事件.md',
              '/Frontend/04-JavaScript基础/45-BOM简介和navigator.userAgent&History&Location.md',
              '/Frontend/04-JavaScript基础/46-定时器.md',
              '/Frontend/04-JavaScript基础/47-jQuery的介绍和选择器.md',
              '/Frontend/04-JavaScript基础/48-jQuery动画详解.md',
              '/Frontend/04-JavaScript基础/49-jQuery操作DOM.md',
              '/Frontend/04-JavaScript基础/50-jQuery的事件机制和其他知识.md',
              '/Frontend/04-JavaScript基础/51-Zepto入门.md',
              '/Frontend/04-JavaScript基础/BOM的常见内置方法和内置对象.md',
              '/Frontend/04-JavaScript基础/原型对象.md',
              '/Frontend/04-JavaScript基础/原型链.md',
              '/Frontend/04-JavaScript基础/常见代码解读.md',
            ]
          },
          {
            text: '05-JavaScript基础：ES6语法',
            children: [
              '/Frontend/05-JavaScript基础：ES6语法/01-ES5和ES6的介绍.md',
              '/Frontend/05-JavaScript基础：ES6语法/02-ES5中的严格模式.md',
              '/Frontend/05-JavaScript基础：ES6语法/03-ES5中的一些扩展.md',
              '/Frontend/05-JavaScript基础：ES6语法/04-ES6：变量 let、const 和块级作用域.md',
              '/Frontend/05-JavaScript基础：ES6语法/05-ES6：变量的解构赋值.md',
              '/Frontend/05-JavaScript基础：ES6语法/06-ES6：箭头函数.md',
              '/Frontend/05-JavaScript基础：ES6语法/07-剩余参数和扩展运算符.md',
              '/Frontend/05-JavaScript基础：ES6语法/08-字符串、数组、对象的扩展.md',
              '/Frontend/05-JavaScript基础：ES6语法/09-内置对象扩展：Set数据结构.md',
              '/Frontend/05-JavaScript基础：ES6语法/ES6：Symbol.md',

            ]
          },
          {
            text: '06-JavaScript基础：异步编程',
            children: [
              '/Frontend/06-JavaScript基础：异步编程/00-服务器分类及PHP入门.md',
              '/Frontend/06-JavaScript基础：异步编程/01-单线程和异步任务.md',
              '/Frontend/06-JavaScript基础：异步编程/02-Ajax入门和发送http请求.md',
              '/Frontend/06-JavaScript基础：异步编程/03-Ajax传输json和XML.md',
              '/Frontend/06-JavaScript基础：异步编程/04-同源和跨域.md',
              '/Frontend/06-JavaScript基础：异步编程/05-回调函数.md',
              '/Frontend/06-JavaScript基础：异步编程/06-Promise入门详解.md',
              '/Frontend/06-JavaScript基础：异步编程/07-Promise实例的方法.md',
              '/Frontend/06-JavaScript基础：异步编程/08-Promise的链式调用.md',
              '/Frontend/06-JavaScript基础：异步编程/09-Promise类的方法.md',
              '/Frontend/06-JavaScript基础：异步编程/10-async异步函数.md',
              '/Frontend/06-JavaScript基础：异步编程/11-异常处理方案.md',
              '/Frontend/06-JavaScript基础：异步编程/12-事件循环机制、宏任务和微任务.md',
              '/Frontend/06-JavaScript基础：异步编程/13-Promise的高级用法.md',
              '/Frontend/06-JavaScript基础：异步编程/14-Promise常见面试题.md',

            ]
          },
          {
            text: '07-JavaScript进阶',
            children: [
              '/Frontend/07-JavaScript进阶/01-var、let、const的区别.md',
              '/Frontend/07-JavaScript进阶/02-浅拷贝和深拷贝.md',
              '/Frontend/07-JavaScript进阶/03-迭代器和生成器.md',
              '/Frontend/07-JavaScript进阶/call、apply、bind的区别.md',
              '/Frontend/07-JavaScript进阶/JavaScript开发积累.md',
              '/Frontend/07-JavaScript进阶/Promise的一些题目.md',
              '/Frontend/07-JavaScript进阶/this.md',
              '/Frontend/07-JavaScript进阶/作用域.md',
              '/Frontend/07-JavaScript进阶/创建对象和继承.md',
              '/Frontend/07-JavaScript进阶/数据的赋值.md',
              '/Frontend/07-JavaScript进阶/数组的进阶操作.md',
              '/Frontend/07-JavaScript进阶/高阶函数.md',

            ]
          },
          {
            text: '08-前端基本功：CSS和DOM练习',
            children: [
              '/Frontend/08-前端基本功：CSS和DOM练习/01-CSS基础练习：JD首页的制作（顶部和底部）.md',
              '/Frontend/08-前端基本功：CSS和DOM练习/02-CSS基础练习：JD首页的制作（快捷导航部分）.md',
              '/Frontend/08-前端基本功：CSS和DOM练习/03-DOM操作练习：基础练习.md',
              '/Frontend/08-前端基本功：CSS和DOM练习/04-DOM操作练习：Tab栏切换（通过className设置样式）.md',
              '/Frontend/08-前端基本功：CSS和DOM练习/05-DOM操作练习：访问关系的封装.md',
              '/Frontend/08-前端基本功：CSS和DOM练习/07-DOM操作练习：innerHTML的方式创建元素.md',

            ]
          },
          {
            text: '09-移动Web开发',
            children: [
              '/Frontend/09-移动Web开发/01-Bootstrap入门.md',
              '/Frontend/09-移动Web开发/02-Bootstrap使用.md',
              '/Frontend/09-移动Web开发/03-Less详解.md',

            ]
          },
          {
            text: '10-MySQL数据库',
            children: [
              '/Frontend/10-MySQL数据库/01-数据库的基础知识.md',
              '/Frontend/10-MySQL数据库/02-MySQL的安装和Navicat软件使用.md',
              '/Frontend/10-MySQL数据库/03-MySQL的基本操作.md',
              '/Frontend/10-MySQL数据库/04-MySQL字段的数据类型.md',
              '/Frontend/10-MySQL数据库/05-MySQL数据库的常用命令.md',
              '/Frontend/10-MySQL数据库/MySQL设计三大范式.md',
              '/Frontend/10-MySQL数据库/事务.md',

            ]
          },
          {
            text: '11-Node.js',
            children: [
              '/Frontend/11-Node.js/01-Node.js介绍.md',
              '/Frontend/11-Node.js/02-Node.js的特点.md',
              '/Frontend/11-Node.js/03-Node.js开发环境安装.md',
              '/Frontend/11-Node.js/04-Node.js模块化规范：CommonJS.md',
              '/Frontend/11-Node.js/05-Node.js内置模块：fs文件模块.md',
              '/Frontend/11-Node.js/06-Node.js内置模块：path路径模块.md',
              '/Frontend/11-Node.js/07-Node.js操作MySQL数据库.md',
              '/Frontend/11-Node.js/CommonJS.md',
              '/Frontend/11-Node.js/ES6.md',
              '/Frontend/11-Node.js/JavaScript模块化：AMD.md',
              '/Frontend/11-Node.js/JavaScript模块化：CMD.md',
              '/Frontend/11-Node.js/JavaScript模块化：ES6.md',
              '/Frontend/11-Node.js/KOA2.md',
              '/Frontend/11-Node.js/Node.js代码举例.md',
              '/Frontend/11-Node.js/WebSocket.md',
              '/Frontend/11-Node.js/事件驱动和非阻塞机制.md',

            ]
          },
          {
            text: '12-Vue基础',
            children: [
              '/Frontend/12-Vue基础/01-Vue的介绍和vue-cli.md',
              '/Frontend/12-Vue基础/02-Vue的系统指令.md',
              '/Frontend/12-Vue基础/03-v-on的事件修饰符.md',
              '/Frontend/12-Vue基础/04-Vue的系统指令(二).md',
              '/Frontend/12-Vue基础/05-Vue的举例：列表功能.md',
              '/Frontend/12-Vue基础/06-自定义过滤器：时间格式化举例.md',
              '/Frontend/12-Vue基础/07-自定义按键修饰符&自定义指令.md',
              '/Frontend/12-Vue基础/08-Vue实例的生命周期函数.md',
              '/Frontend/12-Vue基础/09-Vue中的Ajax请求.md',
              '/Frontend/12-Vue基础/10-Vue动画.md',
              '/Frontend/12-Vue基础/11-Vue组件的定义和注册.md',
              '/Frontend/12-Vue基础/12-Vue组件之间的传值.md',
              '/Frontend/12-Vue基础/13-Vue-router路由.md',
              '/Frontend/12-Vue基础/Vue-router路由.md',
              '/Frontend/12-Vue基础/Vue.js在开发中的常见写法积累.md',
              '/Frontend/12-Vue基础/Vue开发积累.md',
              '/Frontend/12-Vue基础/Vue组件.md',

            ]
          },
          {
            text: '13-React基础',
            children: [
              '/Frontend/13-React基础/01-React介绍.md',
              '/Frontend/13-React基础/02-JSX语法介绍.md',
              '/Frontend/13-React基础/03-React组件（一）：生命周期.md',
              '/Frontend/13-React基础/04-React组件（二）：常见属性和函数.md',
              '/Frontend/13-React基础/05-React中绑定this并给函数传参的几种方式.md',
              '/Frontend/13-React基础/06-React的单向数据绑定.md',
              '/Frontend/13-React基础/07-React路由的使用.md',
              '/Frontend/13-React基础/08-Ant Design的基本使用.md',
              '/Frontend/13-React基础/09-AntD框架的upload组件上传图片时遇到的一些坑.md',
              '/Frontend/13-React基础/10-AntD框架的upload组件上传图片时使用customRequest方法自定义上传行为.md',
              '/Frontend/13-React基础/11-React Navive初识.md',

            ]
          },
          {
            text: '14-前端性能优化',
            children: [
              '/Frontend/14-前端性能优化/00-前端性能优化认知.md',
              '/Frontend/14-前端性能优化/01-前端性能分析工具和指标.md',
              '/Frontend/14-前端性能优化/02-浏览器渲染机制.md',
              '/Frontend/14-前端性能优化/03-渲染优化.md',
              '/Frontend/14-前端性能优化/04-静态资源优化.md',
              '/Frontend/14-前端性能优化/05-页面渲染性能优化.md',
              '/Frontend/14-前端性能优化/lazyload&防抖动和节流阀.md',

            ]
          },
          {
            text: '15-前端工程化',
            children: [
              '/Frontend/15-前端工程化/01-前端代码规范.md',
              '/Frontend/15-前端工程化/02-前端书籍推荐.md',
              '/Frontend/15-前端工程化/Vue开发积累.md',
              '/Frontend/15-前端工程化/前端工程化.md',
              '/Frontend/15-前端工程化/前端常见专有名词.md',
              '/Frontend/15-前端工程化/前端的几道题目.md',
              '/Frontend/15-前端工程化/前端监控技术.md',
              '/Frontend/15-前端工程化/数组的常见操作.md',

            ]
          },
          {
            text: '16-前端综合',
            children: [
              '/Frontend/16-前端综合/01-2022年Web前端开发流程和学习路线（详尽版）.md',
              '/Frontend/16-前端综合/02-2022年Web前端入门自学路线（精简版）.md',
              '/Frontend/16-前端综合/2018年-前端日记.md',
              '/Frontend/16-前端综合/2019年-前端日记.md',
              '/Frontend/16-前端综合/2020年-前端日记.md',
              '/Frontend/16-前端综合/2022年-前端日记.md',
              '/Frontend/16-前端综合/2024年-前端日记.md',
              '/Frontend/16-前端综合/ajax相关.md',
              '/Frontend/16-前端综合/CSS开发总结.md',
              '/Frontend/16-前端综合/Express.md',
              '/Frontend/16-前端综合/html相关.md',
              '/Frontend/16-前端综合/json字符串的解析和遍历.md',
              '/Frontend/16-前端综合/json相关.md',
              '/Frontend/16-前端综合/上海有哪些IT互联网大厂.md',
              '/Frontend/16-前端综合/前端分享群整理.md',
              '/Frontend/16-前端综合/前端博客推荐.md',
              '/Frontend/16-前端综合/前端开发积累.md',
              '/Frontend/16-前端综合/前端语录.md',
              '/Frontend/16-前端综合/北京有哪些IT互联网大厂.md',
              '/Frontend/16-前端综合/模板引擎.md',
              '/Frontend/16-前端综合/深圳有哪些IT互联网大厂.md',
              '/Frontend/16-前端综合/网友对本项目提的建议.md',

            ]
          },
          {
            text: '17-资源推荐',
            children: [
              '/Frontend/17-资源推荐/01-前端书籍推荐.md',
              '/Frontend/17-资源推荐/02-Web前端最新导航.md',
              '/Frontend/17-资源推荐/03-前端学习资源推荐.md',
              '/Frontend/17-资源推荐/04-前端大佬名单.md',
              '/Frontend/17-资源推荐/05-前端GitHub项目整理.md',
              '/Frontend/17-资源推荐/06-前端文章推荐.md',
              '/Frontend/17-资源推荐/2018-推荐文章.md',
              '/Frontend/17-资源推荐/2019-推荐文章.md',
              '/Frontend/17-资源推荐/2020-推荐文章.md',
              '/Frontend/17-资源推荐/2022-推荐文章.md',

            ]
          },
        ]
      } 
    })
  
  })