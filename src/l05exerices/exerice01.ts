function sumDoubledNumbers(arr: Array<number>): number {
    let sum: number = 0
    for(let i: number = 0; i < arr.length; i += 1) {
        sum += arr[i] * 2
    } return sum
}

let numbers: Array<number> = [4, 5, 12, 1];
console.log(sumDoubledNumbers(numbers))
