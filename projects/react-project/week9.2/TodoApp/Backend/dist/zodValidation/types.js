"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    username: zod_1.z.string(),
    firstName: zod_1.z.string(),
    lastName: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.TodoSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string()
});
// module.exports={
//     UserSchema,
//     TodoSchema,
// }
