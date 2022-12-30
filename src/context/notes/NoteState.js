import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesAll = [
        {
            "_id": "63aea73d206d4448b19605b3",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first ote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        }
    ]

    const [noteof, setNote] = useState(notesAll)
    return (
        <NoteContext.Provider value={{noteof , setNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;