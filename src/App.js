import './App.css';
import '../src/Assets/CSS/Custom.css';
import {Fragment} from "react";
import RegisterPage from "./Pages/RegisterPage";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
   <Fragment>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="registration" element={<RegisterPage/>}/>
       </Routes>
   </Fragment>
  );
}

export default App;
