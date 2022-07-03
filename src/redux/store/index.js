// @packages
import { configureStore } from "@reduxjs/toolkit";

// @own
import tasksReducer from "../features/tasks/";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
