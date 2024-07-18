// Write Function Code Here
function showTypes(arg1, arg2, arg3) {
    var result = [arg1, arg2, arg3].map(function (item) { return item === undefined ? "Nothing" : String(item); }).join(' - ');
    return result;
}
// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes("String")); // String - Nothing - Nothing
console.log(showTypes("String", 100)); // String - 100 - Nothing
console.log(showTypes("String", 100, true)); // String - 100 - true
