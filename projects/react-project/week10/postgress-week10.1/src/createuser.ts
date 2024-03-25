// write a function to create a users table in the DataBase
import { Client } from "pg";
const client=new Client({
    connectionString:"postgres://tkrzvyab:9UiK0Bg_LlSQUovZ8TfvfzfFPtCuEI-z@raja.db.elephantsql.com/tkrzvyab"
})



async function createUsersTable(){
    await client.connect();
    const result=await client.query(`
        CREATE TABLE users (
            id  SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result);
    client.end();
}




createUsersTable();

