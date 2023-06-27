const Ailse = 0
const  Middle = 1
const WINDOW = 2

//Instead of doing this above, we do

const enum SeatChoice { // adding const here reduce the amount of js code
   // AISLE = 4, //possible to start from any number
    AISLE = 'aisle', // now they must all have a value
    MIDDLE = "fgg",
    WINDOW = "you"
}

const hcSeat = SeatChoice.MIDDLE