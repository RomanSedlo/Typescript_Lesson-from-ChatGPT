let i: number = 0

function multiply(cislo1:number,cislo2:number): number {
    i = cislo1 * cislo2 
    return(i)
}
function greetUser(name:string): string {
    return `Hello, ${name}!`;
}

let myFunction: (a: number, b: number) => number = multiply;

console.log(myFunction(6,7),greetUser("Bob"))
