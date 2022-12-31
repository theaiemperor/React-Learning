import './note.css'
import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';



export default function Notebox(props) {
    const { Notes  } = props;
    const context = useContext(noteContext);
    const { deleteNotes , editNotes } = context;

    const deleteNote = () => {
        deleteNotes(Notes._id);
    }



    return (
        <>

            <div className="NoteBoxmini" id="s">

                <div className="box">
                    <div className="title elements">{Notes.title}</div>
                    <div className="description elements">{Notes.description}</div>
                    <div className="edit">
                        <span className="editelemen tag">{Notes.tag}</span>
                        <span className="editelement delete" onClick={deleteNote}>Delete</span>
                        <span className="editelement edit" >Edit</span>
                    </div>
                </div>
            </div>
        </>
    )

}

