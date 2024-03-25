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
function insertinAddress(_id, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgres://tkrzvyab:9UiK0Bg_LlSQUovZ8TfvfzfFPtCuEI-z@raja.db.elephantsql.com/tkrzvyab"
        });
        try {
            yield client.connect();
            const inputData = `
            INSERT INTO addresses(user_id,city,country,street,pincode)
            VALUES($1, $2, $3, $4, $5);
        `;
            const inputText = "INSERT INTO addresses(user_id,city,country,street,pincode) VALUES($1, $2, $3, $4, $5);";
            const values = [_id, city, country, street, pincode];
            const res = yield client.query(inputText, values);
            console.log("insertion Sucessfull ", res);
        }
        catch (err) {
            console.log("Error during insertion :", err);
            throw err;
        }
        finally {
            client.end();
        }
    });
}
insertinAddress(7, 'nawada', 'india', 'ansar nagar', '805112').catch(console.error);
