import React from 'react'
import './navbar.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <>
            <div className="navigationBar">
                <ul>
                    <li><Link className='links' to="/">Home</Link></li>
                    <li><Link className='links' to="/about">{props.about}</Link></li>
                </ul>
            </div>
        </>

    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    provides: PropTypes.string,
    about: PropTypes.string,

}

Navbar.defaultProps = {
    title : "#Set title here",
    about : "About",
    provides : "#Write about your solution here"
}