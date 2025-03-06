import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import clientRoutes from "./routes/client.routes.js"

const app = express();
app.use(morgan('dev'));

app.use(express.json()); //Convierte el req.body en Json 
app.use(cookieParser());
app.use("/api",authRoutes);
app.use("/api/clientes",clientRoutes);

export default app;