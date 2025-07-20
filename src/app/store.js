// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import authReducer from "../features/auth/authSlice"; // ✅

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    auth: authReducer, // ✅
  },
});

export default store;
