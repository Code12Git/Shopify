import express from "express";
import {
  createOrder,
  deleteOrder,
  getAllOrder,
  getMonthlyIncome,
  getOrder,
  updateOrder,
} from "../controllers/OrderController.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";

const router = express.Router();

//Create new order
router.post("/", verifyToken, createOrder);

//Update order
router.post("/:id", verifyTokenAndAdmin, updateOrder);

//Delete order
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//Get order
router.get("/find/:userId", verifyTokenAndAuthorization, getOrder);

//Get All Order
router.get("/", verifyTokenAndAdmin, getAllOrder);

//Get Monthly

router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);

export default router;
