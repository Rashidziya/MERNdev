// const fs=require('fs');


// function toreadtextfile(){
//     fs.readFile("abc3.txt","utf-8",function(err,data){
//         if(err){
//             console.error(err);
//         }
//         return data;
//     })
// }

// async function main(){
//     const readData=await toreadtextfile();
//     console.log(readData);
// }
// main();

// console.log("Before reading the data from file : ");

const fs = require('fs').promises;

function readingfileandreturndata(){
    const p=new Promise(function(resolve){
        fs.readFile("abc3.txt","utf-8",function(err,data){
            resolve(data);
        })
    });
    return p;
}

async function readFile() {
  try {
    // Read from a file
    const data = await readingfileandreturndata();
    console.log('File content:', data);
  } catch (err) {
    console.error(err);
  }
}

readFile();
console.log("before reading file : ");