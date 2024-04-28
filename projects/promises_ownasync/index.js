// own async function without using promises

// const { log } = require('console');
const fs=require('fs');

function doZiya(callback){
    fs.readFile("a.txt","utf-8",function(err,data){
        callback(data);
    });
}




// function call back
function onDone(data){
    const val=data;
    console.log(val);
}


// function call 
const data1 = doZiya(onDone);
console.log("Testing async nature of javascript: ");