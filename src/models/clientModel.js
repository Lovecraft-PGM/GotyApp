import mongoose from "mongoose";
//Tabla usuarios

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true, /*Remueve los espacios*/
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true /*Unico*/
    },
    password:{
        type:String,
        required:true
    }
})

export default mongoose.model("User",userSchema);