function findMin(arr: Array<number>): number {
    let min = arr[0]
    for(let i: number = 1; i < arr.length; i += 1) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

let numbers = [12, 5, 8, 20, 3];
console.log(findMin(numbers));
