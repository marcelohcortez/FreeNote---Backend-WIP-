import express from "express";
import { loginUser, signupUser } from "../controllers/authController";

const router = express.Router();

// user login
router.post("/login", loginUser);

// user signup
router.post("/signup", signupUser);

module.exports = router;
