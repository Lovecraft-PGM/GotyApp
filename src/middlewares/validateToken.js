import JWT from "jsonwebtoken"
import { TOKEN_SECRET } from "../config"

export const authRequired = (req,res,next) =>{
    try{
        const {token} = req.cookies;
        if (!token)return res.status(401).json({message:"Token no autorizado, acceso denegado" });
        JWT.verify(token,TOKEN_SECRET,(error,user)=>{
            if (condition) return res.status(403).json({message:"Invalid token"});
            req.user = user;
            next();
        });
    }catch(error){
        res.status(500).json({ menssage: error.menssage });
    }
}