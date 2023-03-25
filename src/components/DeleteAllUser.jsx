import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { clearAllUsers } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  // dispatch data
  const dispatch = useDispatch();

  // delete all users
  const deleteAllUsers = () => {
    console.log("delete all users => ");
    dispatch(clearAllUsers());
  };

  return <button onClick={() => deleteAllUsers()}>Delete All Users</button>;
};
