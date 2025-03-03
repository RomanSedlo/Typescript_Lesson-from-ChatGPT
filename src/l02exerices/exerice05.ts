let i: number = 1

while(i <= 50) { // já myslel že u takovýchle věcí by se použil spíš for loop, ne?
    if (i % 2 === 1) {
        console.log(i, "Odd")
    } else if (i % 4 === 0) {
        console.log(i, "Divisible by 4")
    } else console.log(i) //nevím jak použít to continoue
    i += 1
}