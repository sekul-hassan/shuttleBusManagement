import React, {Fragment} from 'react';
import Footer from "../Components/Footer";
import Register from "../Components/Register";
import NavBar from "../Components/NavBar";

function RegisterPage(props) {
    return (
        <Fragment>
            <NavBar/>
            <Register/>
            <Footer/>
        </Fragment>
    );
}

export default RegisterPage;


