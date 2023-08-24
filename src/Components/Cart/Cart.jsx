import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import strings from "../Constants/StringConstants";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function Cart() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/Home");
  };
  useEffect(() => {
    // alert(props);
  }, []);
  return (
    <div>
      <p>cart screen</p>
    </div>
  );
}
