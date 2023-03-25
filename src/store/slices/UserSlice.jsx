import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],

  // one time function use (for e.g. Only in admin) --> use reducers
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
      // return (state = []); //not correct way, assign empty array
      return []; //initial state empty, not assign
    },
  },

  // // not for userSlice, suppose for admin or teacher slice
  // // more than one time function use (for e.g. Use in admin, teacher) --> use extraReducers
  // extraReducers(builder) {
  //   builder.addCase(userSlice.actions.clearAllUsers, () => {
  //     return [];
  //   }); //addCase is by default function which allow us to use same function
  // },
});

console.log("userSlice", userSlice.actions);

export default userSlice.reducer;
// export reducers function in userSlice
export const { addUser, deleteUser, clearAllUsers } = userSlice.actions;
