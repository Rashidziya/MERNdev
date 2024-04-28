import { Client } from "pg";

async function updateEmail(userId:number){
    const client=new Client({
        connectionString:"postgres://tkrzvyab:9UiK0Bg_LlSQUovZ8TfvfzfFPtCuEI-z@raja.db.elephantsql.com/tkrzvyab"
    });
    try {
        await client.connect();
        const updateQuery="UPDATE users SET email='user6@gmail.com' WHERE id=$1";
        const value=[userId];
        const result=await client.query(updateQuery,value);
        console.log("Users Email updated ",result);
    } catch (err) {
        console.log("Error during updating Users Credentials :",err);
    }finally{
        client.end();
    }
}

updateEmail(7).catch(console.error);