import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Signup/Signup";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Cart from "./Components/Cart/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Products />} />
        <Route path="product" element={<Product />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;