for (let i: number = 1; i <= 10; i += 1) {
    if (i % 3 === 0) {
        console.log(i, "je dělitelné 3")
    } else if (i % 5 === 0) {
        console.log(i, "je dělitelné 5")
    } else console.log(i)
    let day: number = i
    switch (day) {
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
            console.log("Zadané špatné číslo pro den v týdnu!")
            break;
    }
}
