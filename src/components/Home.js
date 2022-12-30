import Notes from "../note/Notes"
import "./home.css"

export default function Home() {
    return (
        <>
            <div>
                <h2>Add a Note</h2>
                <div className="container">
                    <form >
                        <div className="element">
                            <label htmlFor="title" className="form-label" >Title</label>
                            <input type="text" className="form-inp" id="titleid" placeholder="Enter your Note Title here" minLength={3} />
                        </div>
                        <div className="element">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea name="textarea" id="descriptionid" cols="30" rows="20" className='form-inp' placeholder="Start writing your note..." minLength={3}></textarea>
                        </div>
                        <div className="element">
                            <label htmlFor="description" className="form-label">Tag</label>
                            <input type="text" className="form-inp" id="tagid" defaultValue="General" />
                        </div>
                        <div className="element">
                            <button type="submit" >Create Note</button>
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
