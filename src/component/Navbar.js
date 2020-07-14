import React from 'react'
import {Link} from 'react-router-dom'
function Navbar(props) {
    return (
        <nav className="navbarContainer">
            <Link to="/">{props.title}</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contatti">Contatti</Link>
        </nav>
    )
}

export default Navbar
