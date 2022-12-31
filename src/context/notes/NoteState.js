import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

    let notesurl = "http://localhost:5000/api/authenticate"



    const [noteof, setNote] = useState([])

    // FUNCTIONS FOR MANIPULATING NOTES


    // Showing notes
    const showNotes = async () => {
        const response = await fetch(`${notesurl}/getNotes`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZWE2N2YyMDZkNDQ0OGIxOTYwNWFlIn0sImlhdCI6MTY3MjM5MDI3MX0.N0OtDOQV6VTcWyNBKgZv6nx0cIgFYgtEmuCFZDZQmsU'
            }
        })
        const allNotes = await response.json();
        setNote(allNotes)
    }
    showNotes()




    // Adding a note
    const addNotes = async(title, description, tag) => {
        const response = await fetch(`${notesurl}/addNote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZWE2N2YyMDZkNDQ0OGIxOTYwNWFlIn0sImlhdCI6MTY3MjM5MDI3MX0.N0OtDOQV6VTcWyNBKgZv6nx0cIgFYgtEmuCFZDZQmsU'
            },
            body: JSON.stringify({title:title , description:description , tag:tag})
        })
    }



    // Deleteing a note
    const deleteNotes = async(noteId) => {
        const response = await fetch(`${notesurl}/deleteNotes/${noteId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZWE2N2YyMDZkNDQ0OGIxOTYwNWFlIn0sImlhdCI6MTY3MjM5MDI3MX0.N0OtDOQV6VTcWyNBKgZv6nx0cIgFYgtEmuCFZDZQmsU'
            }
        })
    }

    // Editing a note
    const editNotes = async(noteId, title, description, tag) => {

        const response = await fetch(`${notesurl}/updateNotes/${noteId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'authToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhZWE2N2YyMDZkNDQ0OGIxOTYwNWFlIn0sImlhdCI6MTY3MjM5MDI3MX0.N0OtDOQV6VTcWyNBKgZv6nx0cIgFYgtEmuCFZDZQmsU'
            },
            body: JSON.stringify({title:title , description:description , tag:tag})
        })

    }





    return (
        <NoteContext.Provider value={{ noteof, addNotes, deleteNotes, editNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;