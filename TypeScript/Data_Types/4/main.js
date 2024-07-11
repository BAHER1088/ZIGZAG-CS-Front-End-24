"use strict";
function yesOrNo(val) {
    if (typeof val === "number") {
        return val > 10;
    }
    else {
        return "Error";
    }
}
// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False
