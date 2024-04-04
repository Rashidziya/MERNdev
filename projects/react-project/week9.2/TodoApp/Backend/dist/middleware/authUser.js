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
exports.authUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function authUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // extract the header form authorization header and verify the user
        const token = req.headers.authorization;
        try {
            if (token && token.startsWith('Bearer')) {
                const realToken = token.split(' ')[1];
                const decodedToken = jsonwebtoken_1.default.verify(realToken, process.env.JWT_SECRET);
                if (!decodedToken) {
                    return res.status(411).send({
                        message: 'Invalid Token '
                    });
                }
                const user = yield prisma.user2.findUnique({
                    where: {
                        id: decodedToken.userId,
                    },
                });
                if (!user) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }
                req.userId = user.id; // Assign user.id (type: number) to req.userId
                next();
            }
        }
        catch (err) {
            res.status(411).send({
                message: 'Something is up with Authenctication '
            });
        }
    });
}
exports.authUser = authUser;
