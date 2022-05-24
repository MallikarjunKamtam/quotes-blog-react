import React from "react";
import "./welcome.css";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to the Quotes World !</h1>
      <h3>Click on the Home to find out more....</h3>
      <img className="cheers" src={require("./cheers.png")} alt="" />
    </div>
  );
};

export default Welcome;
