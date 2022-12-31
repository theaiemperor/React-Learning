import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesAll = [
        {
            "_id": "63aea73d206d4448b16w105b3",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx doteThis is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx doteThis is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx doteThis is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx doteThis is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx doteThis is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote arman",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "63a1ea73d20w6d444b19605b3",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "63aea173d26d4448wb19605b3",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "63aea713d206d448b1ee9605b3",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "63aea73d106d4448be19605b3",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "63aea73d1106d4448196d05b3",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "ll",
            "user": "63aea67f2061d4448db19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "63aea73dj0611111d4448db19605b3",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "63aea73d06ddd44418j19605b3",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "llw",
            "user": "63aea67f2s06d4dg448b119605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "63aea73iddj06d4d448b196015b3",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        },
        {
            "_id": "63aea73d26dddsss4448b19605b13",
            "user": "63aea67f206d4448b19605ae",
            "title": "my-notes",
            "description": "This is my first fffffhfhgh jghghgh ghg hgy vg gh g cfx dote",
            "tag": "imp",
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        }
    ]


    const [noteof, setNote] = useState(notesAll)

    // FUNCTIONS FOR MANIPULATING NOTES

    // Adding a note
    const addNotes = (title, description, tag) => {
        const newNote = {
            "_id": `63aea7${tag.length}3d206d4${description.length}448b16w${title.length}105b3`,
            "user": "63aea67f206d4448b19605ae",
            "title": title,
            "description": description,
            "tag": tag,
            "timestamp": "2022-12-30T08:54:21.086Z",
            "__v": 0
        }
        setNote(noteof.concat(newNote))
    }

    // Deleteing a note
    const deleteNotes = (noteId) => {
        const newNote = noteof.filter((no)=>{return noteId !== no._id})
        setNote(newNote)
    }

    // Editing a note
    const editNotes = (noteid, title, description, tag) => {

    }





    return (
        <NoteContext.Provider value={{ noteof, addNotes, deleteNotes, editNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;