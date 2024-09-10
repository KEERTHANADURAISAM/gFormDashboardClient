import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../slices/userAuth";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});