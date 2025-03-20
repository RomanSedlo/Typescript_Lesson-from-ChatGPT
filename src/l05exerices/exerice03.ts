function findMax(arr: Array<number>): number {
    let max: number = arr[0];
    for(let i: number = 1; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}


let numbers = [12, 5, 8, 20, 3];
console.log(findMax(numbers));
