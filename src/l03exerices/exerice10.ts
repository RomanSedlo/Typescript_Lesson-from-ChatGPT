function randint(n1: number, n2: number): number {
    return Math.floor(Math.random() * ((n2 + 1) - n1)) + n1
}

function isPrime(n:number): boolean {
    if (n < 2) return false
    for(let i: number = 2; i < n; i += 1)
        if(n % i === 0) return false
    return true
}

let nahodneCislo = randint(1,100)

if (isPrime(nahodneCislo)) {
    console.log(nahodneCislo, "je Prvočíslo")
} else console.log(nahodneCislo, "není Prvočíslo")

console.log("Druhá mocnina", Math.pow(nahodneCislo, 2))
console.log("Třetí odmocnina", Math.pow(nahodneCislo, 1/3))
