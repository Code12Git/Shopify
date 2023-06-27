import express from "express";
import { verifyTokenAndAdmin } from "../middleware/verifyToken.js";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../controllers/ProductController.js";
const router = express.Router();

//Create Product
router.post("/", verifyTokenAndAdmin, createProduct);

//Update Product
router.put("/:id", verifyTokenAndAdmin, updateProduct);

//Delete Product
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//Get Product
router.get("/:id", getProduct);

//Get All Products
router.get("/", getAllProduct);

export default router;
