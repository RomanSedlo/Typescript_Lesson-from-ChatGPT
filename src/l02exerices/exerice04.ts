for (let i: number = 1; i <= 30; i += 1) {
    if (i % 10 === 0) {
        console.log(i, " - Divisible by 10")
    } else if (i % 2 === 0) {
        console.log(i, " - Even")
    } else console.log(i, " - Odd")
}
