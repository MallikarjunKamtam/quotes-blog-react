import React from "react";
import "./Homepage.css";
import Header from "./Header";
import Addquote from "./Addquote";
import Quotedetail from "./Quotedetail";
import { Routes, Route } from "react-router-dom";
import QuotesList from "./QuotesList";
import { useSelector } from "react-redux";

const Homepage = () => {
  const data = useSelector((state) => state.quote);
  //   console.log(data);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/home" element={<QuotesList />}></Route>
        <Route path="/addquotes" element={<Addquote />} />
        <Route
          path={`/quotes/:id/details`}
          element={<Quotedetail data={data} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Homepage;
