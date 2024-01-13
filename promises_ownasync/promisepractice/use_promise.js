const fs=require('fs');

// promisified function doesnt take any funcion as a input like it takes in callback funcions
function readtextfromfile(){
    const p= new Promise(function(resolve){
        fs.readFile("abc2.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
    return p;
}

// to calling the function from here 
readtextfromfile().then(function(data){
    console.log(data);
});

console.log("before promisified async funcion : ");