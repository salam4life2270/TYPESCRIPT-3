"use strict";
// const User = {
//     name: "ras",
//     email: "ras@r.is",
//     isActive: true,
// }
Object.defineProperty(exports, "__esModule", { value: true });
//Example below
var myUser = {
    _id: "1254",
    name: "ras",
    email: "r@r.is",
    isActive: true
};
myUser.email = "ras@r.is ";
myUser._id = "2145"; //cannot assign new value since its a readonly property
