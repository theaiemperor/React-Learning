import { useContext, useState } from "react"
import noteContext from "../context/notes/noteContext"
import Notes from "../note/Notes"
import "./home.css"

export default function Home() {
    const context = useContext(noteContext);
    const { addNotes, editNotes } = context;

    const [noteValue, setNote] = useState({ title: "", description: "", tag: "General" })

    const titleChange = (e) => {
        setNote({ ...noteValue, [e.target.name]: e.target.value })
    }

    const descriptionChange = (e) => {
        setNote({ ...noteValue, [e.target.name]: e.target.value })
    }



    const tagChange = (e) => {
        setNote({ ...noteValue, [e.target.name]: e.target.value })

    }

    const submitNotes = (e) => {
        e.preventDefault();
        if (noteValue.tag === "") {
            noteValue.tag = "General"
        }
        addNotes(noteValue.title, noteValue.description, noteValue.tag)
    }

    const setdefaultaction = (e) => {
        e.preventDefault();
        noteValue.title = document.getElementById('titleid').value;
        noteValue.description = document.getElementById('descriptionid').value;
        noteValue.tag = document.getElementById('tagid').value;
    }

    const updateNotes = (e) => {
        e.preventDefault();

        document.getElementById("updatebtn").style.display = "none";
        document.getElementById("submitbtn").style.display = "block";
        let nid = document.getElementById("updatebtn").className;
        editNotes(nid, noteValue.title, noteValue.description, noteValue.tag)

        document.getElementById('heading').innerText = "Add a Note";
        document.getElementById('titleid').value = "";
        document.getElementById('descriptionid').value = "";
        document.getElementById('tagid').value = "General";
        console.log(document.getElementById('descriptionid').value)

    }

    return (
        <>
            <div>
                <h2 id="heading">Add a Note</h2>
                <div className="container">
                    <form >
                        <div className="element">
                            <label htmlFor="title" className="form-label" >Title</label>
                            <input type="text" name="title" className="form-inp" id="titleid" placeholder="Enter your Note Title here" onChange={titleChange} defaultValue="" />
                        </div>
                        <div className="element">
                            <label htmlFor="descriptions" className="form-label">Description</label>
                            <textarea name="description" id="descriptionid" cols="30" rows="20" className='form-inp' placeholder="Start writing your note..." onChange={descriptionChange} defaultValue=""></textarea>
                        </div>
                        <div className="element">
                            <label htmlFor="description" className="form-label">Tag</label>
                            <input type="text" name="tag" className="form-inp" id="tagid" placeholder="General" defaultValue="General" onChange={tagChange} />
                        </div>
                        <div className="element">
                            <button id="submitbtn" disabled={((noteValue.title === "" || noteValue.description === "") || (noteValue.title.length < 3 || noteValue.description.length < 3))} onClick={submitNotes}>Create Note</button>
                            <button className="update-----" id="updatebtn" disabled={((noteValue.title === "" || noteValue.description === "") || (noteValue.title.length < 3 || noteValue.description.length < 3))} onClick={updateNotes}>Update Note</button>
                            <button  id="hidden" onClick={setdefaultaction} style={{display:"none"}}></button>
                        </div>
                    </form>
                </div>
                <h2>All Notes</h2>
                <div className="Notes" >
                    <Notes className="nt"></Notes>
                </div>


            </div>
        </>

    )
}
