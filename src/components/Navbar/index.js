import React from 'react';
import './style.css'

function Navbar() {
    return (
    <div>
        <nav className="navbar navbar-expand-md justify-content-end">
            <a className="navbar-brand" href="#aboutMe">About Me </a>
            <a className="navbar-brand" href="#projects"> Team Projects </a>
            <a className="navbar-brand" href="#assignments"> Assignments </a>  
            <a className="navbar-brand" href="#contactRow"> Connect </a> 
        </nav>
    </div>
    )
} 

export default Navbar;