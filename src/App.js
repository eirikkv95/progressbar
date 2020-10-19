import React, { useContext } from 'react';
import './base/main.scss';
import styled from 'styled-components';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import ProgressBar from './components/Progress/Progress';

import { ValueContext } from './context/valueContext';

export default function App() {
  const valueInfo = useContext(ValueContext);
  const { addTodo } = valueInfo;

  return (
    <MainWrapper>
      <ContentWrapper>
        <Note>
          <TodoForm addTodo={addTodo} />
          <TodoList />
        </Note>
        <Progress>
          <ProgressBar />
        </Progress>
      </ContentWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(67.47deg, #251551 -1.24%, #3c0404 104.43%);
`;
const ContentWrapper = styled.div`
  max-width: 120rem;
  padding: 3rem 2rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
`;

const Note = styled.div`
  position: relative;
  padding: 0 4rem;
`;
const Progress = styled.div`
  height: 500px;
`;
