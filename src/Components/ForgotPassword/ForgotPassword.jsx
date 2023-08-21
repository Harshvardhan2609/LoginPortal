import React from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";
const ForgotPassword = () => {
    return (
        <div>
            <h3>{strings.ForgotPasswordText}</h3>
            <Link to="/" >{strings.goToText} login</Link>
        </div>
    );
};
export default ForgotPassword;