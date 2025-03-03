let temperature: number = -3
let role: string = "admin"

if (temperature < 30) {
    if (temperature < 0) {
        console.log("Freezing")
    }
    else {
        console.log("Normal")
    }
} else {
    console.log("Hot")
}

switch (role) {
    case "admin":
        console.log("Full access")
        break;
    case "user":
        console.log("Limited access")
        break;
    case "guest":
        console.log("No access")
        break;
}
