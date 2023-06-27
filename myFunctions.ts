// In this function,  I am specifying the num variable to be type number so it is not infered as any using type anotation

function addTwo(num: number) : number{
    return num + 2
   // return "hello"
}

addTwo(5);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}
loginUser("Rashidi", "ras@yahoo.com") // We can pass two values here without error because the boolean = false- a default value


// function getValue(myVal: number) {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {
    return "" // we have to return something
}

//const heros = ["ras", "thor", "ironman"]
const heros = [1, 2, 3] // hereit deduces what data type hero is without explicitly stating the data types
heros.map((hero) => {
    return `hero is ${hero}`
})


// Good practice to explicitely declare the function as void because it is not returning anything
function consoleError(errmsg: string) : void{
    console.log(errmsg);
}

function handleError(errmsg: string) : never{
    throw new Error(errmsg);
}






export {}