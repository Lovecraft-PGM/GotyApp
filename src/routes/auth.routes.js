import { Router } from "express";
import { register,login,logout, verifyToken } from "../controllers/authControllers.js";
import {authRequired} from "../middlewares/validateToken.js"
import { validateSchema } from "../middlewares/validatorMiddleware.js"
import { registerSchema,loginSchema } from "../schemas/authSchemas.js"

const router = Router();
router.post("/register",validateSchema(registerSchema),register);
router.post("/login",validateSchema(loginSchema),login);
router.get("/vertify",verifyToken)
router.post("/logout",logout);

export default router 