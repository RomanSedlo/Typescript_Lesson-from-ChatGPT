function isPositive(n: number): boolean {
    return n >= 0;
}

let a: number = 4;

console.log(a, "je", isPositive(a) ? "Kladné" : "Záporné");
console.log(a.toString());
console.log(String(a))
