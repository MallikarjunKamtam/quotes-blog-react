import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import QuotesJson from "./QuotesJson";
import "./QuotesList.css";

const QuotesList = () => {
  const data = useSelector((state) => state.quote.list);

  // console.log(data);

  return (
    <div>
      <div key={Math.random} className="card-while-container">
        {data?.map((item) => (
          <div key={Math.random()} className="quote-card">
            <div className="quote-matter">
              <p className="actual-quote">{item?.text}</p>
              <p className="author">{item?.from}</p>
            </div>

            <Link
              to={`/quotes/${item.id + 1}/details`}
              style={{ textDecoration: "none" }}
              className="view-button"
            >
              View
            </Link>
          </div>
        ))}
      </div>
      <QuotesJson />
    </div>
  );
};

export default QuotesList;
