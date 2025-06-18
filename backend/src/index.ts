import express from "express";
import cors from "cors";
import productRouter from "../src/routes/productRoutes";

const app = express();
const PORT = 3001;

app.use(cors());
app.use("/products", productRouter);

app.use((req, res) => {
  console.log("Fallback route hit");
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
