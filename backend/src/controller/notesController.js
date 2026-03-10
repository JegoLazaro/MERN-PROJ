import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (e) {
    console.error("getAllNotes Error:> ", e);
    res.status(500).json({ message: "ISE: ", e });
  }
};

export const createNote = (req, res) => {
  res.status(201).json({
    message: "Note created successfully!",
  });
};

export const updateNote = (req, res) => {
  res.status(200).json({
    message: "Note created successfully!",
  });
};

export const deleteNote = (req, res) => {
  res.status(200).json({
    message: "Note created successfully!",
  });
};
