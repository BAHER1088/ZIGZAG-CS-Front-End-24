//--------- BUBBLE SORT ---------//

function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let L = 0; L < len; L++) {
            let R = L + 1
            if (arr[L] > arr[R]) {
                [arr[L], arr[R]] = [arr[R], arr[L]];
            }
        }
    }
    return arr;
}

arr = [5, 4, 8, 2, 3, 1, 0, 6, 7, 9]
console.log(bubbleSort(arr));