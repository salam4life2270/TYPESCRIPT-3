let score: number | string = 33


score = 44
score = "55"

type User = {
    name: string;
    id: number
}

type Admin ={
    userName: string;
    id: number
}

let rashidi: User | Admin = {name:"rash", id: 114}
rashidi = {userName:"rash", id: 114}



//Array
const data: (string | number)[] = [1,2,3,"4"]


export {}