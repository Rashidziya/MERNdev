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
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
function CreateUserTable(_a) {
    return __awaiter(this, arguments, void 0, function* ({ firstName, lastName, password, email }) {
        const res = yield client.user.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                password: password,
                username: email
            },
            select: {
                id: true,
                username: true,
            }
        });
        console.log("User Info Inserted Sucessfully", res);
    });
}
CreateUserTable({
    firstName: "Anas",
    lastName: "Ziya",
    password: "@123",
    email: "Anas@gmail.com"
});
// ziya@,Rashid@,Reyaz,Sajid@,Azhar@,Shamim@,Azhan@,Arham@,Zaira@,Anas@  (userEmail's)
