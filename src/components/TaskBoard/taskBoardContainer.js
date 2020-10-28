import React from 'react';
import styled from 'styled-components';
import WorkInProgress from '../Image/workInProgress.svg';

const TaskBoardContainer = () => {
  return (
    <TaskBoardWrapper>
      <Heading>Work in progress</Heading>
      <Figure>
        <Image src={WorkInProgress} alt="A person working on his computer" />
      </Figure>
    </TaskBoardWrapper>
  );
};

export default TaskBoardContainer;

const TaskBoardWrapper = styled.div`
  max-width: 1234px;
  height: 70vh;
  padding: 0 2rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Figure = styled.figure`
  height: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  height: 100%;
  max-width: 100%;
`;

const Heading = styled.h1`
  font-size: 4rem;
  text-align: center;
`;
