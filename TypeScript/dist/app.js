"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
        ? (result = +input1 + +input2)
        : (result = input1.toString() + input2.toString());
    return result;
}
const combinedAges = combine(310, 21, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "21", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
