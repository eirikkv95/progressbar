import React from 'react';
import styled from 'styled-components';
import Trash from '../Image/trash.svg';

const TrashBin = ({ todo, removeTodo }) => {
  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <TrashButton onClick={handleRemoveClick}>
      <img src={Trash} alt="hei" />
    </TrashButton>
  );
};

export default TrashBin;

const TrashButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

// const Path = styled.path``
