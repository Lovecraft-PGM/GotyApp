import mongoose from "mongoose";
//Tabla fiador

const fiadorSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true, 
  },
  address:{
    type:String,
    required:true,
    trim:true,
  },
  document:{
    type:String,
    required:true,
    trim:true,
  },
  phone:{
    type:String,
    required:true,
    min:0,
    trim:true,
  }   
}, { timestamps: true })

export default mongoose.model("Fiador",fiadorSchema);