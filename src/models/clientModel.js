import mongoose from "mongoose";

//Tabla clients

const clientSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true, /*Remueve los espacios*/
  },
  document:{
    type:String,
    required:true,
    trim:true,
  },
  address:{
    type:String,
    required:true,
    trim:true,
  },
  phone:{
    type:String,
    required:true,
    min:0,
    trim:true,
  },
  credit:{
    type:Number,
    required:true,
    min:0,
    trim:true,
  },
  quota:{
    type:Number,
    required:true,
    min:0,
    trim:true,
  },
  fiador:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Fiador",
    required: true,
  }   
}, { timestamps: true })

export default mongoose.model("Client",clientSchema);