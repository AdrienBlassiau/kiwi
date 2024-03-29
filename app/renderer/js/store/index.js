import {
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import { authReducer } from './auth';
import { searchReducer } from './search';
import { pageReducer } from './mainPage';
import { overlayReducer } from './overlayPage';
import { streamingReducer } from './streamingPage';


const middleware = [
  ...getDefaultMiddleware(),
  /*YOUR CUSTOM MIDDLEWARES HERE*/
];

const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    page: pageReducer,
    overlay: overlayReducer,
    streaming: streamingReducer
  },
  middleware,
});

module.exports = {
  store
};
