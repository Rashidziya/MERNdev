"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgres://tkrzvyab:9UiK0Bg_LlSQUovZ8TfvfzfFPtCuEI-z@raja.db.elephantsql.com/tkrzvyab"
});
// This below code is not the right way to do the DB query.
// in the real world the username,email and the password thingy will be the input from the user through frontend right.
// if the user send some SQL queries itself in the input fields then.
// Then this errorness data can impact the DataBase. This is Called ("SQL INJECTION");
// The correction is that we should never put the things in DB query as it is sent by user input fields.
// async function insetIntoUsersTable() {
//     try{
//         await client.connect();
//         const result=await client.query(`
//             INSERT INTO users(username,email,password)
//             VALUES ('user2','user2@gmail.com','@123ziya');
//         `)
//         console.log("insertion sucessfull :",result);
//     }catch(err){
//         console.error("insertion Failed :",err);
//     }finally{
//         client.end();
//     }
// }
function insetIntoUsersTable(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const inputQuery = "INSERT INTO users(username,email,password) VALUES($1,$2,$3);";
            // Use parameterized query to prevent SQL injection
            const values = [username, email, password];
            const res = yield client.query(inputQuery, values);
            console.log("insertion Sucessfull ", res);
        }
        catch (err) {
            console.error("Error During Insertion", err);
        }
        finally {
            client.end();
        }
    });
}
insetIntoUsersTable('user6', 'user6@gamil.com', 'user6@123').catch(console.error);
