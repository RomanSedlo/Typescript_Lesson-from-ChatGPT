function isEven(n:number): boolean {
    if (n % 2 === 0) {
        return true
    } else return false
}
function randint(n1: number, n2: number): number {
    return Math.floor(Math.random() * ((n2 + 1) - n1)) + n1
}

let randomNum: number = randint(10,99)

if (isEven(randomNum)) {
    console.log(randomNum, "Sudé číslo")
} else console.log(randomNum, "Liché číslo")

console.log(`${randomNum}`)
console.log("" + randomNum)
console.log(randomNum.toString())
console.log(String(randomNum))
