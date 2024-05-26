// Very similar to interfaces , types let you aggregate data together.
// but interfaces can be implemented by class where as type cannot
// Ex:-
// type persons={
//     name:string,
//     age:number,
//     email?:string
// }

// 1. Unions
// Let’s say you want to print the id of a user, which can be a number or a string.

// function printUserId(id:userid):void{
//     console.log(`${id} is your id`);
// }

// type userid=string | number| boolean;
// const Id="113";
// printUserId(Id);


// 2. Intersection
// What if you want to create a type that has every property of multiple types/ interfaces

interface Employee{
    name:string;
    startDate:Date;

}
type Manager={
    name:string;
    department:string;
}

type TeamLead=Employee & Manager;


// popular interview question 
// How types and interfaces are differ 
//1.> interfaces can be implemented by class and types cannot
//2.> when you a thing could be of multiple types like id= string|number
//3.> and when you know a thing would be the intersection of two things 
//    by using & operator between two variables
 