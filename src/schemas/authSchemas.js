import {z} from "zod";

export const registerSchema = z.object({
    username:z.string({
        required_error:"Se requiere un nombre",
    }),
    email:z.string({
        required_error:"Se requiere un correo",
    }).email({message:"Acceso denegado"}),
    password:z.string({
        required_error:"Se requiere una contraseña",
    }).min(7,{message:"La contraseña debe ser almenos 7 caracteres"}),   
});
export const loginSchema = z.object({
    email:z.string({
        required_error:"El correo es requerido",
    }).email({
        message:"El correo no es valido",
    }),
    password:z.string({
        required_error:"La contraseña es requerida",
    }).min(7,{
        message:"La contraseña debe ser minimo 7 caracteres",
    })
});