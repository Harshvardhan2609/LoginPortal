import React from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";
const SignUp = () => {
    return (
        <div>
            <h3>{strings.signUpPageText}</h3>
            <Link to="/" >{strings.goToText} Login</Link>
        </div>
    );
};
export default SignUp;