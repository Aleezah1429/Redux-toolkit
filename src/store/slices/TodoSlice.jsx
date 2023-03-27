import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; // createAsyncThunk is middleware which perform delay task

// todoSlice Action
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

// todoSlice
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    // if data not fetch just call the API, show loading
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    // if data fetch successfully
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // if error occur
    builder.addCase(fetchTodos.rejected, (state, action) => {
      console.log("ERROR", action.payload);
      state.isError = true;
    });
  },
});

console.log("todoSlice", todoSlice.actions);

export default todoSlice.reducer;
