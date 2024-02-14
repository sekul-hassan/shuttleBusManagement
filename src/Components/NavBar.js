import React from 'react';
import {Nav, Navbar} from "react-bootstrap";

function NavBar(props) {
    return (
        <Navbar expand="sm" className="navBackground px-4">
            <Navbar.Brand href="#home" className="boldTitle">SEKUL HASSAN</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto"/>
                <Nav>
                    <Nav.Link className="navLink" href="#home">Home</Nav.Link>
                    <Nav.Link className="navLink" href="#link">Register</Nav.Link>
                    <Nav.Link className="navLink" href="#link">Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
