let randomNum: number = Math.floor(Math.random() * 50) +1
let vysledek: string
let nbool: string

if (randomNum % 2 === 0) {
    nbool = "Sudé číslo"
} else nbool = "Liché číslo"

if (randomNum > 25) {
    vysledek = "Velké číslo"
} else vysledek = "Malé číslo"

console.log(randomNum, nbool, vysledek)
console.log("Mocnina z",randomNum,"je" ,Math.pow(randomNum,2))
console.log("Odmocnina z",randomNum,"je" ,Math.sqrt(randomNum)) 
