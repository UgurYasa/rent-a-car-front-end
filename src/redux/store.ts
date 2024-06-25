import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import menuReducer from "./menu";
export default configureStore({
  reducer: {
    user:userReducer,
    menu:menuReducer,
  },
});
