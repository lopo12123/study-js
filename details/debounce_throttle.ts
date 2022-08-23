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