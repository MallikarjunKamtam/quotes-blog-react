import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getQuotes } from "../redux/quoteSlice";

const QuotesJson = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuotes());
  }, [dispatch]);

  return (
    <div>
      <h1>Loading more...</h1>
    </div>
  );
};

export default QuotesJson;
