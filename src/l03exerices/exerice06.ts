let a: number = 5;
let b: number = 8;
let c: number | null = null;
let x: boolean = true;
let y: boolean = false;

let vetsi: number = a > b ? a : b;
c = c ?? 10;

console.log(vetsi);
console.log(c);
console.log(a & b);
console.log(a | b);
console.log(x && y);
console.log(x || y)
