import React, { useEffect } from 'react'
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';


export default function Navbar() {

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location]);

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
