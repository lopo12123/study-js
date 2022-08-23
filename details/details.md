### 数据类型

- 基础: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`(es6), `bigint`(es6)
- 引用: `object`, (`function`, `array`)

### 防抖/节流

- `debounce` - B
- `throttle` - QWER

```typescript
const debounce = <Fn extends Function>(delayInMs: number, fn: Fn, args: Parameters<Fn>) => {
    let _timerId: any = -1
    let _t = Date.now()

    return () => {
        if(Date.now() - _t < delayInMs) {
            clearTimeout(_timerId)
            setTimeout(() => {
                fn(args)
            }, delayInMs)
        }
    }
}
```