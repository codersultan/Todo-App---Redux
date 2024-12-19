import { createSlice } from "@reduxjs/toolkit";

// create todo slice
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    error: null,
    message: null,
    loader: false,
  },
  reducers: {},
});

// export actions
// export const {} = todoSlice.actions;

// export default reducer
export default todoSlice.reducer;
