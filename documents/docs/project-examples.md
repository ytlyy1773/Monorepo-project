---
title: npm 库使用
description: 在Monorepo架构里边怎么使用自己的npm库
---

# npm 库使用

::: info inputNumber 输入纯数字，支持 0 的限制
```js
import { inputNumber } from "user-demo777";
```
- eg:
```js
inputNumber("asdsa213123"); // 213123
inputNumber("asdsa213123asd7777"); // asdsa213123asd7777
inputNumber("7777."); // 7777
```
:::

::: info decimal 输入小数

```js
import { decimal } from "user-demo777";
```
- eg:
```js
decimal("asdsa213123"); // 213123
decimal("7777."); // 7777.'
decimal("asa7777.007979"); // 777.007979
decimal("asa7777.7979", { digit: 2 }); // 7777.79
decimal("7777777.7979", { maxValue: 999.99 }); // 999.99
```

:::

::: info removeEndSymbol 移除数字或字符串末尾的小数点

```js
import { removeEndSymbol } from "user-demo777";
```
- eg:
```js
removeEndSymbol("7777."); // 7777
```
:::

::: info objectIsEmptyKey 函数
```js
import { objectIncludesKey } from "user-demo777";
```
- eg:
```js
objectIncludesKey({}); // false
objectIncludesKey({ name: '一条懒羊羊' }); // true
```
:::

::: info arrayEmptyLength 是数组切有长度

```js
import { arrayEmptyLength } from "user-demo777";
```
- eg:
```js
arrayEmptyLength([1]); // true
arrayEmptyLength([]); // false  数组没有长度
arrayEmptyLength("1"); // false  不是数组数组
```

:::
