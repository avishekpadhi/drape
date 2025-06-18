import express from "express";
import { mockProducts } from "../data/mock_products";
const router = express.Router();

router.get("/", async (req, res) => {
  res.status(200).json(mockProducts);
});

export default router;
