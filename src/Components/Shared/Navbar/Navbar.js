import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../images/bar.jpg';
import './Navbar.css'


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: 'white'}}>
            <div className="container-fluid">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="navbar-brand" href="#">
                    <img src={logo} alt={"Logo"} style={{width: "190px"}}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse contenedor" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/' className="nav-link active subMenu">Inicio</Link>
                        <Link to='/menu' className="nav-link subMenu">Menu</Link>
                        <Link to='/nosotros' className="nav-link subMenu">Nosotros</Link>
                        <Link to='/contacto' className="nav-link subMenu">Delivery/Contacto</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;