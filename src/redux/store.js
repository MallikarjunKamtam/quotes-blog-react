import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./quoteSlice";

const store = configureStore({
  reducer: {
    quote: quoteSlice.reducer,
  },
});

export default store;
