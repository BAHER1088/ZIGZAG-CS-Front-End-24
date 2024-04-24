//--------- BINARY SEARCH ---------//

function binarySearch(value, start, end) {

    let middleIndex = Math.floor((start + end) / 2);

    if (start > end || middleIndex === arr.length) {
        return 'value not found';
    }

    if (arr[middleIndex] === value) {
        return `the value is found at index: ${middleIndex}`;
    }

    if (arr[middleIndex] > value) {
        return binarySearch(value, start, middleIndex - 1);
    }

    if (arr[middleIndex] < value) {
        return binarySearch(value, middleIndex + 1, end);
    }
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(binarySearch(11, 0, arr.length));