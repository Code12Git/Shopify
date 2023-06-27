import express from "express";
import {
  paymentController,
  paymentVerification,
} from "../controllers/PaymentController.js";
const router = express.Router();

router.post("/payment", paymentController);

router.post("/paymentverification", paymentVerification);

export default router;
