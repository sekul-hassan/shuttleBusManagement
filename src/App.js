import './App.css';
import '../src/Assets/CSS/Custom.css';
import React, {Fragment} from "react";
import RegisterPage from "./Pages/RegisterPage";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import RoadMapPage from "./Pages/RoadMapPage";
import ProfilePage from "./Pages/ProfilePage";
import ProtectedProfile from "./Context/ProtectedProfile";

function App() {
  return (
   <Fragment>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="registration" element={<RegisterPage/>}/>
           <Route path="road-map" element={<ProtectedProfile Profile={RoadMapPage}/>}/>
           <Route path="profile" element={<ProtectedProfile Profile={ProfilePage}/>}/>
       </Routes>
   </Fragment>
  );
}

export default App;
