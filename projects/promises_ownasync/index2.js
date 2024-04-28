// initialization of an instance of promise class


// const p = new promise(function(resolve){

// });


// own async function with using the promise

const { on } = require('events');
const fs= require('fs');

// function which return me the promise
function doZiya(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        });
    })
}

// callback function to call 
function onDone(data){
    console.log(data);
}


// calling the function
// doZiya().then(onDone);
const a= doZiya();
console.log(a);
a.then(onDone);

// before
console.log("before : ");