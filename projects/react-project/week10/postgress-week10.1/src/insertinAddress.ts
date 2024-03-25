import { Client } from "pg";

async function insertinAddress(_id:number,city:string,country:string,street:string,pincode:string){
    const client=new Client({
        connectionString:"postgres://tkrzvyab:9UiK0Bg_LlSQUovZ8TfvfzfFPtCuEI-z@raja.db.elephantsql.com/tkrzvyab"
    })
    try {
        await client.connect();
        const inputData=`
            INSERT INTO addresses(user_id,city,country,street,pincode)
            VALUES($1, $2, $3, $4, $5);
        `;
        const inputText="INSERT INTO addresses(user_id,city,country,street,pincode) VALUES($1, $2, $3, $4, $5);"
        const values=[_id,city,country,street,pincode];
        const res=await client.query(inputText,values as any);
        console.log("insertion Sucessfull ",res);
    } catch (err) {
        console.log("Error during insertion :",err);
        throw err;
    }finally{
        client.end();
    }
}


insertinAddress(7,'nawada','india','ansar nagar','805112').catch(console.error);