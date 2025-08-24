import express from "express";
import {
  getAllProducts,
  productDetails,
} from "../controllers/productController";
const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", productDetails);

export default router;
