import mongoose from "mongoose";

//Tabla clients

// const clientSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   document: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   address: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   fiador: {
//     type: new mongoose.Schema({ // Definir un subesquema para fiador
//       nameFiador: {
//         type: String,
//         required: true,
//         trim: true,
//       },
//       documentFiador: {
//         type: String,
//         required: true,
//         trim: true,
//       },
//       addressFiador: {
//         type: String,
//         required: true,
//         trim: true,
//       },
//       phoneFiador: {
//         type: String,
//         required: true,
//         trim: true,
//       }
//     }, { _id: false }) // Para evitar que cree un nuevo ID dentro de fiador
//   }
// }, { timestamps: true });
const fiadorSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  document: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true }
}, { _id: false });

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  document: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  fiador: { type: fiadorSchema, required: true } // Aquí usamos el subesquema correctamente
}, { timestamps: true });

export default mongoose.model("Client",clientSchema);