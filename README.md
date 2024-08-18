# utils工具集 (Monorepo-project)
> 基于 `Monorepo` 开发策略 使用 `vitepress` 开发的单体项目仓库

## 借助pnpm的workspace搭建了一个简单的Monorepo项目
- 1.如何搭建一个Monorepo项目
- 2.如何把 virepress 和 (组件库/UI库/npm包) 组合在一块儿
- 3.如何使用virepress编写文档
- 4.如何发布一个属于自己的npm包

## 官网示例
[直通官网   🚗](https://www.mnrp.top/)

[代码仓库   🔰](https://github.com/ytlyy1773/Monorepo-project)

## 使用说明

```
npm i user-demo777
```

```js
import { inputNumber, decimal, removeEndSymbol } from 'user-demo777'

// vue-eg:
<el-input
    v-model.trim="from.money"
    placeholder="输入金额"
    clearable
    @input="from.money = decimal(from.money, { maxValue: 999.99 })"
    @blur="from.money = removeEndSymbol(from.money)"
/>
```


## 启动Monorepo项目

- yarn
```js
yarn                        // 下载依赖
yarn npm:update             // 使用本地npm包
yarn dev                    // 启动项目
yarn test                   // 使用vitest进行测试
```
- pnpm
```js
pnpm i                       // 下载依赖
pnpm run npm:update          // 使用本地npm包
pnpm run dev                 // 启动项目
pnpm run test                // 使用vitest进行测试
```