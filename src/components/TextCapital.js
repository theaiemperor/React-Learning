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

    function makelower(event){
        let newtext = text.toLowerCase();
        setText(newtext);
    }

    function cls(){
        setText("");
    }

    function cpy(){
        navigator.clipboard.writeText(text);

        // document.getElementById('textar').select();    // for selecting some element
        // document.getSelection().removeAllRanges(); // for remoing selected elements
    }

    const [text , setText] = useState("Enter you Text");

    return (
        <>
            <div className="container">
                <textarea name="ta" id="textar" cols="30" rows="10" value={text} onChange={onchng}></textarea>
                <br />
                <button onClick={makeupper}>Make capital</button>
                <button onClick={makelower}>Make small</button>
                <button onClick={cls}>Clear text</button>
                <button onClick={cpy}>Copy text</button>
            </div>
            <div className="info">
                <div className="words">Words = {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} </div>
                <div className="words">Characters = {text.length}</div>
            </div>
        </>

    )
}
