import { createSlice } from '@reduxjs/toolkit';

const searchState = {
  input: "",
  focus: false,
};
const searchSlice = createSlice({
  name: "search",
  initialState: searchState,
  reducers: {
    closeFocus: (state) => {
      state.focus = false;
    },
    openFocus: (state) => {
      state.focus = true;
    },
  },
});
const { closeFocus, openFocus } = searchSlice.actions;
const searchReducer = searchSlice.reducer;

module.exports = {
  closeFocus,
  openFocus,
  searchReducer
};

