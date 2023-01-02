import { useContext, useState } from "react"
import noteContext from "../context/notes/noteContext"
import EditModal from "./Login";
import Notes from "../note/Notes"
import "./home.css"
import Alert from "./Alert";


export default function Home() {
    const context = useContext(noteContext);
    const { addNotes, editNotes , deleteNotes } = context;
    const [noteValue, setNote] = useState({ title: "", description: "", tag: "General" })
    const [title, settitle] = useState(" ")
    const [msg, setmsg] = useState(" ")
    const [type, settype] = useState(" ")
    const [dis, setdis] = useState("none")
    const [update, setupdate] = useState(true)

    const alertmsgs = (title, msg, type) => {
        settitle(title);
        setmsg(msg)
        settype(type)
        setdis("block")

        setTimeout(() => {
            setdis('none')
        }, 1000);
    }





    const titleChange = (e) => {
        setNote({ ...noteValue, [e.target.name]: e.target.value })
    }

    const descriptionChange = (e) => {
        setNote({ ...noteValue, [e.target.name]: e.target.value })
    }



    const tagChange = (e) => {
        setNote({ ...noteValue, [e.target.name]: e.target.value })

    }

    const submitNotes = async (e) => {
        e.preventDefault();
        if (noteValue.tag === "") {
            noteValue.tag = "General"
        }
        let res = await addNotes(noteValue.title, noteValue.description, noteValue.tag);
        if (res) {
            alertmsgs("Note Added", "Your note added to your list.", "green");

        } else {
            alertmsgs("Note not Added", "Your note not added to your list. Write againe for adding.", "red");
        }
        setupdate(true);

    }





    const updatevalues = (e) => {
        e.preventDefault();
        noteValue.title = document.getElementById('titleid').value;
        noteValue.description = document.getElementById('descriptionid').value;
        noteValue.tag = document.getElementById('tagid').value;
    }





    const updateNotes = async (e) => {
        e.preventDefault();

        document.getElementById("updatebtn").style.display = "none";
        document.getElementById("submitbtn").style.display = "block";
        let nid = document.getElementById("updatebtn").className;


        let res = await editNotes(nid, noteValue.title, noteValue.description, noteValue.tag);
        if (res) {
            alertmsgs("Note Updated", "Your note updated to your list.", "green");

        } else {
            alertmsgs("Note not Updated", "Your note not Update to your list. Write againe for Update.", "red");
        }



            document.getElementById('heading').innerText = "Add a Note";
            document.getElementById('titleid').value = "";
            noteValue.title=""
            noteValue.description=""
            noteValue.tag=""
            document.getElementById('descriptionid').value = "";
            document.getElementById('tagid').value = "General";


    }


    const  deleteaction = async(e)=>{
        let res = await deleteNotes(e.target.className);
        if(res){
        alertmsgs("Note Deleted", "Your note Deleted from your list.", "green");
            setupdate(true);
        }else{
            alertmsgs("Note not Deleted", "Your note not Deleted from your list. Delete againe for Deleting.", "red");
        }
    }



    if (!localStorage.getItem('token')) {
        return (
            <>
                <h4>Sign in first</h4>
                <EditModal mode={true} />
            </>
        )



    } else {

        return (
            <>
                <div>
                    <Alert heading={title} content={msg} type={type} display={dis} />
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
                                <div id="delete" onClick={deleteaction} style={{ display: "none" }}></div>
                                <div id="update" onClick={updatevalues} style={{ display: "none" }}></div>
                            </div>
                        </form>
                    </div>
                    <h2>All Notes</h2>
                    <div className="Notes" >
                        <Notes className="nt" token={localStorage.getItem('token')} updated={update}></Notes>
                    </div>


                </div>
            </>

        )
    }
}
