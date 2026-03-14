const mongoose = require("mongoose")

// schema(databse format) creation
const noteSchema = new mongoose.Schema({
    title : String,
    description: String,
})

// model : used if we want to perform any(crud) operation on the database
const noteModel = mongoose.model("notes",noteSchema)
// = function for model / name of collection (here: notes) / format of data (here: noteSchema)


// different collections are used for differnt purposes


module.exports = noteModel