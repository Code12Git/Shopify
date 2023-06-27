import express from "express";
import {
  createCart,
  deleteCart,
  getAllCart,
  getCart,
  updateCart,
} from "../controllers/CartController.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const router = express.Router();

//Create Cart
router.post("/", verifyToken, createCart);

//Update Cart
router.put("/:id", verifyTokenAndAuthorization, updateCart);

//Delete Cart
router.delete("/:id", verifyTokenAndAuthorization, deleteCart);

//Get Cart
router.get("/:userId", verifyTokenAndAdmin, getCart);

//Get All
router.get("/", verifyTokenAndAdmin, getAllCart);

export default router;
