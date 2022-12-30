import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import Notebox from "./Notebox";



export default function Notes() {

    const context = useContext(noteContext);
    const { noteof } = context;


    return (
        <>
            <div className="cc">
                {noteof.map((note) => {
                    return <Notebox key={note._id} Notes={note} />
                })}
            </div>


        </>
    )

}


