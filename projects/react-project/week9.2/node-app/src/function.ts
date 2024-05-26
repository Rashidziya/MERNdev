// type inference -> if we even in this case does not define the return type of the function
// then also typescript is able to find the return type of the function by concept called inference;

// function sumofTwo(x:number,y:number){
//     return x+y;
// }

// const value:number=sumofTwo(10,20);
// console.log("sum of both number is "+value);


// function greetings(firstName:string,lastName:string):void{
//     console.log("hello "+firstName+" "+lastName);
// }

// greetings("rashid","ziya");


//Problem 3 - Return true or false based on if a user is 18+
// function userAge(age:number):boolean{
//     if(age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// if(userAge(14)){
//     console.log("User haves the Right to Vote")
// }else{
//     console.log("User does not have the right to Vote Yet !");
// }


//--------------------------------------------------------------------------------

//Problem 4 - 
// Create a function that takes another function as input, and runs it after 1 second.

// how to print the square value using the same callback functions how to do this figure it out....
function after1second(fun:(x:number,y:number)=>number,x:number,y:number){
    setTimeout(() => {
        fun(x,y);
    }, 1000);
}
function square(x:number,y:number):number{
    return x*y;
}

const value=after1second(square,10,20);


// function doSomething(cb:(str:string,num:number)=>string):string{
//     const x=cb("1",1);
//     return "1";
// }