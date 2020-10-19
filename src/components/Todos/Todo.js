import React from 'react';
import styled from 'styled-components';

import TrashBin from './trashbin';

const Todo = ({ todo, toggleComplete, removeTodo, handleRemoveClick }) => {
  function handleCheck() {
    toggleComplete(todo.id);
  }

  return (
    <TodoWrapper>
      <CheckBox
        onClick={handleCheck}
        style={{
          background: todo.completed
            ? 'linear-gradient(199.95deg, #DE6379 13.32%, rgba(248, 215, 45, 0.94) 98.56%)'
            : 'none',
          border: todo.completed ? 'none' : '3px solid #AEB3D7',
        }}
      ></CheckBox>
      <TodoNotes>
        <p>{todo.task}</p>
      </TodoNotes>
      <span>{todo.time}</span>
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
  display: flex;
  align-items: center;
  padding: 1.2rem 3.6rem;
`;

const CheckBox = styled.div`
  margin-right: 2.4rem;
  width: 2.8rem;
  height: 2.8rem;
  border: 3px solid #5c607c;
  border-radius: 33px;
  cursor: pointer;
`;

const TodoNotes = styled.div`
  font-size: 2rem;
  margin-right: auto;
`;
