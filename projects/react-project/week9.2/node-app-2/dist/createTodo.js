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
const prisma = new client_1.PrismaClient();
function insertTodo(userId_1, _a) {
    return __awaiter(this, arguments, void 0, function* (userId, { title, description, done }) {
        const response = yield prisma.todo.create({
            data: {
                user_id: userId,
                title: title,
                description: description,
                done: done
            },
            select: {
                user_id: true,
                done: true,
                title: true
            }
        });
        console.log("Todo Created ", response);
    });
}
insertTodo(5, {
    title: 'Study Hard',
    description: 'Hard work as well as Smart Work is necessery to Succeed',
    done: true
}).catch(console.error);
