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
    },
    deleteTodos: (state, action) => {
      state.todos = state.todos.filter((data) => data.id != action.payload);
    },
    todoStatusEdit: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            status: action.payload.status,
          };
        } else {
          return item;
        }
      });

      console.log(action.payload.status);
    },
  },
});

// export actions
export const { loadAllTodos, createNewTodos, deleteTodos, todoStatusEdit } =
  todoSlice.actions;

// export default reducer
export default todoSlice.reducer;
