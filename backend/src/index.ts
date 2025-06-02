import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());
app.get("/", (req: any, res: any) => {
  res.send("Hello from backend!");
});

app.use((req, res) => {
  console.log("Fallback route hit");
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
