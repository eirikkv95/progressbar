import React, { useContext } from 'react';

import Todo from './Todos';
import { ValueContext } from '../../context/valueContext';
import styled from 'styled-components';
// import Note from '../Placeholders/note'

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
  margin: 4rem 0rem;
  background: rgb(0, 0, 0, 30%);
  backdrop-filter: blur(250px);
  box-shadow: 0px 20px 40px rgba(33, 62, 124, 0.35),
    0px 20px 40px rgba(33, 62, 124, 0.25);

  @media (max-width: 980px) {
    margin: 4rem 6rem;
  }
  @media (max-width: 660px) {
    margin: 4rem 0rem;
  }
`;

const EmptyIllustration = styled.div`
  margin-top: 4rem;
`;
