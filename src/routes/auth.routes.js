import { Router } from "express";
import { register,login,logout } from "../controllers/authControllers.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js"
import { registerSchema,loginSchema } from "../schemas/authSchemas.js"

const router = Router();
router.post("/register",validateSchema(registerSchema),register);
router.post("/login",validateSchema(loginSchema),login);
router.post("/logout",logout);

export default router 