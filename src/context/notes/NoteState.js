import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {

    let notesurl = "http://localhost:5000/api/authenticate"



    const [noteof] = useState([])

    // FUNCTIONS FOR MANIPULATING NOTES


    // Adding a note
    const addNotes = async (title, description, tag) => {
        try {
            const response = await fetch(`${notesurl}/addNote`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('token')
                },
                body: JSON.stringify({ title: title, description: description, tag: tag })
            })
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    }



    // Deleteing a note
    const deleteNotes = async (noteId) => {
        try {
            const response = await fetch(`${notesurl}/deleteNotes/${noteId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('token')
                }
            })
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false
        }
    }

    // Editing a note
    const editNotes = async (noteId, title, description, tag) => {
        try {
            const response = await fetch(`${notesurl}/updateNotes/${noteId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('token')
                },
                body: JSON.stringify({ title: title, description: description, tag: tag })
            })
            if (response.status === 200) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }

    }





    return (
        <NoteContext.Provider value={{ noteof, addNotes, deleteNotes, editNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;