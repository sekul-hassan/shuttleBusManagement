import React, {Fragment, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import LoginModal from "./LoginModal";
import {Link} from "react-router-dom";

function NavBar(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
       <Fragment>
           <Navbar sticky="top" expand="sm" className="navBackground mx-0 px-4">
               <Navbar.Brand href="#home" className="boldTitle">SEKUL HASSAN</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="me-auto"/>
                   <Nav>
                       <Nav.Link><Link to="/" className="navLink">Home</Link></Nav.Link>
                       <Nav.Link><Link to="/registration" className="navLink">Register</Link></Nav.Link>
                       <Nav.Link onClick={handleShow} className="navLink">Login</Nav.Link>
                   </Nav>
               </Navbar.Collapse>
           </Navbar>
           <LoginModal show={show} handleClose={handleClose}/>
       </Fragment>
    );
}

export default NavBar;
