import React from "react";
import "./Quotedetails.css";
import { useParams } from "react-router-dom";
import Backbutton from "./Backbutton";

const Quotedetail = ({ data }) => {
  const params = useParams();
  // console.log(data[params.id - 1].quote);
  console.log(data);
  return (
    <div>
      <Backbutton />
      <div className="view-container">
        <h1 className="view-quote">{data[params.id - 1].quote}</h1>
        <h3>Author : {data[params.id - 1].author}</h3>
      </div>
    </div>
  );
};

export default Quotedetail;
