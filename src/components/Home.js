import { useContext, useState } from "react"
import noteContext from "../context/notes/noteContext"
import Notes from "../note/Notes"
import "./home.css"

export default function Home() {
    const context = useContext(noteContext);
    const { addNotes } = context;

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

const clicked = (e) => {
    e.preventDefault();
    if(noteValue.tag == ""){
        noteValue.tag = "General"
    }
    addNotes(noteValue.title, noteValue.description, noteValue.tag)
}

return (
    <>
        <div>
            <h2>Add a Note</h2>
            <div className="container">
                <form >
                    <div className="element">
                        <label htmlFor="title" className="form-label" >Title</label>
                        <input type="text" name="title" className="form-inp" id="titleid" placeholder="Enter your Note Title here" onChange={titleChange} defaultValue=""/>
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
                        <button type="submit" disabled={((noteValue.title=="" || noteValue.description=="")||(noteValue.title.length<3 || noteValue.description.length<3))} onClick={clicked}>Create Note</button>
                    </div>
                </form>
            </div>
            <br />
            <h2>All Notes</h2>
            <div className="Notes" >
                <Notes className="nt"></Notes>
            </div>


        </div>
    </>

)
}
