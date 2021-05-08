# [Vue Paper Dashboard](https://cristijora.github.io/vue-paper-dashboard/)

> Admin dashboard based on paper dashboard UI template + vue-router

This project is a vue version of [Paper-dashboard](https://www.creative-tim.com/product/paper-dashboard)
designed for vue js.The dashboard includes vue-router

Check the [Live Demo here](https://cristijora.github.io/vue-paper-dashboard).

[Nuxt Version (outdated Bootstrap 3)](https://github.com/cristijora/vue-paper-dashboard-nuxt)
![](http://i.imgur.com/3iC1hOs.gif)

## Documentation
Link to [Documentation](http://vuejs.creative-tim.com/vue-paper-dashboard/documentation/)

## Build Setup

### install dependencies
```
npm install
```
### serve with hot reload at localhost:8080
```
npm run dev
```
### build for production with minification
```
npm run build
```
### lint
```
npm run lint
```
## Contribution guide
* Fork the repository
* `npm install` or `yarn install`
* Make changes
* Open Pull Request

For detailed explanation on how things work, checkout the [guide](https://github.com/vuejs/vue-cli/blob/dev/docs/README.md)
- [CHANGELOG](./CHANGELOG.md)
- [version-badge](https://img.shields.io/badge/version-2.0.0-blue.svg)
- [license-badge](https://img.shields.io/badge/license-MIT-blue.svg)

## License

[MIT](https://github.com/creativetimofficial/vue-paper-dashboard/blob/master/LICENSE.md)

入门
Vue Paper Dashboard构建在Bootstrap 3，Vue和Vue-router的顶部。要开始，请执行以下步骤：

下载专案
确保您已  安装node.js
键入"npm install"源文件夹所在"package.json"的位置
键入"npm run dev“以启动开发服务器
该仓库使用 vue-cli 脚手架，该脚手架可通过webpack和所有必要的现代工具来完成开发设置，从而使Web开发更快，更轻松。

Npm任务：
"npm run dev“-localhost:8080 通过实时重装启动开发服务器 
"npm run build" -使用javascript最小化和版本控制构建用于生产的应用
"npm run unit“-运行位于test\unit 文件夹下的单元测试 。为您编写了一些测试，以使您更好地了解如何运行和编写Vue单元测试。
"npm run unit:watch"-在侦听项目中的任何更改的同时运行单元测试。这样，您可以开发新功能并确保您的旧组件能够按预期工作，而无需每次都运行单元测试。
"npm run e2e“-运行端到端测试。端到端测试的命令和设置由vue-cli提供。如果您需要并且有必要编写端到端测试，请随时将其写在 test\e2e 文件夹中
"npm run test“-同时运行单元测试和端到端测试。
