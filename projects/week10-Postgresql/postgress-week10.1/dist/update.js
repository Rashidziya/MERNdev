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
function updateEmail(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgres://tkrzvyab:9UiK0Bg_LlSQUovZ8TfvfzfFPtCuEI-z@raja.db.elephantsql.com/tkrzvyab"
        });
        try {
            yield client.connect();
            const updateQuery = "UPDATE users SET email='user6@gmail.com' WHERE id=$1";
            const value = [userId];
            const result = yield client.query(updateQuery, value);
            console.log("Users Email updated ", result);
        }
        catch (err) {
            console.log("Error during updating Users Credentials :", err);
        }
        finally {
            client.end();
        }
    });
}
updateEmail(7).catch(console.error);
