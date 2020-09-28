import { createSlice } from '@reduxjs/toolkit';
import { getVTTData } from '../../utils/captionsManager';

const streamingState = {
  currentTime: 520,
  subs: getVTTData(),
  currentLine: null,
  shift: 0
};

const streamingSlice = createSlice({
  name: "streaming",
  initialState: streamingState,
  reducers: {
    setCurrentTime: (state,action) => {
      state.currentTime = action.payload.currentTime;
    },
    setShift: (state,action) => {
      state.shift = action.payload.shift;
    },
    setCurrentLine: (state,action) => {
      state.currentLine = action.payload.currentLine;
    },
    incrementTime: (state,action) => {
      state.currentTime = state.currentTime + 0.2;
    }
  },
});

const { setCurrentTime, setShift, setCurrentLine, incrementTime } = streamingSlice.actions;
const streamingReducer = streamingSlice.reducer;

module.exports = {
  setCurrentTime,
  setShift,
  setCurrentLine,
  incrementTime,
  streamingReducer
};

