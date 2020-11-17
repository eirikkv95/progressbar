import React, { useContext } from 'react';
import { Progress } from 'react-sweet-progress';
import { TodoContext } from '../../context/todoContext';
import styled from 'styled-components';
import 'react-sweet-progress/lib/style.css';

const ProgressBar = (props) => {
  const appContext = useContext(TodoContext);

  const { todos } = appContext;
  const tasks = todos.length;

  const array = todos.filter((todo) => todo.completed === true);

  return (
    <ProgressWrap>
      <Progress
        type="circle"
        percent={todos.length ? Math.floor((array.length / tasks) * 100) : 0}
        width={props.size}
        strokeWidth={10}
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
