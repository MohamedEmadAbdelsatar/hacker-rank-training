function waiter(number, q) {
    let isPrime = n => {
        for (let i = 2; i < n; i++)
            if (n%i === 0) return false
        return true
    }
    
    let primes = n => {
        let p = []
        let i = 2
        while (p.length < n) {
            if (isPrime(i)) p.push(i)
            i++
        }
        return p
    }


    let ret = []
    let p = primes(q)
    let a = [number]
    let b = [[]]
    
    for (let i = 1; i <= q; i++) {
        b.push([])
        a.push([])
        while (a[i-1].length) {
            let e = a[i-1].pop()
            if (e % p[i-1] === 0) b[i].push(e)
            else a[i].push(e)
        }
    }
    
    b.concat(a).forEach(ab => ret.push(...ab.reverse()))

    return ret
}
