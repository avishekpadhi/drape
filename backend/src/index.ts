import express from "express";
import cors from "cors";
import productRouter from "../src/routes/productRoutes";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
const app = express();
const PORT = 3001;

dotenv.config();

app.use(cors());
app.use("/products", productRouter);

connectDB();

app.use((req, res) => {
  console.log("Fallback route hit");
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
