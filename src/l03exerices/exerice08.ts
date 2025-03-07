let rnum: number = Math.floor(Math.random() * 91) + 10
let abs: number
let rbool: string

if (rnum % 3 === 0) {
    rbool = "Násobek 3"
} else if (rnum % 5 === 0) {
    rbool = "Násobek 5"
} else rbool = ""

if (rnum < 50) {
    abs = rnum - 100
    console.log(Math.abs(abs))
}

console.log(rnum, rbool)

console.log("2 a 3 Mocnina", Math.pow(rnum,2), Math.pow(rnum,3))
console.log("2 a 3 Odmocnina", Math.sqrt(rnum), Math.pow(rnum, 1/3))
