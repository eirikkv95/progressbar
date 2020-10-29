import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoForm from '../components/Todos/TodoForm';
import TodoList from '../components/Todos/TodoList';
import Progress from '../components/Progress/Progress';

import { ValueContext } from '../context/valueContext';

const TodoProsess = () => {
  const valueInfo = useContext(ValueContext);
  const { addTodo } = valueInfo;
  return (
    <Main>
      <Note>
        <TodoForm addTodo={addTodo} />
        <TodoList />
      </Note>
    </Main>
  );
};

export default TodoProsess;

const Main = styled.main`
  max-width: 73.4rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  position: relative;
  z-index: 10;
  padding-top: 13rem;
`;

const Note = styled.section`
  position: relative;
  padding: 0 2rem;
`;
