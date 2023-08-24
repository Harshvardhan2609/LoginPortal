import React, { useState } from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [userName, setUsername] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [enterPassword, setenterPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const onPressConfirmPasswordButton = () => {
    if (userName == "") {
      alert("Please enter username");
    } else if (mobileNumber == "") {
      alert("Please enter MobileNo");
    } else if (isNaN(mobileNumber)) {
      // Check if mobileNumber is not a number
      alert("Please enter a valid mobile number");
    } else if (mobileNumber.length !== 10) {
      // Check if mobileNumber is not 10 digits
      alert("Please enter mobile number of 10 digits");
    } else if (userName.length < 5) {
      alert("Please enter a username greater than 5 digits");
    } else if (enterPassword == "") {
      alert("Please write a valid password");
    } else if (confirmPassword == "") {
      alert("Please enter a confirm password");
    } else {
      let forgotPasswordObjectToBeSentToAPI = {
        userName: userName,
        phoneNumber: mobileNumber,
        password: enterPassword,
        confirmPassword: confirmPassword,
      };
      alert("Data saved successfully");
      console.log(JSON.stringify(forgotPasswordObjectToBeSentToAPI));
      // setUsername("");  // Reseting the inital states uncheck if you want to stay on the same page, else change naviage to desired location
      // setmobileNumber("");
      // setenterPassword("");
      // setconfirmPassword("");
      navigate("/");
    }
  };
  const onChangeUserName = (text) => {
    setUsername(text);
    console.log("handle change called" + userName);
  };

  const onChangemobileNumber = (text) => {
    setmobileNumber(text);
    console.log("handle change called" + mobileNumber);
  };

  const onChangeenterPassword = (text) => {
    setenterPassword(text);
    console.log("handle change called" + enterPassword);
  };

  const onChangeconfirmPassword = (text) => {
    setconfirmPassword(text);
    console.log("handle change called" + confirmPassword);
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
          placeholder="Enter your Username"
          type="text"
          value={userName}
          onChange={(obj) => onChangeUserName(obj.target.value)}
        />
        <br />
        <input
          placeholder="Enter your mobile number"
          type="text"
          value={mobileNumber}
          onChange={(obj) => onChangemobileNumber(obj.target.value)}
        />
        <br />
        <input
          placeholder="Enter your password"
          type="password"
          value={enterPassword}
          onChange={(obj) => onChangeenterPassword(obj.target.value)}
        />
        <br />
        <input
          placeholder="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(obj) => onChangeconfirmPassword(obj.target.value)}
        />{" "}
        <br />
      </div1>
      <div2>
        <button
          onClick={() => {
            onPressConfirmPasswordButton();
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
export default ForgotPassword;
