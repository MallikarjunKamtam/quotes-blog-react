import React from "react";
import "./Quotedetails.css";
import { useParams } from "react-router-dom";
import Backbutton from "./Backbutton";

const Quotedetail = ({ data }) => {
  const params = useParams();

  const id = params.id;

  return (
    <div>
      <Backbutton />
      <div className="view-container">
        <h1 className="view-quote">{data.list[params.id]?.text}</h1>
        <h3>Author : {data.list[params.id]?.from}</h3>
      </div>
    </div>
  );
};

export default Quotedetail;
