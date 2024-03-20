//Problem link: https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

function toCsv(array) {
    let csv = '';
    for (let i = 0; i < array.length; i++) {
        csv += array[i].join(',');
        if (i !== array.length - 1) {
            csv += '\n';
        }
    }
    return csv;
}

console.log(toCsv([
    [0, 1, 2, 3, 4],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]]
));