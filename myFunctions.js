"use strict";
// In this function,  I am specifying the num variable to be type number so it is not infered as any using type anotation
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //return num + 2
    return "hello";
}
addTwo(5);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("Rashidi", "ras@yahoo.com"); // We can pass two values here without error because the boolean = false- a default value
