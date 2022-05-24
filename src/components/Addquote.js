import React from "react";
import "./Addquote.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useState } from "react";
import Backbutton from "./Backbutton";
import { quoteActions } from "../redux/quoteSlice";
import { useSelector } from "react-redux";

const Addquote = () => {
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.quote);
  const id = data[data.length - 1].id;

  const quoteTextHandler = (e) => {
    setQuoteText(e.target.value);
  };
  const authorHandler = (e) => {
    setQuoteAuthor(e.target.value);
  };

  const newData = {
    id: id + 1,
    quote: quoteText,
    author: quoteAuthor,
  };

  // console.log(newData);

  const submitHandler = (e) => {
    e.preventDefault();
    if (newData.author.length !== 0 && newData.quote.length !== 0) {
      dispatch(quoteActions.marker(newData)) && navigate("/home");
    } else {
      alert("Enter all details");
    }
  };

  return (
    <div>
      <Backbutton />
      <form onSubmit={submitHandler} className="add-quote-container" action="">
        <input
          className="quote-text"
          value={quoteText}
          onChange={quoteTextHandler}
          type="text"
          placeholder="Quote text"
        />
        <input
          onChange={authorHandler}
          value={quoteAuthor}
          className="quote-author"
          type="text"
          placeholder="author"
        />
        <button type="submit" className="quote-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addquote;
