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

