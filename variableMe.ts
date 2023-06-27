// Here I started with learning types and how to declare a variable, i run tsc co compile my TS to JS. and some methods that can work with certain data types and type inferences
let greetings: string = "Rashidi";
greetings.toUpperCase();
console.log(greetings);

// defining a number

let userID: number = 4414;
userID.toExponential();

//boolean
let isNumber: boolean = true;
isNumber.valueOf()

//any. The hero variable is being infered as any. I am advised to avoid using it.

let hero;

function getHero() {
    return "Rashidi"
}

hero = getHero();

//Defining a function

export {}