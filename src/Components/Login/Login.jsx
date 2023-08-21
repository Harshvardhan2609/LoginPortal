import React from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";
const Login = () => {
    return (
        <div>
            <h3>{strings.loginPageText}</h3>
            <Link to="/home" >{strings.goToText} Home</Link><br/>
            <Link to="/SignUp" >{strings.goToText} SignUp</Link><br/>
            <Link to="/ForgotPassword" >{strings.goToText} ForgotPassword</Link>
        </div>
    );
};
export default Login;