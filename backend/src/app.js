const express = require("express")
const noteModel = require('./models/note.model')
const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());


// APIs 

// POST API : create new node and save data in mongodb
app.post('/api/notes', async (req, res) => {
    const { title, description } = req.body;

    const note = await noteModel.create({ title, description })

    res.status(201).json({
        message: "Note created successfully!!!",
        note
    })
})


// GET API : retrieve all the nodes.
// NOTE: Data is returned in the form of Array of objects
app.get("/api/notes", async (req, res) => {
    let notes = await noteModel.find();
    res.status(200).json({
        "message": "All Notes fetched successfully.",
        notes,
    })
})

//Delete API 
app.delete("/api/notes/:id", async (req, res) => {
    const id = req.params.id

    console.log(id)
    await noteModel.findByIdAndDelete(id)

    res.status("200").json({
        "message": "Note deleted successfully",

    })
    console.log(`Note with ID ${id} deleted successfully.`)
})

// Update API
// Patch API : /api/notes/:id
// update the description of the note
app.patch("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    const { description } = req.body

    noteModel.findByIdAndUpdate(id, { description })

    res.status(200).json({ message: "Note updated successfully." })
})







module.exports = app;