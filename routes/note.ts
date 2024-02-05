import express from "express";
import {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
} from "../controllers/noteController";

const router = express.Router();

// require auth for all note routes
//router.use(requireAuth)

// GET all notes
router.get("/", getNotes);

// GET single note
router.get("/:id", getNote);

// POST new note
router.post("/", createNote);

// DELETE note
router.delete("/:id", deleteNote);

// UPDATE note
router.patch("/:id", updateNote);

export default router;
