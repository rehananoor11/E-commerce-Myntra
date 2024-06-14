/* eslint-disable no-unused-vars */
import * as reduxtk from "@reduxjs/toolkit";

const bagSlice = reduxtk.createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export default bagSlice;

export const bagActions = bagSlice.actions;
