import User from "../models/userModel.js";
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
    const { email, password, username } = req.body;

    try {
        const userFound = await User.findOne({email}); // Busca el correo y lo guarda en la variable 
        if (userFound) return res.status(400).json(["El correo ya fue registrado"]);
        const passwordHash = await bcrypt.hash(password,10) // Se encripta la contraseña

        const newUser = new User({
            username,
            email,
            password:passwordHash
        });

        const userSaved = await newUser.save();

        res.status(201).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        });

        console.log("Usuario guardado:", newUser);
    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const login = async (req,res) =>{
    const{email,password} = req.body
    try{
        const userFound = await User.findOne({email});
        if(!userFound) return res.status(400);
        json(["Correo no registrado"]);

        const isMatch = await bcrypt.compare(password,userFound.password);
        if(!isMatch) return res.status(400).json(["La contraseña es incorrecta"]);

        res.json({
            id:userFound._id,
            username:userFound.username,
            email: userFound.email
        });
    }catch(error){
        res.status(500).json({menssage:error.menssage});
    }
};