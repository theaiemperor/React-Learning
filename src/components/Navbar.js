import React, { Component } from 'react'
import './navbar.css'

export class Navbar extends Component {

    render() {
        return (
            <>
                <div className="navigationBar">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Navbar