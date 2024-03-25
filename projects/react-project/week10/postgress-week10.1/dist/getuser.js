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
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgres://tkrzvyab:9UiK0Bg_LlSQUovZ8TfvfzfFPtCuEI-z@raja.db.elephantsql.com/tkrzvyab"
        });
        try {
            yield client.connect(); // First Establish connecion
            const getQuery = "SELECT * FROM users WHERE email=$1";
            const value = [email];
            const result = yield client.query(getQuery, value);
            if (result.rows.length > 0) {
                console.log("User Found", result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("User Does not found with the given Email");
                return null;
            }
        }
        catch (err) {
            console.log("Error during fetching user", err);
            throw err;
        }
        finally {
            client.end();
        }
    });
}
getUser('user4@gmail.com').catch(console.error);
