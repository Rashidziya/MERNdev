const express=require('express');
const app=new express();
const port=4000;

// The server should return the name of 
// patient 
// No. of kidney's
// No. of Healthy kidneys
// No. of UnHealthy kidneys
app.use(express.json());
const patient =[{
    name : "Rashid ",
    kidneys: [{
        healthy:false
    },{
        healthy:true
    }]
}]

app.get('/',function(req,res){
    const patientname =patient[0].name;
    const patientkidney=patient[0].kidneys;
    let noOfKidneys=patientkidney.length;
    let noOfHelathykidney=0;
    for(let i=0;i<noOfKidneys;i++){
        if(patientkidney[i].healthy){
            noOfHelathykidney=noOfHelathykidney+1;
        }
    }
    let noOfunhealthykidney=noOfKidneys-noOfHelathykidney;

    res.json({
        patientname,
        noOfKidneys,
        noOfHelathykidney,
        noOfunhealthykidney
    })
})

app.post('/',function(req,res){
    const isHealthy=req.body.isHealthy;
    // const isUnHealthy=req.body.isUnHealthy;
    patient[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

// Supppse we need to replace every unhealthy kidney with healthy kidney
// but before check edge case wheather unhealthy kidney is there for a patient or not
app.put('/',function(req,res){
    if(isunhealthykidney()){
        for(let i=0;i<patient[0].kidneys.length;i++){
            if(patient[0].kidneys[i].healthy==false){
                patient[0].kidneys[i].healthy=true;
            }
        }
        res.json({});
    }
    else{
        res.status(211).send("No unhealthy kidney available :");
    }
 
})

// if user want to delete all the unhealthy kidenys
// also check the edge case that user even have unhealthy kidneys before deleting them.
app.delete('/',function(req,res){
    // const unhealthykidney= isunhealthykidney();
    const newkidney=[];
    if(isunhealthykidney()){
        for(let i=0;i<patient[0].kidneys.length;i++){
            if(patient[0].kidneys[i].healthy){
                newkidney.push({
                    healthy:true
                })
            }
        }
        patient[0].kidneys=newkidney;
        res.json({
            msg:"bad kidneys are deleted "
        })
    }
    else{
        res.status(411).send("There are no Bad Kidneys For the patient:");
    }
})

function isunhealthykidney(){
    let temp=false;
    for(let i=0;i<patient[0].kidneys.length;i++){
        if(!patient[0].kidneys[i].healthy){
            temp=true;
        }
    }
    return temp;
}

app.listen(4000,function(){
    console.log("The Server is Active on Port number : "+port);
})

