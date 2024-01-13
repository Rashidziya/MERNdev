function sum(num1, num2,fnTocall) {
    let result = num1 + num2;
    let value=fnTocall(result);
    return result;
}

function displayResult(data) {
    // let temp=data +30;
    console.log("Result of the sum + 30 is : " + (data+30));
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum by single call only
// function call back


let value=sum(10,20,displayResult);
console.log(value);

// function call back is basically means that A Function is having the Function as a parameter.