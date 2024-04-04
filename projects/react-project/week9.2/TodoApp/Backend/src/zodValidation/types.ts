import {string, z} from 'zod';

export const UserSchema=z.object({
    username:z.string(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string()
});

export const TodoSchema=z.object({
    title:z.string(),
    description:z.string()
});

export type User=z.infer<typeof UserSchema>;
export type Todo=z.infer<typeof TodoSchema>;
// module.exports={
//     UserSchema,
//     TodoSchema,
// }

