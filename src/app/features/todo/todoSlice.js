import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../../../data/todos";

// create todo slice
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    error: null,
    message: null,
    loader: false,
  },
  reducers: {
    loadAllTodos: (state) => {
      state.todos = todos;
    },
  },
});

// export actions
export const { loadAllTodos } = todoSlice.actions;

// export default reducer
export default todoSlice.reducer;
