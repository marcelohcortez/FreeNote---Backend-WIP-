import mongoose from "mongoose";
import { Request, Response } from "express";

import Note from "../models/noteModel";
import { Note as NoteType } from "../types";

// get all notes
const getNotes = async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

// get single note
const getNote = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No note with that id");
  }

  try {
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

// create note
const createNote = async (req: Request, res: Response) => {
  const note: Partial<NoteType> = req.body;

  const requiredFields: (keyof NoteType)[] = ["created_by", "info_data"];
  const emptyFields: (keyof NoteType)[] = requiredFields.filter(
    (field) => !note[field]
  );

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  // add doc to DB
  try {
    const newNote = await Note.create(note);
    res.status(200).json(newNote);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

// delete note
const deleteNote = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No note with that id");
  }

  try {
    const note = await Note.findOneAndDelete({ _id: id });
    res.status(200).json(note);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

// update note
const updateNote = async (req: Request, res: Response) => {
  const { id } = req.params;
  const note: Partial<NoteType> = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No note with that id");
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, note, { new: true });
    res.status(200).json(updatedNote);
  } catch (error) {
    if (error instanceof Error) {
      res.status(404).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred" });
    }
  }
};

export { getNotes, getNote, createNote, deleteNote, updateNote };
