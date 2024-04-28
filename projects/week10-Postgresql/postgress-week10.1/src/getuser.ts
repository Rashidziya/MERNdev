import { Client } from "pg";

async function getUser(email:string){
    const client=new Client({
        connectionString:"postgres://tkrzvyab:9UiK0Bg_LlSQUovZ8TfvfzfFPtCuEI-z@raja.db.elephantsql.com/tkrzvyab"
    });
    try{
        await client.connect();   // First Establish connecion
        const getQuery="SELECT * FROM users WHERE email=$1";
        const value=[email];
        const result=await client.query(getQuery,value);
        if(result.rows.length>0){
            console.log("User Found",result.rows[0]);
            return result.rows[0];
        }else{
            console.log("User Does not found with the given Email");
            return null;
        }
    }catch(err){
        console.log("Error during fetching user",err);
        throw err;
    }finally{
        client.end();
    }
}

getUser('user4@gmail.com').catch(console.error);