import './note.css'
import React from 'react'



export default function Notebox(props) {
    const {Notes} = props;
    return (
        <>

        <div className="NoteBoxmini">

            <div className="box">
                <div className="title elements">{Notes.title}</div>
                <div className="description elements">{Notes.description}</div>
                <div className="edit">
                    <span className="editelemen tag">{Notes.tag}</span>
                    <span className="editelement delete">Delete</span>
                    <span className="editelement edit">Edit</span>
                </div>
            </div>
        </div>
        </>
    )

}

