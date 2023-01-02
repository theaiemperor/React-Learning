import React, { useState } from 'react'
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Userinfo from './Userinfo';


export default function Navbar() {

    const usertoken = localStorage.getItem('token');
    let notesurl = "http://localhost:5000/api/authenticate";
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")


    const getUserinfo = async () => {
        if (!usertoken) {
            navigate('/signin')
        }else{

        const response = await fetch(`${notesurl}/getUser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authToken': usertoken
            }
        })
        const userdetails = await response.json();
        setUsername(userdetails['name'])
        setEmail(userdetails['email'])



        document.getElementById('mainbox').style.display='block'
    }


    }

    return (
        <>
            <div className="navigationBar">
                <ul>
                    <li><Link className='links' to="/">Home</Link></li>
                    <li><Link className='links' to="/about">About</Link></li>
                    <li onClick={getUserinfo}> {localStorage.getItem('token')?"Log out":"User"}</li>
                </ul>
                <Userinfo name={username} email={email}  />
            </div>
        </>

    )
}
