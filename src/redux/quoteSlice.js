import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ quote: "Never give up!", author: "Arjun", id: 1 }];

const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {
    marker(state, action) {
      state.push(action.payload);
    },
  },
});

export const quoteActions = quoteSlice.actions;

export default quoteSlice;
