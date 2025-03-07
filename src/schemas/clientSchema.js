import {z} from "zod";

// export const createClientSchema = z.object({
//     name:z.string({
//       required_error:"Se requiere un nombre",
//     }),

//     document:z.string({
//       required_error:"Se requiere un número de documento",
//     }).min(7, {message:"Por favor, digite el número de documento del cliente"}),

//     address:z.string({
//       required_error:"Se requiere una dirección",
//     }).min(7,{message:"Por favor, digite la dirección del cliente"}),
      
//     phone:z.string({
//       required_error:"Se requiere un teléfono",
//     }).min(10,{message:"Por favor, digite el teléfono del cliente"}),

//     fiador:z.object({
//       nameFiador:z.string({
//         required_error:"Se requiere un nombre para el fiador.",
//       }),

//       documentFiador:z.string({
//         required_error:"Se requiere un número de documento para el fiador.",
//       }).min(7, {message:"Por favor, digite el número de documento del fiador"}),

//       addressFiador:z.string({
//         required_error:"Se requiere una dirección para el fiador.",
//       }).min(7,{message:"Por favor, digite la dirección del fiador"}),
        
//       phoneFiador:z.string({
//         required_error:"Se requiere un teléfono para el fiador.",
//       }).min(10,{message:"Por favor, digite el teléfono del fiador"}),
//     })
// });

export const createClientSchema = z.object({
  name: z.string({ required_error: "Se requiere un nombre" }),
  document: z.string({ required_error: "Se requiere un número de documento" })
    .min(7, { message: "Por favor, digite el número de documento del cliente" }),
  address: z.string({ required_error: "Se requiere una dirección" })
    .min(7, { message: "Por favor, digite la dirección del cliente" }),
  phone: z.string({ required_error: "Se requiere un teléfono" })
    .min(10, { message: "Por favor, digite el teléfono del cliente" }),

  fiador: z.object({
    name: z.string({ required_error: "Se requiere un nombre para el fiador." }),
    document: z.string({ required_error: "Se requiere un número de documento para el fiador." })
      .min(7, { message: "Por favor, digite el número de documento del fiador" }),
    address: z.string({ required_error: "Se requiere una dirección para el fiador." })
      .min(7, { message: "Por favor, digite la dirección del fiador" }),
    phone: z.string({ required_error: "Se requiere un teléfono para el fiador." })
      .min(10, { message: "Por favor, digite el teléfono del fiador" })
  })
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