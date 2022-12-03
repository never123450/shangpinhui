
1:vue-cli脚手架初始化项目。
node + webpack +淘宝镜像
node_modules 文件夹:项目依赖文件夹
public文件夹:一般放置一些静态资源(图片)，需要注意，放在public文件夹中的静态资源，webpack进行打包的时候，会原封不动打包到dist文件夹中。

src文件夹(程序员源代码文件夹):
    assets文件夹:一般也是放置静态资源(一般放置多个组件共用的静态资源)，需要注意，放置在assets文件夹里面静态
    资源，在webpack打 包的时候，webpack 会把静态资源当做-一个模块， 打包JS文件里面。
    components文件夹:一般放置的是非路由组件(全局组件)
    App.vue:唯一的根组件， Vue当中的组件( .vue)
    main.js:程序入口文件，也是整个程序当中最先执行的文件

babel.config.js:配置文件(babe1相关)
package.json文件:认为项目“身份证’，记录项目叫做什么、项目当中有哪些依赖、项目怎么运行。
package-lock.json:缓存性文件
README.md:说明性文件


1)要求
1.1：每一天老师书写代码务必三遍
1.2:node + webpack + VScode + 谷歌浏览器 + git
1.3:数组的方法 + promise + await + async + 模块化........

2)脚手架使用
2: vue init webpack 项目的名字
3|4：vue create 项目名称
脚手架目录:public + assets文件夹区别
node_modules:放置项目依赖的地方
public:一般放置一些共用的静态资源，打包上线的时候，public文件夹里面资源原封不动打包到dist文件夹里面
src：程序员源代码文件夹
  -----assets文件夹：经常放置一些静态资源（图片），assets文件夹里面资源webpack会进行打包为一个模块（js文件夹里面）
  -----components文件夹:一般放置非路由组件（或者项目共用的组件）
        App.vue 唯一的根组件
        main.js 入口文件【程序最先执行的文件】
        babel.config.js:babel配置文件
        package.json：看到项目描述、项目依赖、项目运行指令
        README.md:项目说明文件
  

3)脚手架下载下来的项目稍微配置一下
3.1:浏览器自动打开
        在package.json文件中
        "scripts": {
         "serve": "vue-cli-service serve --open",
          "build": "vue-cli-service build",
          "lint": "vue-cli-service lint"
        },



3.2关闭eslint校验工具
创建vue.config.js文件：需要对外暴露
module.exports = {
   lintOnSave:false,
}
3.3 src文件夹的别名的设置
因为项目大的时候src（源代码文件夹）：里面目录会很多，找文件不方便，设置src文件夹的别名的好处，找文件会方便一些
创建jsconfig.json文件
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"
            ]
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}


4:项目上传GIT
微信小程序实战课的时候，会带着大家玩耍的
注意:前面基础课程当中，创建分支、处理冲突等等
https://gitee.com/jch1011/shangpinhui_0607.git






5）路由的配置
vue-router
路由分为KV

node平台（并非语言）
对于后台而言:K即为URL地址   V即为相应的中间件
http://localhost:8080/0607
app.get("/0607",(res,req)=>{
   res.send('我是祖国的老花骨朵');
});


前端路由:
K即为URL（网络资源定位符）
V即为相应的路由组件


5.1路由的一个分析
确定项目结构顺序:上中下 -----只有中间部分的V在发生变化，中间部分应该使用的是路由组件
2个非路由组件|四个路由组件
两个非路由组件：Header 、Footer
路由组件:Home、Search、Login（没有底部的Footer组件，带有二维码的）、Register（没有底部的Footer组件，带二维码的）

5.2安装路由
 cnpm install --save vue-router 
--save:可以让你安装的依赖，在package.json文件当中进行记录
5.3创建路由组件【一般放在views|pages文件夹】
5.4配置路由，配置完四个路由组件



5.2总结
路由组件与非路由组件的区别?
1:路由组件般放 置在pages |views文件夹，非路由组件 ”般放置components文件夹中
2:路由组件一般需要在router文件夹中进行注册(使用的即为组件的名字)，非路由组件在使用的时候，一般都是以标签的形式使用
3:注册完路由，不管路由路由组件、还是非路由组件身上都有$route、 $router属性
$route:般获取路由信息 [路径、query、params 等等]
$router:一般进行编程式导航进行路由跳转[ push|replace]
5.3路由的跳转?
路由的跳转有两种形式:
声明式导航router-link，可以进行路由的跳转
编程式导航push |replace,可以进行路由跳转
编程式导航:声明式导航能做的，编程式导航都能在，
但是编程式导航除了可以进行路由跳转，还可以做-些其他的业务逻辑。

6)创建非路由组件（2个：Header、Footer）

非路由组件使用分为几步:
第一步：定义
第二步：引入
第三步：注册
第四步:使用

非路由组件的结构的搭建：
前台项目的结构与样式不需要自己写的，老师准备好了
辉洪老师静态页面：
结构 + 样式 +图片资源

项目采用的less样式,浏览器不识别less语法，需要一些loader进行处理，把less语法转换为CSS语法

1：安装less less-loader@5
切记less-loader安装5版本的，不要安装在最新版本，安装最新版本less-loader会报错，报的错误setOption函数未定义

2:需要在style标签的身上加上lang="less",不添加样式不生效






7)路由的跳转
路由的跳转就两种形式：声明式导航（router-link：务必要有to属性）
                    编程式导航push||replace
编程式导航更好用：因为可以书写自己的业务逻辑





面试题：v-show与v-if区别?
v-show:通过样式display控制
v-if：通过元素上树与下树进行操作
面试题:开发项目的时候，优化手段有哪些?
1:v-show|v-if
2:按需加载
8)首页|搜索底部是有Footer组件，而登录注册是没有Footer组件
Footer组件显示|隐藏，选择v-show|v-if
路由元信息



9）路由传参
params参数：路由需要占位，程序就崩了，属于URL当中一部分
query参数：路由不需要占位，写法类似于ajax当中query参数
路由传递参数先关面试题
     1:路由传递参数（对象写法）path是否可以结合params参数一起使用?
        不可以：不能这样书写，程序会崩掉
     2:如何指定params参数可传可不传? 
        在配置路由的时候在参数后面加'?'
     3:params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
        如果指定name与params配置, 但params中数据是一个"", 无法跳转，路径会出问题   用 undefined 解决路径问题,传空串 name 不会带上
     5: 路由组件能不能传递props数据?
        可以
        ①布尔值写法:params
        props:true
        ②对象写法:额外的给 路由组件传递一些 props
        props:{a:1,b:2}
        ③函数写法:可以 params 参数,query参数,通过 props 传递给组件
        props:($route)=>{
            return{keyword:$route.params.ketword,k:$route.params.k}
        }
     




















     
    


