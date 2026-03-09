import mongoose from "mongoose";

// 1. create a schema


const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // createdAt and updatedAt
);

const Note = mongoose.model("Note", noteSchema)
// 2. create a model based on the schema

export default Note
