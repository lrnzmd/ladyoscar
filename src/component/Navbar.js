import React from 'react'
import {Link} from 'react-router-dom'
function Navbar(props) {
    return (
        <nav className="navbarContainer">
            <Link to="/">Home</Link>
            <Link to="/game">Game</Link>
            <Link to="/info">Info</Link>
        </nav>
    )
}

export default Navbar
