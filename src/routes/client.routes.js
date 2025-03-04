import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js"
import { validateSchema } from "../middlewares/validatorMiddleware.js"
import { registerSchema,loginSchema } from "../schemas/authSchemas.js"

const router = Router();

router.post("/clients",register);


export default router 