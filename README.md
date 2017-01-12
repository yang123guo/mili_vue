# mili_vue
一个模仿app"米粒夺宝"的练习项目（米粒夺宝App  版本2.1.8）

## 使用的技术栈
vue2 vue-router ES6 vuex vue-axios 以及一些周边插件<br />
插件 例如：vue-axios vue-swipe

## 运行
``` bash
npm install   ----- 安装依赖
npm run dev   ----- 在localhost:8899运行
```

## 目录结构
<pre>

│  .editorconfig            # 统一的代码格式
│  .gitignore               # git操作push时候忽略的文件  
│  .babelrc                 # babel的query配置项
│  index.html               # 首页
│  package.json             # 项目配置
│  README.md                # 项目说明
│ 
├─dist                      #上线文件 暂无
│  
├─src                       
│  │  app.js                # 启动配置，配置路由，过滤器
│  │  App.vue               # 主vue│ 
│  │  
│  ├─assets                 # 静态文件
│  │  ├─css                 # 公共外来样式
│  │  ├─images              # 图片
│  │  └─font                # iconfont
│  │   
│  ├─common                 # 公共js
│  │  ├─constant            # 公共数据来源
│  │  ├─utils               # 公共配置
│  │  └─mixin               # mixin
│  │   
│  ├─components             # 组件
│  │       
│  ├─filters                # 过滤器            
│  │
│  ├─jsons                  # mock的json数据
│  │
│  ├─lib                    # 外来库的引入
│  │
│  ├─router                 # 路由
│  │
│  ├─services               # ajax服务地址                     
│  │
│  ├─store                  # vuex状态管理s
│  │
│  ├─stylus                 # 页面的styl样式
│  │
│  └─views                  # 页面
│ 
├─config                               
│  │  index.js              # webpack 生产和开发公共配置
│  │  dev.env.js            # 开发 developement分支配置
│  └─ prodv.env.js          # 生产 production分支配置
│          
└─build 
     │  dev-servers         # 开发时候node读取的js文件
     └─ **其他              # 略
               
        
</pre>


### 备注
我的json文件在php环境下，你可以访问本地的json<br /> 
个人开发在自己新建的分支上，最后统一合并到origin的master分支<br />
一些设计图我暂先放到了src/assets/images中了 