import React from 'react';
import {Button, Container} from "react-bootstrap";
import AddBus from "./AddBus";

function Map(props) {

    const bus1 = [
        {label:"select",value:""},
        {label:"SRJ",value:"SRJ"},
        {label:"Bot",value:"Bot"},
        {label:"Bank",value:"Bank"},
        {label:"Transport",value:"Transport"},
        {label:"Pranthik",value:"Pranthik"},
    ]
    const bus2 = [
        {label:"select",value:""},
        {label:"Bot thola",value:"Bot thola"},
        {label:"New Register",value:"New Register"},
        {label:"Sheikh Hasina",value:"Sheikh Hasina"},
        {label:"Dairy",value:"Dairy"},
    ]

    const bus3 = [
        {label:"select",value:""},
        {label:"MH",value:"MH"},
        {label:"Shohid Minal",value:"Shohid Minal"},
        {label:"Chourongi",value:"Chourongi"},
        {label:"Sheikh Hasina",value:"Sheikh Hasina"},
        {label:"JUSC",value:"JUSC"},
    ]

    return (
        <Container fluid="true" className="mapBackground">

            <div className="mapBackgroundOverlay">
                <div className="bg-info notice pt-1">
                    {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                    <marquee><span className="text-danger">Notice : </span> Every transaction will charge 10TK.</marquee>
                </div>
                <div className="mapContent">
                    <h4 className="coloredTitle">Please Select a Bus</h4>
                    <form>
                        <AddBus busName="Anonna" options={bus1}/>
                        <AddBus busName="Rogina" options={bus2}/>
                        <AddBus busName="Bhoishaki" options={bus3}/>
                        <div className="my-2">
                            <label className="busLabel mx-3" htmlFor="cardNumber">Pay with card</label>
                            <input type="text" id="cardNumber" className="selectBg border-0" placeholder="Pay with card"/>
                        </div>
                        <div className="my-2">
                            <Button className="submitBtn btnAlign">SUBMIT</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
}

export default Map;
