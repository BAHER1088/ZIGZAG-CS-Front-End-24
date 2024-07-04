
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

chars.sort((a, b) => {
    if (typeof a === 'string' && typeof b === 'number') {
        return -1;
    }
    if (typeof a === 'number' && typeof b === 'string') {
        return 1;
    }
    return 0;
});

chars.copyWithin(chars.filter(e => typeof e === `number`).length);

console.log(chars);


// Needed Output

// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
