import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import productRouter from "../src/routes/productRoutes";
import authRouter from "../src/routes/authRoutes";
import { connectDB } from "./config/db";
const app = express();
const PORT = 3001;

app.use(cors());
app.use("/products", productRouter);
app.use("/auth", authRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
