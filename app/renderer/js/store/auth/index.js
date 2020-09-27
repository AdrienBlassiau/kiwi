import { createSlice } from '@reduxjs/toolkit';

const state = {
  token: "ok1",
  error: "ok2",
};
const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("on c'est bien loggué !");
      //state.token = action.payload;
    },
    loginFailed: (state, action) => {
      //state.error = action.payload;
    },
  },
});

const { loginSuccess, loginFailed } = authSlice.actions;
const authReducer = authSlice.reducer;

module.exports = {
  loginSuccess,
  loginFailed,
  authReducer
};
