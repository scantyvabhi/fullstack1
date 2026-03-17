import { useEffect, useState } from 'react'
import axios from "axios"
function App() {
  const [notes, setNotes] = useState([{ "title": "Sample Note", "description": "Description for sample note because Data isn't fetched from the DB server yet" }])
  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes)
    })
  }
  useEffect(() => {
    fetchNotes();
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements
    console.log(title.value, description.value)
    // console.log("Function is running and getting triggered")

    // Sending data through api to db
    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    }).then(res => {
      console.log(res.data)
      console.log("Note created with the above data.")
      fetchNotes();
    }).then(() => {
      document.querySelector("form").reset()
    })

  }
  function handleDeleteNode(noteId) {
    console.log(noteId)
    axios.delete("http://localhost:3000/api/notes/"+noteId).then(res=>{
      console.log(res)
    }).then(()=>{
      fetchNotes()
    })
  }

  console.log("Hello Integration")
  return (
    <>
      <form className='create-note-form' onSubmit={handleSubmit}>
        <label htmlFor="">Create New Note</label>
        <input name='title' type="text" id="new-note-title" placeholder='Title for new note' />
        <input name='description' type="text" id='new-note-description' placeholder='write the description for new note' />
        <button>Create Note</button>
      </form>
      <div className='notes'>
        {
          notes.map(note => {
            return <div className="note">
              <h2>{note.title}</h2>
              <p>{note.description}</p>
              <button className='delete-btn' onClick={() => { handleDeleteNode(note._id) }}>Delete</button>
            </div>
          })
        }
      </div>

    </>
  )
}

export default App
