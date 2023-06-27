import express from "express";
import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../middleware/verifyToken.js";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  userStats,
} from "../controllers/UserController.js";

const router = express.Router();

//Update User
router.put("/:id", verifyTokenAndAuthorization, updateUser);

//Delete User
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);

//Get User
router.get("/find/:id", verifyTokenAndAdmin, getUser);

//Get All users
router.get("/", verifyTokenAndAdmin, getAllUsers);

//Get Stats
router.get("/stats", verifyTokenAndAdmin, userStats);

export default router;
