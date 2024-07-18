// Write Function Code Here
function showTypes<T = never, U = never, V = never>(arg1?: T, arg2?: U, arg3?: V): string {
    const result = [arg1, arg2, arg3].map(item => item === undefined ? "Nothing" : String(item)).join(' - ');
    return result;
}

// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true