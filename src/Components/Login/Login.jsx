import React from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";

const Login = () => {
  return (
    <div>
      <div style={styles.headerTextDiv}>
        <h1 style={styles.welcomeTextStyles}>Welcome</h1>

        <div>
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
};

export default Login;
