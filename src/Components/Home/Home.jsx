import React from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";

const Home = () => {
  return (
    <div>
      <h3>{strings.homeText}</h3>
      <Link to="/">{strings.goToText} login</Link>
    </div>
  );
};
export default Home;
