//--------- MERGE SORT ---------//

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let middleIndex = Math.floor(array.length / 2);
    let leftArr = array.slice(0, middleIndex);
    let rightArr = array.slice(middleIndex);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftArr.length) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArr.length) {
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return result;
}

let unsorted = [9, 8, 7, 6, 5, 4, 3, 5, 1, 0];
let sorted = mergeSort(unsorted);
console.log(sorted);