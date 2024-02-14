import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import HomeTop from "../Components/HomeTop";
import Footer from "../Components/Footer";

function Home(props) {
    return (
        <Fragment>
            <NavBar/>
            <HomeTop/>
            <Footer/>
        </Fragment>
    );
}

export default Home;