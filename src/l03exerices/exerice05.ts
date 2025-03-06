let x: number = 2;
let y: number = 4;
let z: number | null = null;

let vysledek = z ?? 10;
let vetsi: number = x > y ? x : y; //tohle jsem vubec nevěděl

console.log("Větší je:", vetsi)

console.log("AND:", x && y)
console.log("OR:", x || y)

console.log(vysledek)
