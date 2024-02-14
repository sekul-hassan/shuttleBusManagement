import React from 'react';
import {Container} from "react-bootstrap";

function HomeTop(props) {
    return (
        <Container fluid="true" className="homeTopBg">
            <div className="homeTopOverlay">
                <div className="homeTopContent">
                    <h4 className="title">
                        WELCOME TO OUR CANDER GARHI
                        THANKS FOR TAKING OUR BUSS SERVICE
                        PLEASE ENJOY IT
                    </h4>
                </div>
            </div>
        </Container>
    );
}

export default HomeTop;
