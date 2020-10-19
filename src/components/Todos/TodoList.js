import React, { useContext } from 'react';

import Todo from './Todo';
import { ValueContext } from '../../context/valueContext';
import styled from 'styled-components';

const TodoList = () => {
  const appProvider = useContext(ValueContext);
  const { todos, toggleComplete, removeTodo } = appProvider;
  return (
    <TodoWrapper>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </TodoWrapper>
  );
};

export default TodoList;

const TodoWrapper = styled.div`
  margin-top: 4rem;
  height: min-content;
  padding: 2rem 0;
  border-radius: 2.2rem;
  border: 0.5px solid #5e6387;
  background: rgb(250, 250, 250, 20%);
  filter: blur(40);
  box-shadow: 0 2rem 4rem rgb(0, 0, 0, 35%);
`;
