import React from "react";
import "./Addquote.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Backbutton from "./Backbutton";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { quoteActions } from "../redux/quoteSlice";
import { useSelector } from "react-redux";

const Addquote = () => {
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.quote.list);

  const newData = {
    id: Math.round(Math.random() * 100000),
    text: quoteText,
    from: quoteAuthor,
  };

  const quoteTextHandler = (e) => {
    setQuoteText(e.target.value);
  };
  const authorHandler = (e) => {
    setQuoteAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (newData.from.length !== 0 && newData.text.length !== 0) {
      dispatch(quoteActions.marker(newData)) && navigate("/home");
    } else {
      toast.warn("Please Enter all the details");
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
