import React  from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <>
            <div className="navigationBar">
                <ul>
                    <li><Link className='links' to="/">Home</Link></li>
                    <li><Link className='links' to="/about">About</Link></li>
                </ul>
            </div>
        </>

    )
}
