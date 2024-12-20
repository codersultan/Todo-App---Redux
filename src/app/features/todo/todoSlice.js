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
    createNewTodos: (state, action) => {
      state.todos.push({
        ...action.payload,
        id: Math.floor(Math.random() * 100000),
      });

      console.log(action.payload);
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((data) => data.id != action.payload);
    },
    todoDataEdit: (state, action) => {},
  },
});

// export actions
export const { loadAllTodos, createNewTodos, deleteTodos } = todoSlice.actions;

// export default reducer
export default todoSlice.reducer;
