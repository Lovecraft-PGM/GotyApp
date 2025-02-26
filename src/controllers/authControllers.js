
import User from "../models/userModel.js";

export const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const newUser = new User({
            username,
            email,
            password
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