import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log("add user in user slice => ", action.payload);
    },
    deleteUser(state, action) {},
  },
});

console.log("userSlice", userSlice.actions);

export default userSlice.reducer;
// export reducers function in userSlice
export const { addUser } = userSlice.actions;
