import React, { useState, useContext } from 'react';
import { Progress } from 'react-sweet-progress';
import { ValueContext } from '../../context/valueContext';
import styled from 'styled-components';
import 'react-sweet-progress/lib/style.css';

const ProgressBar = () => {
  const appContext = useContext(ValueContext);

  const { todos } = appContext;
  const tasks = todos.length;

  const array = todos.filter((todo) => todo.completed === true);
  const percentage = Math.floor((array.length / tasks) * 100);
  const zero = 0;

  return (
    <ProgressWrap>
      <ProgressInfo>
        <First>
          <H2>Tasks</H2>
          <Desc>{tasks}</Desc>
        </First>
        <Last>
          <H2>Completed</H2>
          <Desc>
            {array.length} / {tasks}
          </Desc>
        </Last>
      </ProgressInfo>
      <Progress
        type="circle"
        percent={todos.length ? percentage : zero}
        width={350}
        theme={{
          active: {
            trailColor: '#303240',
            color: 'rgb(223 105 118)',
          },
          success: {
            trailColor: '#303240',
            color: 'rgb(223 105 118)',
            symbol: '🥳',
          },
          default: {
            trailColor: '#303240',
            color: 'rgb(223 105 118)',
          },
        }}
      />
    </ProgressWrap>
  );
};

export default ProgressBar;

const ProgressWrap = styled.div`
  display: grid;
  justify-content: center;
`;

const H2 = styled.h2`
  font-size: 3.4rem;
`;

const Desc = styled.p`
  font-size: 2.4rem;
  text-align: center;
`;

const ProgressInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
const First = styled.div`
  justify-self: center;
`;
const Last = styled.div`
  justify-self: center;
`;
