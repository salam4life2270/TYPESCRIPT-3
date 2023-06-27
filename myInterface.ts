interface  User {
        email: string,
        userId: number
        //defining a function
        //startTrail:() => string /
        startTrial(): string //this is a method
        getCoupon(cname: string, value: number): number
}
const rashidi: User = { 
    email: "jhk" , 
    userId: 45,
    startTrial: () => {
        return "trial started  "
    },
    getCoupon: (name: "rashi", off: 20) => {
        return 10
    }
}  






 export {}  