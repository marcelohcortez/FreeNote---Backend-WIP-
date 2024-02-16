import express from "express";
import { loginUser } from "../controllers/authController";

const router = express.Router();

// user login
router.post("/", loginUser);

module.exports = router;
