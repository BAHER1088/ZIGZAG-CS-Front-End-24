//--------- INSERTION SORT ---------//

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    let index = i - 1;
    while (index >= 0 && array[index] > value) {
      array[index + 1] = array[index];
      index--;
    }
    array[index + 1] = value;
  }
  return array;
}

let array = [9, 2, 4, 0, 5, 7, 3, 8, 1, 6]
let sorted = insertionSort(array)
console.log(sorted);