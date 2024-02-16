import React, {Fragment} from 'react';
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Profile from "../Components/Profile";

function ProfilePage(props) {
    return (
        <Fragment>
            <NavBar/>
            <Profile/>
            <Footer/>
        </Fragment>
    );
}

export default ProfilePage;
