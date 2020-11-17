import React from 'react';
import styled from 'styled-components';

import TrashBin from './trashbin';

const Todo = ({ todo, toggleComplete, removeTodo, handleRemoveClick }) => {
  function handleCheck() {
    toggleComplete(todo.id);
  }

  return (
    <TodoWrapper>
      <CheckBox onClick={handleCheck} completed={todo.completed}></CheckBox>
      <TodoNotes>
        <P>{todo.task}</P>
      </TodoNotes>
      <TrashBin
        handleRemoveClick={handleRemoveClick}
        removeTodo={removeTodo}
        todo={todo}
      />
    </TodoWrapper>
  );
};

export default Todo;

const TodoWrapper = styled.div`
  color: #fff;
  border-bottom: 1px solid rgb(47, 46, 101, 16%);
  display: flex;
  align-items: center;
  padding: 1.2rem;

  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const CheckBox = styled.button`
  background: ${(props) =>
    props.completed
      ? 'linear-gradient(199.95deg, #DE6379 13.32%, rgba(248, 215, 45, 0.94) 98.56%)'
      : 'none'};
  border: ${(props) => (props.completed ? 'none' : '1px solid #AEB3D7')};
  margin-right: 2.4rem;
  min-width: 2.8rem;
  min-height: 2.8rem;
  border: 1px solid #5c607c;
  border-radius: 33px;
  cursor: pointer;

  @media (max-width: 480px) {
    margin-right: 1.4rem;
    min-width: 1.8rem;
    min-height: 1.8rem;
  }
`;

const TodoNotes = styled.div`
  margin-right: auto;
`;

const P = styled.p`
  margin-right: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
`;
