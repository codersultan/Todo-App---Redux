import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";

// create redux store
const store = configureStore({
  reducer: {
    tasklist: todoReducer,
  },
  middleware: (getDefualtMiddleware) => getDefualtMiddleware(),
  devTools: true,
});

// export default
export default store;
