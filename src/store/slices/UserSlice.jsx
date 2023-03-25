import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log("add user in user slice => ", action.payload);
    },
    deleteUser(state, action) {
      state.splice(action.payload, 1); // index number, how many data delete
      console.log("delete user id in user slice => ", action.payload);
    },
    clearAllUsers(state, action) {
      // return (state = []); //not correct way
      return []; //initial state empty
      // console.log("delete all users id in user slice => ", action.payload);
    },
  },
});

console.log("userSlice", userSlice.actions);

export default userSlice.reducer;
// export reducers function in userSlice
export const { addUser, deleteUser, clearAllUsers } = userSlice.actions;
