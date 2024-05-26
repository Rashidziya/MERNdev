// // find the greates element in the array
// function largestElement(Arr:number[]):void{
//     let max=Arr[0];
//     for(let i=1;i<Arr.length;i++){
//         if(Arr[i]>max){
//             max=Arr[i];
//         }
//     }
//     console.log("largest Element is "+max);
// }
// largestElement([1,2,3]);


// Example 2 
// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User1{
    name:string;
    age:number;
}

function filterUser(users:User1[]){
    return users.filter(x=>x.age>18);
}


const user=[{
    name:"kirat",
    age:15
},{
    name:"rashid",
    age:23
}];
console.log(filterUser(user));
// console.log(filterUser([{
//     name:"kirat",
//     age:15
// },{
//     name:"rashid",
//     age:23
// }]))

// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }

// function filteredUsers(users: User[]) {
//     return users.filter(x => x.age >= 18);
// }

// console.log(filteredUsers([{
//     firstName: "harkirat",
//     lastName: "Singh",
//     age: 21
// }, {
//     firstName: "Raman",
//     lastName: "Singh",
//     age: 16
// }, ]));