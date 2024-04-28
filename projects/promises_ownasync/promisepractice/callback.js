const fs=require('fs');

function readtext(callabck){
    fs.readFile("abc.txt","utf-8",function(err,data){
        callabck(data);

        const newdata= data+'\n new content is added in the file : ';
        fs.writeFile("abc.txt",newdata,"utf-8",function(err){
            if(err){
                console.error(err);
            }
            console.log("data added in the file succesfully : ");
        })
    })
    
}


function printthevalue(data){
    console.log(data);
}

readtext(printthevalue);
console.log("before reading file ");

