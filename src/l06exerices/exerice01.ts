type Color = {
    h: number,
    s: number,
    l: number
}

function createColor(h: number, s:number, l:number): Color {
    return {h,s,l}
}

let myColors: Array<Color> = [createColor(0,100,50), createColor(120,100,50), createColor(240,100,50)]

console.log(myColors)
