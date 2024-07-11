import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../utils/todoSlice"

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;

