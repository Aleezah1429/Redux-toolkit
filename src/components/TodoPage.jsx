import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/slices/TodoSlice";

const TodoPage = () => {
  // dispatch data
  const dispatch = useDispatch();

  // for todos data
  const todoDataDisplay = useSelector((state) => {
    return state.todos;
  });
  console.log("todoDataDisplay", todoDataDisplay);

  if (todoDataDisplay.isLoading) {
    return <h1>Loading ....</h1>;
  }

  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of Todos</div>
          <button onClick={() => dispatch(fetchTodos())}>Add Todos</button>
        </div>
        <ul>
          {todoDataDisplay.data?.map((e, id) => {
            return (
              <Wrapper>
                <li key={id}>{e.title}</li>
              </Wrapper>
            );
          })}
        </ul>
        <hr />
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

export default TodoPage;
