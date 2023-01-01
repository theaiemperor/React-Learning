import React, { useState } from 'react'
import Alert from '../components/Alert';
import './editmodal.css'
import { Link, useNavigate } from 'react-router-dom';

export default function EditModal(props) {

    const NavigateInPage = useNavigate()

    const authenticationsave = (token) => {
        localStorage.setItem('token',token)
    }


    let notesurl = "http://localhost:5000/api/authenticate";

    const [title, settitle] = useState("")
    const [type, settype] = useState("")
    const [msg, setmsg] = useState("")
    const [dis, setdis] = useState("none")
    const [distag, setdistag] = useState(false)




    const onsub = async (e) => {
        setdistag(true)
        e.preventDefault();

        //  if true then this executes : value for sign in
        if (props.mode) {
            const response = await fetch(`${notesurl}/signIn`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        "password": document.getElementById('pass').value,      // 12345
                        "email": document.getElementById('mail').value
                    })
            })
            const userToken = await response.json();

            if (response.status !== 400) {
                authenticationsave(userToken['authenticationToken'])
                settitle("Login sucessful")
                settype('green')
                setmsg('')
                setdis("block")

                setTimeout(() => {
                    setdis("none")
                    NavigateInPage('/')
                }, 1000);



            } else {
                console.log(userToken['error'])
                settitle(userToken['error'])
                settype('red')
                setmsg('please enter right credentials')
                setdis("block")
            }
        }


        //  if false then this executes : value for sign up
        else {
            if (document.getElementById('pass').value === document.getElementById('re-enter').value) {

                const response = await fetch(`${notesurl}/signUp`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            "name": document.getElementById('titleids').value,
                            "password": document.getElementById('pass').value,
                            "email": document.getElementById('mail').value
                        })
                })
                const userToken = await response.json();

                if (response.status !== 400) {
                    console.log(userToken['authenticationToken'])
                    authenticationsave(userToken['authenticationToken'])
                    settitle("signUp sucessful")
                    settype('green')
                    setmsg('')
                    setdis("block")

                    setTimeout(() => {
                        setdis("none")
                        NavigateInPage('/')
                    }, 1000);



                } else {
                    settitle("User already exists")
                    settype('red')
                    setmsg('You cannot make account using these details')
                    setdis("block")
                }
            }

            else {
                settitle("Invalid password match")
                settype('red')
                setmsg('Your password is not equal. Please write right password')
                setdis("block")
            }
        }
        setdistag(false)
    }



    return (
        <>
            <Alert type={type} heading={title} content={msg} display={dis} />
            <div className="MeditModal" >
                <div className="Mcontainer" id="Modal">
                    <div className="selectlogin">
                        <Link className="sign in" id='in' style={{ background: props.mode ? "rgb(44, 190, 178)" : "yellow", border: props.mode ? "rgb(44, 190, 178)" : "yellow" }} to="/signin">Sign in</Link>
                        <Link className="sign up" id='up' style={{ background: props.mode ? "yellow" : "rgb(44, 190, 178)", border: props.mode ? "yellow" : "rgb(44, 190, 178)" }} to="/signup">Sign up</Link>
                    </div>
                    <form onSubmit={onsub}>
                        <div className="Melement" id='username' style={{ display: props.mode ? "none" : "block" }}>
                            <label htmlFor="title" className="Mform-label"  >Name</label>
                            <input type="text" name="title" className="Mform-inp" id="titleids" defaultValue="" required={!props.mode} disabled={distag} />
                        </div>
                        <div className="Melement" id='userpassword'>
                            <label htmlFor="descriptions" className="Mform-label" >Gmail</label>
                            <input type="email" name="Mail" className="Mform-inp" id="mail" required disabled={distag} />
                        </div>
                        <div className="Melement" id='email'>
                            <label htmlFor="description" className="Mform-label">Password</label>
                            <input type="password" name="tag" className="Mform-inp" id="pass" required disabled={distag} />
                        </div>
                        <div className="Melement" id='reenter' style={{ display: props.mode ? "none" : "block" }}>
                            <label htmlFor="description" className="Mform-label" style={props.in}>Re-type Password</label>
                            <input type="password" name="tag" className="Mform-inp" id="re-enter" required={!props.mode} disabled={distag} />
                        </div>
                        <div className="Melement authenticaiton-btn" id='signinbtn' >
                            <button type='submit' disabled={distag}>{props.mode ? "sign in" : "sign up"} </button>
                        </div>
                    </form>
                </div>
                <h6 className="alert"></h6>
            </div>
        </>
    )
}