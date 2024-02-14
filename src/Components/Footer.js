import React from 'react';
import {Container} from "react-bootstrap";

function Footer(props) {
    return (
        <Container fluid="true" className="footerBody">
            <p className="footerContent">
                All rights reserved © 2023 <a href="https://recursiveeducation.com" target="_blank" rel="noreferrer"><strong className="footerCredit">SEKULL HASSAN.</strong></a>
            </p>
        </Container>
    );
}

export default Footer;