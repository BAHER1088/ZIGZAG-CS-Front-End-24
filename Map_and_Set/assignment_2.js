
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let newFriends = new Set(myFriends.sort());

console.log(newFriends);


// Needed Output

// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']