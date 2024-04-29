"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
const userSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: 'name cannot be Empty ' }),
    email: zod_1.z.string().email({ message: 'Email should be correct' }),
    password: zod_1.z.number().min(8, { message: 'password should not be less than 8 digit' }).optional()
});
app.put('update', (req, res) => {
    const { success } = userSchema.safeParse(req.body);
    const updateUser = req.body;
    if (!success) {
        return res.status(411).json({
            message: ""
        });
    }
    res.json({
        message: "user updated",
    });
});
app.listen(3000);
