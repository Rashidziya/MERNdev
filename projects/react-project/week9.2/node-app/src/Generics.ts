// 1. Problem Statement
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
// How would you solve this problem?

type Input=string|number;

function firstElement<T>(Arr:T[]):T{
    return Arr[1];
}

// const returnedValue=firstElement<string>(["rashid","ziya00"]); 
// console.log(returnedValue.toUpperCase());

const returnedValue=firstElement<number>([1,20,32]); 
console.log(returnedValue);