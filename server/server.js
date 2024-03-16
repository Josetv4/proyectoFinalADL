import express from "express";
import cors from "cors";
import { logger } from "logger-express";


import userRoutes from "./config/routes/userRoutes.js";


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(logger());

app.use("/api/v1", userRoutes);

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));