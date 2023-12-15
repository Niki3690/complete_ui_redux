import { createSlice } from "@reduxjs/toolkit";

let Cartslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    incr(state, action) {
      let item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decr(state, action) {
      let item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export let { add, remove, incr, decr } = Cartslice.actions;
export default Cartslice.reducer;
