import express from "express";
import { mockProducts } from "../data/mock_products";
import { getAllProducts } from "../controllers/productController";
const router = express.Router();

router.get("/", getAllProducts);

export default router;
