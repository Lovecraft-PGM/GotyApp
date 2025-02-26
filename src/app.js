import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js"

const app = express();
app.use(morgan('dev'));

app.use(express.json()) //Convierte el req.body en Json 

app.use("/api",authRoutes);

export default app;