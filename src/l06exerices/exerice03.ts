type Color = {
    h: number,
    s: number,
    l: number
}

function randomColor(): Color {
    let h: number = Math.floor(Math.random() * 360);
    let s: number = Math.floor(Math.random() * 100);
    let l: number = Math.floor(Math.random() * 100);
    return {h,s,l}
}
function generateColorStrip(length: number): Array<Color> {
    let colorStrip: Array<Color> = [];
    for(let i: number = 0; i < length; i += 1) {
        colorStrip.push(randomColor())
    }
    return colorStrip
}

console.log(generateColorStrip(13))
