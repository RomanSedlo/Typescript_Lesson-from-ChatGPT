type Color = {
    h: number,
    s: number,
    l: number
}

function randomColor(): Color {
    let h: number = Math.floor(Math.random() * 360)
    let s: number = Math.floor(Math.random() * 100)
    let l: number = Math.floor(Math.random() * 100)
    return {h,s,l}
}

console.log(randomColor())