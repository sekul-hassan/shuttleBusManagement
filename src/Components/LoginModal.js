import React, {Fragment, useState} from 'react';
import {Button, Container, Modal} from "react-bootstrap";

function LoginModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
       <Container>
           <Button variant="primary" onClick={handleShow}>
               Open Modal
           </Button>

           <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                   <Modal.Title>Modal Title</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <p>Modal body text goes here.</p>
               </Modal.Body>
               <Modal.Footer>
                   <Button variant="secondary" onClick={handleClose}>
                       Close
                   </Button>
                   <Button variant="primary" onClick={handleClose}>
                       Save Changes
                   </Button>
               </Modal.Footer>
           </Modal>
       </Container>
    );
}

export default LoginModal;
