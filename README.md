# vue-template

> A Vue.js project,一个多页的vue项目模板,编译速度快

## Build Setup

``` bash
# install dependencies
npm install / yarn

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

## 目录结构

```
.
├── build                                 # webpack和本地server服务配置文件目录
│   ├── build.js                          # webpack生产prod入口文件
│   ├── check-versions.js                 # 打包编译环境版本检查
│   ├── dev-client.js                     # server reload配置
│   ├── dev-proxy.js                      # server代理服务设置
│   ├── dev-server.js                     # server服务
│   ├── utils.js                          # webpack配置所需的工具函数
│   ├── webpack.base.conf.js              # webpack基础配置文件
│   ├── webpack.dev.conf.js               # webpack开发环境配置文件
│   └── webpack.prod.conf.js              # webpack生产环境配置文件
├── config                                # 提供给webpack各个环境的配置变量文件目录
│   ├── dev.env.js                        # dev开发环境的环境变量
│   ├── index.js                          # webpack各环境的配置变量
│   ├── prod.env.js                       # prod生产环境的环境变量
│   ├── proxy.js                          # server代理的配置文件
│   └── test.env.js                       # test生产环境的环境变量
├── mockData                              # mock数据文件目录
│   └── index.js                          # mock数据
├── src                                   # 项目源码
│   ├── assets                            # 静态资源文件
│   ├── components                        # 组件
│   │   └── banner                        # 首页banner区域相关组件
│   │       ├── index.vue                 # 首页banner图组件
│   │       └── user-info.vue             # 首页用户信息组件
│   │   └── header                       # 头部logo及搜索组件
│   │       ├── index.vue
│   │       └── search.vue
│   │   └── nav                          # 导航相关组件
│   │       ├── nav-cate.vue             # 分类导航组件
│   │       ├── main-nav.vue             # 主导航组件
│   │       └── index.vue
│   │   └── copyright.vue                 # copyright组件
│   │   └── layout.vue                    # 布局组件
│   ├── pages                             # 页面入口
│   │   └── index                         # 首页
│   │   └── home                          # home
│   │  
│   └── services                          # 服务请求
│   └── utils                             # 工具类函数文件目录
│       ├── lazy.js                       # 懒加载
│       ├── request.js                    # 公用数据请求文件
│       └── scroll.js                     # 滚动缓动效果
├── test                                  # 单元测试文件目录
├── postcss.config.js
├── package.json
└── README.md
```

## 项目npm命令

- `npm run dev` 项目开发启动命令
- `npm run testbuild` 项目测试环境编译命令
- `npm run build` 项目生产环境编译命令
- `npm run lint-fix` eslint fix

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
