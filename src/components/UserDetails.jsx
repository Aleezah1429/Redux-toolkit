import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { fakeData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../store/slices/UserSlice";

const UserDetails = () => {
  // dispatch data
  const dispatch = useDispatch();

  // add new user
  const addNewUser = (data) => {
    console.log("add user => ", data);
    dispatch(addUser(data));
  };

  // for display data
  const dataDisplay = useSelector((state) => {
    return state.users; // store -> reducer -> users
  });

  console.log("data display => ", dataDisplay);

  // delete any user
  const deleteOneUser = (id) => {
    console.log("delete any user => ", id);
    dispatch(deleteUser(id));
  };

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button onClick={() => addNewUser(fakeData())}>Add New Users</button>
        </div>
        <ul>
          {/* <li>{dataDisplay}</li> */}
          {dataDisplay.map((e, id) => {
            return (
              <Wrapper>
                <li key={id}>
                  {e}
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={() => deleteOneUser(id)}
                  >
                    Delete User
                  </button>
                </li>
              </Wrapper>
            );
          })}
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
