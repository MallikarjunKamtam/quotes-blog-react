import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">Quotes World</div>
      <div className="header-right">
        <NavLink
          style={{ textDecoration: "none", fontWeight: 900 }}
          to="/"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          <p className="link">Home</p>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", fontWeight: 900 }}
          to="/home"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          <p className="link">Quotes</p>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", fontWeight: 900 }}
          to="/addquotes"
          className={(navData) => (navData.isActive ? "active" : "none")}
        >
          <p className="link">Add Quotes</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
