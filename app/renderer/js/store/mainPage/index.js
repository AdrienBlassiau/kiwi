import { createSlice } from '@reduxjs/toolkit';

const mainPageState = {
  mainType: "movieMain",
  id: "0",
};
const pageSlice = createSlice({
  name: "page",
  initialState: mainPageState,
  reducers: {
    changePage: (state,action) => {
      state.mainType = action.payload.mainType;
      state.id = action.payload.id;
    },
  },
});
const { changePage } = pageSlice.actions;
const pageReducer = pageSlice.reducer;

module.exports = {
  changePage,
  pageReducer
};
