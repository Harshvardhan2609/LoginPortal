import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const onPressConfirmPasswordButton = () => {
    let LoginObjectToBeSentToAPI = {
      userName: userName,
      password: password,
    };
    alert("Data saved successfully");
  };

  const onChangeUserName = (text) => {
    setuserName(text);
    console.log("handle change called" + userName);
  };

  const onChangepassword = (text) => {
    setpassword(text);
    console.log("handle change called" + password);
  };

  var pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/; // regex for email
  const isEmailAddress = (str) => {
    if (str.match(pattern)) {
      return false;
    } else {
      return true;
    }

    return true;
  };

  const onPressLoginButton = () => {
    if (userName === "") {
      alert("Please enter username");
    } else if (password === "") {
      alert("Please enter password");
    } else if (userName.length < 5) {
      alert("Please enter a username greater than 5 digits");
    } else if (isEmailAddress(userName)) {
      alert("Please write a valid EmailId");
    } else {
      let LoginObjectToBeSentToAPI = {
        userName: userName,
        password: password,
      };
      alert("Data saved successfully");
      console.log("Data is :" + JSON.stringify(LoginObjectToBeSentToAPI));
      navigate("Home");
    }
  };

  useEffect(() => {
    localStorage.removeItem("productIdsArr");
  }, []);

  return (
    <div className="Body">
      <div className="headerTextDiv">
        <h1 className="welcomeTextStyles">Natures Spring</h1>
        <div className="Input inputstyleText">
          <input
            type="text"
            placeholder="Email"
            value={userName}
            onChange={(obj) => onChangeUserName(obj.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(obj) => onChangepassword(obj.target.value)}
          />
          <br />
        </div>
        <div className="Button">
          <button onClick={onPressLoginButton} className="buttonTextStyles btn btn-secondary">
            LOGIN
          </button>
        </div>
        <br />
        <Link to="/SignUp" className="btn btn-success text-decoration-none">SignUp</Link>
       
        <Link to="/ForgotPassword"className="btn btn-danger mx-3 text-decoration-none">Forgot Password</Link>
      </div>
    </div>
  );
};

export default Login;
