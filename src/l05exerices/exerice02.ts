function filterGreaterThanFive(arr1: Array<number>): Array<number> {
    let newarr: Array<number> = [];
    for(let i: number = 0; i < arr1.length; i += 1) {
        if (arr1[i] > 5) {
            newarr.push(arr1[i])
        }
    }
    return newarr
}
function calculateAverage(arr: Array<number>): number {
    let mezi: number = 0;
    for(let i: number = 0; i < arr.length; i += 1) {
        mezi += arr[i]
    }
    mezi /= arr.length
    return mezi
}

let numbersA = [3, 7, 8, 2, 5, 10];
console.log(filterGreaterThanFive(numbersA));

let numbersB = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbersB));
