---
title: Monorepo vitepress 搭建 npm
description: 采用Monorepo架构，使用vitepress编写技术文档搭建属于自己的npm库
---

# Monorepo vitepress 搭建 npm

## 采用技术
> `pnpm` + `vitepress`

## 搭建 vitepress 项目
- 新建项目文件夹`project`
- 执行 `pnpm init`
- 新建 `documents` 和 `packages/core` 文件夹
- 在 `packages/core` 目录下执行 `pnpm init`
```json
{
  "name": "demo777", // npm包名字，唯一值，不可以是npmjs.com里边已有的包
  "version": "1.0.5", // 对应版本号
  "description": "简单的一个测试", // 介绍
  "main": "./es/index.js", // 打包后资源
  "scripts": {
    "build": "vite build" // 使用`vite`打包
  },
  "keywords": [],
  "author": "一条懒羊羊", // 作者署名
  "license": "ISC"
}

```
- 新建 `pnpm-workspace.yaml` 文件
```yaml pnpm-workspace.yaml
packages:
  - 'packages/*'
  - 'documents'
```
- ---------
- [参考vitepress官网](https://vitepress.dev/zh/guide/getting-started)
- --------这里需要注意 1.使用`pnpm`安装、2.后缀加`-w`------------
- 根目录 `project` 执行 `pnpm add -D vitepress -w`
- 在 `project/documents` 下执行 `npx vitepress init`
- ---------
- 尝试在 `project/documents` 下执行 `pnpm install docs:dev`
- 这里可以正常运行继续下一步
- 修改根目录 `project` 的 `package.json` 文件
```json
"scripts": {
    "dev": "pnpm run -F ./documents/ docs:dev", // 添加执行命令，在主包就可以运行vitrepress
    "build": "pnpm run -F ./documents/ docs:build"
},
```
- 尝试在 `project` 下执行 `pnpm install docs:dev`
- 这里可以正常运行关于文档搭建工作已经完成了


## 搭建自己的 npm
- 项目文件夹 `project` 下执行 `pnpm i vite vite-plugin-build -w`
- 在 `project/packages/core` 新建 `utils/index.js` 代码文件
```js
/**
 * 限制只输入小数
 * @param {any} val 限制内容
 * @param {Object} option 配置
 * @param {boolean} option.limitZero 限制0开头
 * @returns 过滤后的数字
 */
export function inputNumber(val, option = {}) {
  const options = {
      limitZero: false,
      typeof: typeof val,
      ...option
  }
  // 处理数据为非[string | number]返回
  if (val == null || !['number', 'string'].includes(typeof val)) {
      return val
  }
  let value = String(val).replace(/[^\d]/gi, '')
  // 限制 >>> 1.启始字符最多一个0 >>> 2.非0123合理数字格式
  if (value.startsWith('00') || (value.startsWith('0') && value.length >= 2)) {
      value = Number(value).toString()
  }
  if (options.limitZero && value.startsWith('0')) {
      value = options.typeof === 'number' ? null : ''
  }
  // 处理缺陷 >>> 还原数据本来的类型
  return options.typeof === 'number' ? Number(value) : value
}
```
- 在 `project/packages/core` 新建 `vite.config.js`
```js
import { defineConfig } from "vite";
import { buildPlugin } from "vite-plugin-build";

export default defineConfig({
  plugins: [
    buildPlugin({
      fileBuild: { inputFolder: "utils", emitDeclaration: true },
    }),
  ],
});

```
- 在 `project/packages/core` 执行 `pnpm run build`
- 可以打包成功即可进行下一步
- 这个打包命令也可以添加到项目的执行命令里边
```json
"npm:update": "pnpm run -F ./packages/directive build"
```

## 项目使用自己的 npm 包
- 在 `project/documents` 执行 `pnpm i 自己npm包的名字`
```json
"devDependencies": {
    "自己npm包的名字": "workspace:*"
},
```
- 出现 `workspace:*` 就是使用了本地的标志，如果没有workspace看看自己的 `pnpm-workspace.yaml` 配置


## 如何发布npm包到npmjs
- 创建自己的npmjs账号，具体可以百度
- ---------在 `Monorepo` 项目中这里要在  `project/packages/core` 目录下执行-----------
- 有了自己的账号就可以使用 `npm login` 登录自己的账号
- 需要依次输入自己的 npm账号名字，密码，邮箱
- 之后需要邮箱的动态验证码校验
- 执行 `npm publish` 提示发布成功可以去npmjs.com看自己发布的包