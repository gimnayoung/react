import { configureStore, createSlice } from "@reduxjs/toolkit";

let cartlist = createSlice({
  name: "cartlist",
  initialState: [
    { id: 0, name: "white and black", count: 2 },
    { id: 2, name: "Gray Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state) {
      return state.count + 1;
    },
  },
});
// export let { changeCount } = cartlist.action

export default configureStore({
  reducer: {
    cartlist: cartlist.reducer,
  },
});
