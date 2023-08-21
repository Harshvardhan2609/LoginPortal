import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";

const Login = () => {
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

  return (
    <div>
      <div style={styles.headerTextDiv}>
        <h1 style={styles.welcomeTextStyles}>Welcome</h1>

        <div style={styles.inputstyleText}>
          <input type placeholder="Username" />
          <br />
          <input type placeholder="Password" />
          <br />
        </div>
        <div>
          <button style={styles.buttonTextStyles}>LOGIN</button>
        </div>
        {/* <Link to="/home">{strings.goToText} Home</Link> */}
        {/* <br /> */}
        <Link to="/SignUp">{strings.goToText} SignUp</Link>
        <br />
        <Link to="/ForgotPassword">{strings.goToText} ForgotPassword</Link>
        <p>{JSON.stringify(dummyApiData.page)}</p>
      </div>
    </div>
  );
};
const styles = {
  welcomeTextStyles: {
    textAlign: "center",
    fontWeight: "900",
  },
  headerTextDiv: {
    marginTop: "100px",
    textAlign: "center",
  },
  buttonTextStyles: {
    borderRadius: "50px",
    width: "150px",
    height: "30px",
    marginTop: "10px",
    backgroundColor: "Green",
    textAlign: "center",
  },
  inputstyleText: {
    // textDecoration:
  },
};

export default Login;
