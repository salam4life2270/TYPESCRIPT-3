// const User = {
//     name: "ras",
//     email: "ras@r.is",
//     isActive: true,
// }

// function createUser({name: string, isPaid: boolean}){

// }
// createUser({name: "ras", isPaid: false})

// //Next will be a function returning an object
// function createCourse(): {name: string, price: number}{
//     return {name: "Hassan", price: 1256}
// }

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// function createUser(user: User): User{
//     return{name:"", email:"", isActive: false}
// }
// type Point = {
//     x: number;
//     y: number;
//   };
   
//   // Here is an example of type aliases
//   function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
//   }
   
//   printCoord({ x: 100, y: 100 });


// keyword read only..noboby will be able to manipulate the id
  type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean
    CCdetails?: number // this is optional and will not give any error
  }
//Example below
let myUser: User = {
    _id: "1254",
    name: "ras",
    email: "r@r.is",
    isActive: true
}
myUser.email = "ras@r.is "
//myUser._id = "2145" //cannot assign new value since its a readonly property
export{}