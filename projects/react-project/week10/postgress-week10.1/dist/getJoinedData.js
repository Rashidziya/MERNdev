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
function getJoinedData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgres://tkrzvyab:9UiK0Bg_LlSQUovZ8TfvfzfFPtCuEI-z@raja.db.elephantsql.com/tkrzvyab"
        });
        try {
            client.connect();
            const queryData = `
            SELECT u.id,u.username,u.email,a.city,a.street,a.country,a.pincode
            FROM users u
            JOIN addresses a ON u.id=a.user_id
            WHERE u.id=$1 
        `;
            const validId = [id];
            const result = yield client.query(queryData, validId);
            if (result.rows.length > 0) {
                console.log("user Found : ", result.rows[0]);
                return result.rows[0];
            }
            else {
                console.log("user not found with the given ID ");
                return null;
            }
        }
        catch (e) {
            console.log("Error during Fetching :", e);
            throw e;
        }
        finally {
            yield client.end();
        }
    });
}
getJoinedData(7).catch(console.error);
