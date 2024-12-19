import { createSlice } from "@reduxjs/toolkit";

// create todo slice
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoInt: null,
  },
  reducers: {},
});

// export actions
// export const {} = todoSlice.actions;

// export default
export default todoSlice.reducer;
