import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";

function LoginModal({show,handleClose,setShow}) {
    const[loginData,setLoginData] = useState({
        name:"",
        email:""
    });

    const dataChange = (e) =>{
        const {name,value} = e.target
        setLoginData(prev =>({
            ...prev,
            [name]:value
        }));
    }


    const submitLogin = (e) =>{
        e.preventDefault();
        if(loginData.name!=="" || loginData.email!==""){
            //// post backend
            localStorage.setItem("isLogin","true");
            setShow(false);
            return ;
        }
        window.alert("All fields are required")
    }

    return (
        <Modal className="mt-5" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-center">Please Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label className="regiLabel my-2" htmlFor="loginName">Enter Your Name <span className="text-danger">*</span></label>
                <input className="form-control" name="name" id="loginName" type="text" onChange={dataChange} placeholder="Enter Your Name"/>
                <label className="regiLabel my-2" htmlFor="loginEmail">Enter Your E-mail <span className="text-danger">*</span></label>
                <input className="form-control" name="email" id="loginEmail" type="email" onChange={dataChange} placeholder="Enter Your E-mail"/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>Close</Button>
                <Button variant="outline-success" onClick={submitLogin}>Login</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LoginModal;
