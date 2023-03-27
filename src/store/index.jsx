import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/TodoSlice";
import userSlice from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    todos: todoSlice,
  },
});

export default store;
