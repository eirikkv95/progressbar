import React, { useContext } from 'react';
import './base/main.scss';
import styled from 'styled-components';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import ProgressBar from './components/Progress/Progress';

import { ValueContext } from './context/valueContext';
import Navbar from './components/Navigation/Navigation';

export default function App() {
  const valueInfo = useContext(ValueContext);
  const { addTodo } = valueInfo;

  return (
    <MainWrapper>
      <Navbar />
      <Main>
        <Note>
          <TodoForm addTodo={addTodo} />
          <TodoList />
        </Note>
        <Progress>
          <ProgressBar />
        </Progress>
      </Main>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background:  linear-gradient(47.03deg, #76E7E7 -3.73%, #6B16DB 93.84%);
  );
`;
const Main = styled.main`
  max-width: 1234px;
  padding: 0 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
`;

const Note = styled.section`
  position: relative;
`;
const Progress = styled.section`
  height: 500px;
`;
