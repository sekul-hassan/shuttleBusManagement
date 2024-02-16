import {Navigate} from "react-router-dom";

const ProtectedProfile = ({Profile}) =>{
    return localStorage.getItem("isLogin")==="true" ? <Profile/>:<Navigate to="/"/>
}

export default ProtectedProfile;