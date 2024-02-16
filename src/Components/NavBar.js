import React, { Fragment, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import LoginModal from './LoginModal';
import {Link, useNavigate} from 'react-router-dom';

function NavBar(props) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const isLogin = localStorage.getItem('isLogin'); // Use localStorage directly

    const handleShow = () => setShow(true);

    const logOut = () => {
        localStorage.clear();
        navigate("/")
    };

    return (
        <Fragment>
            <Navbar sticky="top" expand="sm" className="navBackground mx-0 px-4">
                <Navbar.Brand><Link className="text-decoration-none" to="/">SEKUL HASSAN</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <Nav.Link><Link to="/" className="navLink">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/registration" className="navLink">Register</Link></Nav.Link>
                        {!isLogin && (<Nav.Link onClick={handleShow} className="navLink">Login</Nav.Link>)}
                        {isLogin && (<Nav.Link><Link className="navLink" to="/road-map">Road-map</Link></Nav.Link>)}
                        {isLogin && (<Nav.Link><Link className="navLink" to="/profile">Profile</Link></Nav.Link>)}
                        {isLogin && (<Nav.Link onClick={logOut} className="navLink">Logout</Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <LoginModal show={show} handleClose={handleClose} setShow={setShow} />
        </Fragment>
    );
}

export default NavBar;
