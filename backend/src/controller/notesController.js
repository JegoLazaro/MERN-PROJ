export const getAllNotes = (req, res) => {
    res.status(200).send("TEST NOTES FETCHED")
}

export const createNote = (req, res) => {
  res.status(201).json({
    message: "Note created successfully!"
  });
}

export const updateNote = (req, res) => {
  res.status(200).json({
    message: "Note created successfully!"
  });
}

export const deleteNote = (req, res) => {
  res.status(200).json({
    message: "Note created successfully!"
  });
}
