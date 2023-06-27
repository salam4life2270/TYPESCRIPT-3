"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Here I started with learning types and how to declare a variable, i run tsc co compile my TS to JS. and some methods that can work with certain data types and type inferences
var greetings = "Rashidi";
greetings.toUpperCase();
console.log(greetings);
// defining a number
var userID = 4414;
userID.toExponential();
//boolean
var isNumber = true;
isNumber.valueOf();
//any. The hero variable is being infered as any. I am advised to avoid using it.
var hero;
function getHero() {
    return "Rashidi";
}
hero = getHero();
