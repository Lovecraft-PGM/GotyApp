import User from "../models/userModel.js";

export const register = async (req, res)=>{
    const {email, password, username} = req.body;
    const newUser = new User({
        username,
        email,
        password
    });
    const userSaved = await newUser.save();
    res.json({
        id:userSaved._id,
        username:userSaved.username,
        email:userSaved.email
    });
    console.log(newUser);

}