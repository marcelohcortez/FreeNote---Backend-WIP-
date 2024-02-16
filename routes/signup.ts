import express from "express";
import { signupUser } from "../controllers/authController";

const router = express.Router();

// user signup
router.post("/", signupUser);

module.exports = router;
