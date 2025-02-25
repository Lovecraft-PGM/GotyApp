import {z} from "zod";

export const registerSchema = z.object({
    username:z.string({
        required_error:"Se requiere un nombre"
    }),
})