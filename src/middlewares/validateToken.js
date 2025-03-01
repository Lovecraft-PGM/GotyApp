import JWT from "jsonwebtoken"
import { TOKEN_SECRET } from "../config.js"

export const authRequired = (req,res,next) =>{
    try{
        const {token} = req.cookies;
        if (!token)return res.status(401).json({message:"Token no autorizado, acceso denegado" });
        JWT.verify(token,TOKEN_SECRET,(error,user)=>{
            if (error) return res.status(403).json({message:"Invalid token"});
            req.user = user;
            next();
        });
    }catch(error){
        return res.status(500).json({ menssage: error.menssage });
    }
}