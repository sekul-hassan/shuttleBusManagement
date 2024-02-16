import './App.css';
import '../src/Assets/CSS/Custom.css';
import React, {Fragment} from "react";
import RegisterPage from "./Pages/RegisterPage";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import RoadMapPage from "./Pages/RoadMapPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
   <Fragment>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="registration" element={<RegisterPage/>}/>
           <Route path="road-map" element={<RoadMapPage/>}/>
           <Route path="profile" element={<ProfilePage/>}/>
       </Routes>
   </Fragment>
  );
}

export default App;
