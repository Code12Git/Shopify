import Razorpay from "razorpay";
import dotenv from "dotenv";
import crypto from "crypto";
import { Payment } from "../models/Payment.js";
dotenv.config({ path: "./config.env" });

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

export const paymentController = async (req, res) => {
  try {
    const options = {
      amount: Math.round(Number(req.body.amount) * 100), 
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Payment error:", error);
    res
      .status(500)
      .json({ success: false, error: "An error occurred during payment" });
  }
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  console.log("sig received: " + razorpay_signature);
  console.log("sig generated", expectedSignature);
  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    try {
      await Payment.create({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
      });

      res.redirect(
        `https://shopify-h4ak.onrender.com/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } catch (error) {
      console.error("Payment verification error:", error);
      res.status(500).json({
        success: false,
        error: "An error occurred during payment verification",
      });
    }
  } else {
    res.status(400).json({ success: false });
  }
};
