function randint(n1: number, n2: number): number {
    return Math.floor(Math.random() * ((n2 + 1) - n1)) + n1
}

let randNum: number = randint(50, 150)
let mulitples: string = ""
let sqrt2 = Math.pow(randNum, 1 / 2)
let sqrt4 = Math.pow(randNum, 1 / 4)

if (randNum % 4 === 0) {
    mulitples = "je násobek 4"
} else if (randNum % 6 === 0) {
    mulitples = "je násobek 6"
}

console.log("Náhodné číslo:", randNum, mulitples)
console.log(`2. Odmocnina z ${randNum} je ${sqrt2}`)
console.log(`4. Odmocnina z ${randNum} je ${sqrt4}`)

if (randNum > 100) {
    console.log("Absolutní hodnota z randNum-200", Math.abs(randNum - 200))
}
