let x: Number = 10;
let y: String = "TypeScript";
let z: Boolean = false;
let arr1: Array<number> = [4, 5, 6];
let arr2: Array<string> = ["apple", "banana"];
let tuple: [string, number] = ["user", 42];
let obj: {title:string,experience:number} = { title: "Developer", experience: 3 };
//zde to hlásí problém pouze toho že jsem znovu nepoužil ty deklarované datové typy, kdybych napsal např. console.log(x) a všechny ostatní typy, tak by to bylo správně.