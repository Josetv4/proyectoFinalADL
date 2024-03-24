import express from "express";
import cors from "cors";
import { logger } from "logger-express";


import userRoutes from "./config/routes/userRoutes.js";
import productRoutes from "./config/routes/productRoutes.js";
import categoryRoutes from "./config/routes/categoryRoutes.js";
import favoriteRoutes from "./config/routes/favoriteRoutes.js";
import reviewRoutes from "./config/routes/reviewRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors());

app.use(logger());

app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", favoriteRoutes);
app.use("/api/v1", reviewRoutes);

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));