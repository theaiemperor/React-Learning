import React, { useState } from 'react'
import Notebox from "./Notebox";



export default function Notes(props) {

    let notesurl = "http://localhost:5000/api/authenticate"
    const [noteof, setNote] = useState([])


    const showNotes = async () => {
        try {
            const response = await fetch(`${notesurl}/getNotes`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': localStorage.getItem('token')
                }
            })
            const allNotes = await response.json();
            setNote(allNotes)
        } catch (e) {
            console.log("Request not ")
        }
    }

    if(props.token){
        showNotes();
    }



    return (
        <>
            <div id="notescontainer">
                {noteof.map((note) => {
                    return <Notebox key={note._id} Notes={note} />
                })}
            </div>


        </>
    )

}


