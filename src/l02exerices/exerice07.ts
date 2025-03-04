type Car = {
    brand: string;
    model: string;
    year: number
};

let bugina: Car = { brand: "Pablo", model: "teslos", year: 2022 }

let dayOfWeek: number = 4
let palivo: number = 5
let i1: number = 100

for (let key in bugina) {
    let typedKey = key as keyof Car;
    console.log(`${typedKey}: ${bugina[typedKey]}`)
}

do {
    palivo += 2
    console.log("Aktuální palivo: ", palivo)
} while (palivo < 15);

while (i1 > 0) {
    i1 -= 1;
    if (i1 <= 20) {
        break;
    }
}

switch (dayOfWeek) {
    case 1:
        console.log("Pondělí")
        break;
    case 2:
        console.log("Úterý")
        break;
    case 3:
        console.log("Středa")
        break;
    case 4:
        console.log("Čtvrtek")
        break;
    case 5:
        console.log("Pátek")
        break;
    case 6:
        console.log("Sobota")
        break;
    case 7:
        console.log("Neděle")
        break;
    default:
        console.log("")
        break;
}
