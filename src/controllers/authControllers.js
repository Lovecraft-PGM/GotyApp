import User from "../models/userModel.js";
import JWT from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";
import bcrypt from "bcryptjs"


export const register = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const userFound = await User.findOne({ email }); // Busca el correo y lo guarda en la variable 
        if (userFound) return res.status(400).json(["El correo ya fue registrado"]);
        const passwordHash = await bcrypt.hash(password, 10) // Se encripta la contraseña

        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({ id: userSaved._id });
        res.cookie("token", token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });
    } catch (error) {
        res.status(500).json({ message: error, message });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json(["Correo no registrado"]);

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json(["La contraseña es incorrecta"]);
        
        const token = await createAccessToken({ id: userFound._id });
        res.cookie("token", token)
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email
        });
    } catch (error) {
        console.log("aaa",error);
        res.status(500).json({ menssage: error.menssage });
    }
};


export const logout = async (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
};


export const profile = async(req,res) => {

    const {token} = req.cookies;
    if(!token) return res.send(false);

    JWT.verify(token,TOKEN_SECRET, async(error,user)=>{

        if(error) return res.sendStatus(401);
        const userFound = await User.findById(user.id);

        if(!userFound) return res.sendStatus(401);
        return res.json({
            id:userFound._id,
            username:userFound.username,
            email:userFound.email,
        });
    });
}


export const verifyToken = async (req, res) => {
    const { token } = req.cookies
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    JWT.verify(token, TOKEN_SECRET, async(error, user) => {

        if (error) return res.status(401).json({ message: "Unauthorized" });
        const userFound = await User.findById(user.id);
        
        if (!userFound) return res.status(401).json({ message: "Unauthorized" });
        return res.json({
            id:userFound._id,
            username:userFound.username,
            email:userFound.email,
        });
    });
};
