import React , {useState} from 'react'
import './TextCapital.css'


export default function Navbar() {

    function makeupper(){
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    function onchng(event){
        //  Without this function we cannot enter anything agin into textarea
        setText(event.target.value);
    }

    const [text , setText] = useState("Enter you Text");

    return (
        <>
            <div className="container">
                <textarea name="ta" id="textar" cols="30" rows="10" value={text} onChange={onchng}></textarea>
                <br />
                <button onClick={makeupper}>Make capital</button>
            </div>
        </>

    )
}
