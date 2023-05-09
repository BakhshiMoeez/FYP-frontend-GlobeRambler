import { configureStore } from "@reduxjs/toolkit";
import profilePathReducer from "./profilePathSlice";

const store = configureStore({
  reducer: {
    auth: profilePathReducer,
  },
});

export default store;
