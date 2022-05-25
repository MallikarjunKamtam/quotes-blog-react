import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getQuotes = createAsyncThunk("quote/getQuotes", async () => {
  return fetch(
    "https://gist.githubusercontent.com/b1nary/ea8fff806095bcedacce/raw/6e6de20d7514b93dd69b149289264997b49459dd/enterpreneur-quotes.json"
  )
    .then((res) => res.json())
    .then((res) =>
      res
        .map((item) => ({
          id: res.indexOf(item),
          from: item.from,
          text: item.text,
        }))
        .sort((a, b) => a.id - b.id)
    );
});

const initialState = {
  list: [
    {
      id: -1,
      text: "Never give up!",
      from: "Arjun",
    },
  ],
  status: null,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState: initialState,
  reducers: {
    marker(state, action) {
      state.list.push(action.payload);
    },
  },

  extraReducers: {
    [getQuotes.pending]: (state) => {
      state.status = "Loading";
    },

    [getQuotes.fulfilled]: (state, { payload }) => {
      state.list.push(...payload);
      state.status = "Success";
    },

    [getQuotes.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const quoteActions = quoteSlice.actions;

export default quoteSlice.reducer;
