import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Map from "../Components/Map";
import Footer from "../Components/Footer";

function RoadMapPage(props) {
    return (
        <Fragment>
            <NavBar/>
            <Map/>
            <Footer/>
        </Fragment>
    );
}

export default RoadMapPage;

