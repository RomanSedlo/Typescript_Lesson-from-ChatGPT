let n: number = 10;

while(n > 0) {
    n -= 2
    if (n === 0) {
        console.log("Hotovo!")
    } else {
        if (n % 2 === 0) {
            console.log(n, "je sudé")
        } else console.log(n, "je liché")
    }
}