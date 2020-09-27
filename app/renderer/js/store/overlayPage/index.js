import { createSlice } from '@reduxjs/toolkit';

const overlayPageState = {
  overlayType: "subs",
  id: "12",
};
const overlaySlice = createSlice({
  name: "overlay",
  initialState: overlayPageState,
  reducers: {
    changeOverlay: (state,action) => {
      state.overlayType = action.payload.overlayType;
      state.id = action.payload.id;
    },
  },
});
const { changeOverlay } = overlaySlice.actions;
const overlayReducer = overlaySlice.reducer;

module.exports = {
  changeOverlay,
  overlayReducer
};
