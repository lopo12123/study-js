### 数据类型

- 基础: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`(es6), `bigint`(es6)
- 引用: `object`, (`function`, `array`)

### 防抖/节流

- `debounce` - B
- `throttle` - QWER

``` ts
const debounce = <Fn extends (...Args: any[]) => any>(ms: number, fn: Fn)
    : (...args: Parameters<Fn>) => void => {
    let _timerId: any = null

    return (...args: Parameters<Fn>) => {
        if(!!_timerId) clearTimeout(_timerId)
        _timerId = setTimeout(fn, ms, ...args)
    }
}

const throttle = <Fn extends (...args: any[]) => any>(ms: number, fn: Fn)
    : (...args: Parameters<Fn>) => void => {
    let _timerId: any = null

    return (...args: Parameters<Fn>) => {
        if(!!_timerId) clearTimeout(_timerId)
        _timerId = setTimeout(fn, ms, ...args)
    }
}
```

### 原型/原型链

- 原型 `prototype` => 函数特有
- 原型链 `_proto_` => 所有都有 `[[prototype]]`(谷歌浏览器显示形式)
- 原型链顶端为 `null` (`Object.prototype._proto_`)

### bind, call, apply

``` ts
// @ts-ignore
Function.prototype.myBind = (ctx: any, ...args1) => {
    ctx = ctx === null || ctx === undefined ? window : Object(ctx)
    const uniqueFn = Symbol('fn')
    ctx[uniqueFn] = this
    return (...args2) => {
        const res = ctx[uniqueFn](...args1, ...args2)
        delete ctx[uniqueFn]
        return res
    }
}

// @ts-ignore
Function.prototype.myCall = (ctx: any, ...args) => {
    ctx = ctx === null || ctx === undefined ? window : Object(ctx)
    const uniqueFn = Symbol('fn')
    ctx[uniqueFn] = this
    const result = ctx[uniqueFn](...args)
    delete ctx[uniqueFn]
    return result
}

// @ts-ignore
Function.prototype.myApply = (ctx: any, args: any[]) => {
    ctx = ctx === null || ctx === undefined ? window : Object(ctx)
    args = Array.isArray(args) ? args : []
    const uniqueFn = Symbol('fn')
    ctx[uniqueFn] = this
    const result = ctx[uniqueFn](...args)
    delete ctx[uniqueFn]
    return result
}
```