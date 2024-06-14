/* eslint-disable no-unused-vars */
import * as reduxtk from "@reduxjs/toolkit";
const itemsSlice = reduxtk.createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export default itemsSlice;

export const itemsActions = itemsSlice.actions;
