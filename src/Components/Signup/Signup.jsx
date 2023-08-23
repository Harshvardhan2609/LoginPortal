import React, { useState } from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setemailId] = useState("");
  const [mobileNo, setmobileNo] = useState("");

  const onPressConfirmSignUpButton = () => {
    let signUpObjectToBeSentToAPI = {
      lastName: lastName,
      emailId: emailId,
      firstName: firstName,
      mobileNo: mobileNo,
    };
    alert("Data saved successfully");
    console.log(JSON.stringify(signUpObjectToBeSentToAPI));
    // setUsername("");  // Reseting the inital states uncheck if you want to stay on the same page, else change naviage to desired location
    // setmobileNumber("");
    // setenterPassword("");
    // setconfirmPassword("");
    navigate("/");
  };

  const onChangefirstName = (text) => {
    setfirstName(text);
    console.log("handle change called" + firstName);
  };

  const onChangelastName = (text) => {
    setLastName(text);
    console.log("handle change called" + lastName);
  };

  const onChangeemailId = (text) => {
    setemailId(text);
    console.log("handle change called" + emailId);
  };

  const onChangemobileNo = (text) => {
    setmobileNo(text);
    console.log("handle change called" + mobileNo);
  };
  return (
    <div
      style={{
        textAlign: "center",
        fontWeight: "900",
        flexDirection: "column",
        marginTop: "150px",
      }}
    >
      <div1>
        <input
          placeholder="Enter your FirstName"
          type="text"
          value={firstName}
          onChange={(obj) => onChangefirstName(obj.target.value)}
        />
        <br />
        <input
          placeholder="Enter your lastName"
          type="text"
          value={lastName}
          onChange={(obj) => onChangelastName(obj.target.value)}
        />
        <br />
        <input
          placeholder="Enter your emailId"
          type="text"
          value={emailId}
          onChange={(obj) => onChangeemailId(obj.target.value)}
        />
        <br />
        <input
          placeholder="Enter your mobileNo"
          type="number"
          value={mobileNo}
          onChange={(obj) => onChangemobileNo(obj.target.value)}
        />{" "}
        <br />
      </div1>
      <div2>
        <button
          onClick={() => {
            onPressConfirmSignUpButton();
          }}
        >
          Click
        </button>
      </div2>
      <h3>{strings.ForgotPasswordText}</h3>
      <Link to="/">{strings.goToText} login</Link>
    </div>
  );
};

export default SignUp;
