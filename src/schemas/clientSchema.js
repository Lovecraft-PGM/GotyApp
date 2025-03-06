import {z} from "zod";

export const createClientSchema = z.object({
    name:z.string({
      required_error:"Se requiere un nombre",
    }),

    document:z.string({
      required_error:"Se requiere un número de documento",
    }).min(7, {message:"Por favor, digite el número de documento del cliente"}),

    address:z.string({
      required_error:"Se requiere una dirección",
    }).min(7,{message:"Por favor, digite la dirección del cliente"}),
      
    phone:z.string({
      required_error:"Se requiere un teléfono",
    }).min(10,{message:"Por favor, digite el teléfono del cliente"}),

    credit:z.string({
      required_error:"Se requiere un valor de crédito",
    }),

    quota:z.string({
        required_error:"Se requiere una plazo para los pagos",
    }).min(1,{message:"Por favor, digite el teléfono del cliente"}),   
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