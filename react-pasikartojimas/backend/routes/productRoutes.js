import express from "express";
import {
  addNewProduct,
  getALLProducts,
  deleteProduct,
  updateProduct,
  getProductById,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/products", getALLProducts);

router.get("/products/:id", getProductById);

router.post("/products", addNewProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", updateProduct);

export default router;
