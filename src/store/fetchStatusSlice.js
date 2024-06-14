import * as reduxtk from "@reduxjs/toolkit";
const fetchStatusSlice = reduxtk.createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    fetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingstarted: (state) => {
      state.fetching = true;
    },
    markFetchingFinished: (state) => {
      state.fetching = false;
    },
  },
});

export default fetchStatusSlice;

export const statusActions = fetchStatusSlice.actions;
