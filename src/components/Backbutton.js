import React from "react";
import { Link } from "react-router-dom";
import "./Backbutton.css";

const Backbutton = () => {
  return (
    <div>
      <Link style={{ textDecoration: "none", color: "black" }} to="/home">
        <i className="fi fi-rr-caret-left back"></i>
      </Link>
    </div>
  );
};

export default Backbutton;
