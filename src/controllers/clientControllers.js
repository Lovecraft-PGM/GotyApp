import mongoose from "mongoose";
//Tabla clients

const clientSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true, /*Remueve los espacios*/
    },
    address:{
        type:String,
        required:true,
        trim:true,
    },
    credit:{
        type:Number,
        required:true,
        min:0,
        trim:true,
    },
    quota:{
        type:Int,
        required:true,
        min:0,
        trim:true,
    },
    
})

export default mongoose.model("Client",clientSchema);