import { Router } from "express";
import { register,login } from "../controllers/authControllers.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js"
import { registerSchema,loginSchema } from "../schemas/authSchemas.js"

const router = Router();
router.post("/register",validateSchema(registerSchema),register);
router.post("/login",validateSchema(loginSchema),login);

export default router 