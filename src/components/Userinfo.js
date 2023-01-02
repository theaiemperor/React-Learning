import React from 'react'
import './userinfo.css'
import { useNavigate } from 'react-router-dom';

export default function Userinfo(props) {

    const navigate = useNavigate();

    const logout = ()=>{
        document.getElementById('mainbox').style.display = "none";
        localStorage.clear();
        navigate('/signIn')
    }

    const dis = ()=>{
        document.getElementById('mainbox').style.display = "none";
    }

    return (
        <div id="mainbox">
            <div className="cross" onClick={dis}>❌</div>
            <div className="name userinfoelement">Username </div>
            <div className=" userinfoelement val">{props.name} </div>
            <div className="email userinfoelement">E-Mail </div>
            <div className="email userinfoelement val">{props.email} </div>
            <button className='btn userinfoelement' onClick={logout}>Logout</button>
        </div>
    )
}
