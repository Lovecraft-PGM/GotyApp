import { Router } from "express";
import { createClient } from "../controllers/clientControllers.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";
import { createClientSchema } from "../schemas/clientSchema.js"


const router = Router();

router.post("/create-client", validateSchema(createClientSchema), createClient);


export default router 