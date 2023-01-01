import React from 'react'
import './alert.css'

export default function Alert(props) {
    return (
        <>

            <div className="alertbox" style={{ background: props.type , display:props.display}} id="main" >
                <div className="alerttitle alertmsg">{props.heading}</div>
                <div className="msg alertmsg">{props.content}</div>
            </div>
        </>
    )
}
