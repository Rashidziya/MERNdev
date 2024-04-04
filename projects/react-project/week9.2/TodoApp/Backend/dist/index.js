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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const types_1 = require("./zodValidation/types");
const body_parser_1 = __importDefault(require("body-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
const app = (0, express_1.default)();
const authUser_1 = require("./middleware/authUser");
app.use(body_parser_1.default.json());
const port = process.env.PORT;
const prisma = new client_1.PrismaClient();
app.post('/user/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validateUser = req.body;
    // Validate the input type using zod
    const validationresult = types_1.UserSchema.safeParse(validateUser);
    try {
        if (validationresult.success) {
            const validUser = validationresult.data;
            // Check if user already exist in the DB
            const existingUser = yield prisma.user2.findFirst({
                where: {
                    username: validUser.username
                }
            });
            if (existingUser) {
                throw new Error('username already exist ! ');
            }
            // if user does not exist let him signup
            const newUser = yield prisma.user2.create({
                data: {
                    username: validUser.username,
                    firstName: validUser.firstName,
                    lastName: validUser.lastName,
                    password: validUser.password
                }
            });
            const userId = newUser.id;
            const token = jsonwebtoken_1.default.sign({ userId }, process.env.JWT_SECRET);
            return res.json({
                message: "user is Created",
                User: newUser,
                Token: token
            });
        }
    }
    catch (e) {
        res.status(411).json({
            Error: e
        });
    }
}));
app.post('/user/put_todo', authUser_1.authUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Atuhentciate the user only valid users can put todos (authMiddleware)
    const userId = req.userId;
    // validate the input coming for creating Todo using zod library
    const validatedTodos = types_1.TodoSchema.safeParse(req.body);
    if (!validatedTodos.success) {
        return res.status(411).json({
            message: 'Incorrect input '
        });
    }
    try {
        const newTodo = yield prisma.todo2.create({
            data: {
                title: req.body.title,
                description: req.body.description,
                userid: userId
            }
        });
        res.send({
            Todo: newTodo
        });
    }
    catch (err) {
        console.error(err);
    }
}));
app.get('/user/fetch-todo', authUser_1.authUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.userId;
    // fetch the data base with this userid and list all the todos
    const Todos = yield prisma.todo2.findMany({
        where: {
            userid: userId
        }
    });
    res.json({
        allTodos: Todos
    });
}));
app.listen(port, () => {
    console.log(`Sever is listening at : ${port}`);
});
