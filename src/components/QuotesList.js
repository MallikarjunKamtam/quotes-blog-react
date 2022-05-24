import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./QuotesList.css";

const QuotesList = () => {
  const data = useSelector((state) => state.quote);

  return (
    <div className="card-while-container">
      {data.map((item) => (
        <div key={item.id} className="quote-card">
          <div className="quote-matter">
            <p className="actual-quote">{item.quote}</p>
            <p className="author">{item.author}</p>
          </div>

          <Link
            to={`/quotes/${item.id}/details`}
            style={{ textDecoration: "none" }}
            className="view-button"
          >
            View
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuotesList;
