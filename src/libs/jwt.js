import JWT from "jsonwebtoken";
import {TOKEN_SECRET} from "../config.js";

export async function createAccessToken(payload)
{
    return new Promise((resolve,reject)=>{
        JWT.sign(payload,TOKEN_SECRET,{expiresIn:"1D"},(error,token)=>{
            if(err)reject(err);
            resolve(token)
        })
    })
} 