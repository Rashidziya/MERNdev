import { Client } from "pg";

async function getJoinedData(id:number){
    const client=new Client({
        connectionString:"postgres://tkrzvyab:9UiK0Bg_LlSQUovZ8TfvfzfFPtCuEI-z@raja.db.elephantsql.com/tkrzvyab"
    });
    try{
        client.connect();
        const queryData=`
            SELECT u.id,u.username,u.email,a.city,a.street,a.country,a.pincode
            FROM users u
            JOIN addresses a ON u.id=a.user_id
            WHERE u.id=$1 
        `;
        const validId=[id];
        const result=await client.query(queryData,validId);
        if(result.rows.length>0){
            console.log("user Found : ",result.rows[0]);
            return result.rows[0];
        }else{
            console.log("user not found with the given ID ");
            return null;
        }
    }catch(e){
        console.log("Error during Fetching :",e);
        throw e;
    }finally{
        await client.end();
    }
}

getJoinedData(7).catch(console.error);