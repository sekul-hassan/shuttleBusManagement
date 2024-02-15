import React from 'react';
import {Button, Modal} from "react-bootstrap";

function LoginModal({show,handleClose}) {

    return (
        <Modal className="mt-5" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-center">Please Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label className="regiLabel my-2" htmlFor="">Enter Your Name <span className="text-danger">*</span></label>
                <input className="form-control" type="text" placeholder="Enter Your Name"/>
                <label className="regiLabel my-2" htmlFor="">Enter Your E-mail <span className="text-danger">*</span></label>
                <input className="form-control" type="email" placeholder="Enter Your E-mail"/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Close</Button>
                <Button variant="outline-success" onClick={handleClose}>Login</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;
