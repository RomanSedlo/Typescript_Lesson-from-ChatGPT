function multiply(m1: number, m2: number): number {
    return m1 * m2
}
function divide(d1: number, d2: number): number {
    if (d2 === 0) {
        return NaN
    }
    return d1 / d2
}

console.log(multiply(5, 2))
console.log(divide(4, 2))