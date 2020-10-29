import React from 'react';
import styled from 'styled-components';
import TaskBoardConteiner from '../components/TaskBoard/taskBoardContainer';

const TaskBoard = () => {
  return (
    <Space>
      <TaskBoardConteiner />
    </Space>
  );
};

export default TaskBoard;

const Space = styled.div`
  padding-top: 15rem;
`;
