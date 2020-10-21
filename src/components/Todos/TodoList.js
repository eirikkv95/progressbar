import React, { useContext } from 'react';

import Todo from './Todo';
import { ValueContext } from '../../context/valueContext';
import styled from 'styled-components';
import { Note } from '../Reusable/note';

const TodoList = () => {
  const appProvider = useContext(ValueContext);
  const { todos, toggleComplete, removeTodo } = appProvider;
  return todos.length ? (
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
  ) : (
    <EmptyIllustration>{/* <Note /> */}</EmptyIllustration>
  );
};

export default TodoList;

const TodoWrapper = styled.div`
  margin: 4rem 0;
  height: min-content;
  padding: 2rem 3.6rem;
  border-radius: 2.2rem;

  background: rgb(0, 0, 0, 30%);
  filter: blur(40);
  box-shadow: 0px 20px 40px rgba(33, 62, 124, 0.35),
    0px 20px 40px rgba(33, 62, 124, 0.25);
`;

const EmptyIllustration = styled.div`
  margin-top: 4rem;
`;

const Img = styled.img`
  width: 100%;
`;
