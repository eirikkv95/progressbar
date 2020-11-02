import React from 'react';
import styled from 'styled-components';

import TrashBin from './trashbin';

const Todo = ({ todo, toggleComplete, removeTodo, handleRemoveClick }) => {
  function handleCheck() {
    toggleComplete(todo.id);
    Vibrate(300);
  }

  function Vibrate(ms) {
    navigator.vibrate(ms);
  }

  return (
    <TodoWrapper>
      <CheckBox
        onClick={handleCheck}
        style={{
          background: todo.completed
            ? 'linear-gradient(199.95deg, #DE6379 13.32%, rgba(248, 215, 45, 0.94) 98.56%)'
            : 'none',
          border: todo.completed ? 'none' : '1px solid #AEB3D7',
        }}
      ></CheckBox>
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
`;

const CheckBox = styled.button`
  margin-right: 2.4rem;
  min-width: 2.8rem;
  min-height: 2.8rem;
  border: 1px solid #5c607c;
  border-radius: 33px;
  cursor: pointer;
`;

const TodoNotes = styled.div`
  margin-right: auto;
`;

const P = styled.p`
  margin-right: 1rem;
  font-size: 1.6rem;
`;
