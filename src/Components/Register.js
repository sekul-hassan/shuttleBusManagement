import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import InputField from "./InputField";

function Register(props) {
    const [userData,setUserData] = useState({
        name:"",
        department:"",
        email:"",
        batch:"",
        hall:"",
        cardNumber:"",
    });
    const inputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const subMitData = (e)=>{
        e.preventDefault();
        if (!userData.name || !userData.department || !userData.batch || !userData.hall || !userData.cardNumber) {
            alert("Please fill out all fields.");
            return;
        }
        window.alert("Registration Successful")
    }
    const properties = [
        {id:"registration_0",type:"text",name:"name",placeholder:"Enter Your Name"},
        {id:"registration_1",type:"email",name:"email",placeholder:"Enter Your E-mail"},
        {id:"registration_1",type:"text",name:"department",placeholder:"Enter Your Department"},
        {id:"registration_2",type:"number",name:"batch",placeholder:"Batch Number"},
        {id:"registration_3",type:"select",name:"hall",placeholder:"Select Hall"},
        {id:"registration_4",type:"text",name:"cardNumber",placeholder:"Enter Your Card Number"},
    ]
    return (
        <Container fluid="true">
            <div className="formBody">
                <h4 className="text-center title text-dark">PLEASE REGISTER FIRST</h4>
                {
                    properties.map((data) => (
                        <InputField id={data.id} name={data.name} type={data.type} placeholder={data.placeholder} inputChange={inputChange} />
                    ))
                }
                <Button className="submitBtn mt-2" onClick={subMitData}>SUBMIT</Button>
            </div>

        </Container>
    );
}

export default Register;