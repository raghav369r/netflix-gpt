import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";

const userStore = configureStore({
  reducer: { user: userReducer, movies: movieReducer },
});

export default userStore;
