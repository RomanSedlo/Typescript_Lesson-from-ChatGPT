function reverseArray(arr: Array<number>): Array<number> {
    let newarr: Array<number> = [];
    for(let i: number = arr.length - 1; i >= 0; i -= 1) {
        newarr.push(arr[i])
    }
    return newarr
}

let numbers = [1, 2, 3, 4, 5];
console.log(reverseArray(numbers));
