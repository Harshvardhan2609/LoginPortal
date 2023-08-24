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

  //   const [dummyApiData, setDummyApiData] = useState({});
  //   const dummyApiCall = () => {
  //     fetch("https://reqres.in/api/users?page=2")
  //       .then((results) => {
  //         console.log("result is : " + results);
  //         return results.json();
  //       })
  //       .then((data) => {
  //         console.log("data is : " + JSON.stringify(data));
  //         setDummyApiData(data);
  //       });
  //   };

  useEffect(() => {
    // dummyApiCall();
  }, []);

  //   useEffect(() => {
  //   }, [dummyApiData]);
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
    //alert();
    if (userName == "") {
      alert("Please enter username");
    } else if (password == "") {
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
  return (
    <div className="Body">
      <div style={styles.headerTextDiv}>
        <h1 style={styles.welcomeTextStyles}>Natures Spring</h1>
        <div className="Input" style={styles.inputstyleText}>
          <input
            type
            placeholder="Email"
            value={userName}
            onChange={(obj) => onChangeUserName(obj.target.value)}
          />
          <br />
          <input
            type
            placeholder="Password"
            value={password}
            onChange={(obj) => onChangepassword(obj.target.value)}
          />

          <br />
        </div>
        <div className="Button">
          <button onClick={onPressLoginButton} style={styles.buttonTextStyles}>
            LOGIN
          </button>
        </div>
        {/* { <Link to="/home">{strings.goToText} Home</Link> */}
        {<br />}
        <Link to="/SignUp">{strings.goToText} SignUp</Link>
        <br />
        <Link to="/ForgotPassword">{strings.goToText} ForgotPassword</Link>
        {/* <p>{JSON.stringify(dummyApiData.page)}</p> */}
      </div>
    </div>
  );
};
const styles = {
  welcomeTextStyles: {
    textAlign: "center",
    fontWeight: "900",
    flexDirection: "column",
  },
  headerTextDiv: {
    marginTop: "100px",
    textAlign: "center",

    // backgroundColor: "grey",
  },
  buttonTextStyles: {
    borderRadius: "50px",
    width: "150px",
    height: "30px",
    marginTop: "10px",
    backgroundColor: "green",
    textAlign: "center",
    cursor: "pointer",
  },
  inputstyleText: {},
  Background: {
    backgroundColor: "grey",
    height: "650px",
  },
};

export default Login;
