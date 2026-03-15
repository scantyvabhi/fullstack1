import { useState } from 'react'
import axios from "axios"
function App() {


  const [notes, setNotes] = useState([
    {
      title: "Dummy Title-1",
      description: "Sample Description for title-1"
    },
    {
      title: "Test title-2",
      description: "SAmple content"
    },
    {
      title: "Test title-3",
      description: "this is also some content "
    },
    {
      title: "Test title-4",
      description: "SAmple content"
    }
  ])

  axios.get("http://localhost:3000/api/notes").then((res)=>{
    // setNotes = res.notes
    console.log(res.data.notes)

    setNotes(res.data.notes)
  })

  return (
    <>
      <div className='notes'>
        {
          notes.map(note => {
            return <div className="note">
              <h2>{note.title}</h2>
              <p>{note.description}</p>
            </div>
          })
        }
      </div>
      
    </>
  )
}

export default App
