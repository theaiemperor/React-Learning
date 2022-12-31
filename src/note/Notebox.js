import './note.css'
import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';



export default function Notebox(props) {
    const { Notes  } = props;
    const context = useContext(noteContext);
    const { deleteNotes  } = context;

    const deleteNote = () => {
        deleteNotes(Notes._id);
    }

    const editNote = () => {

        document.getElementById('heading').innerText = "Update Notes";
        document.getElementById('titleid').value = Notes.title;
        document.getElementById('descriptionid').value = Notes.description;
        document.getElementById('tagid').value = Notes.tag;

        document.getElementById("updatebtn").style.display = "block";
        document.getElementById("updatebtn").className = Notes._id;
        
        document.getElementById("submitbtn").style.display = "none";
        document.getElementById("hidden").click();

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
                        <span className="editelement edit"  onClick={editNote}>Edit</span>
                    </div>
                </div>
            </div>
        </>
    )

}

