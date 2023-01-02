import React from 'react'
import Notebox from "./Notebox";



export default function Notes(props) {
    return (
        <>
            <div id="notescontainer">
                {props.notearray.map((note) => {
                    return <Notebox key={note._id} Notes={note} />
                })}
            </div>


        </>
    )

}


