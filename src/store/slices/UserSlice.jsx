import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(store, action) {},
    deleteUser(store, action) {},
  },
});

console.log("userSlice", userSlice.actions);

export default userSlice.reducer;
