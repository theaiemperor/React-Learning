import React from 'react'
import './navbar.css';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <>
            <div className="navigationBar">
                <ul>
                <li>{props.title}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">{props.about}</Link></li>
                    <li>{props.provides}</li>
                    <li>Contact Us</li>
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