import React from 'react';
import styled from 'styled-components';

const TrashBin = ({ todo, removeTodo }) => {
  // ! Use Styled Components
  const cursor = {
    cursor: 'pointer',
    fill: 'white',
  };
  const strokeColor = {
    stroke: 'orange',
  };

  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <TrashButton onClick={handleRemoveClick} style={cursor}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-reactroot=""
      >
        <path
          style={strokeColor}
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#2249B3"
          fill="none"
          d="M16.13 22H7.87C7.37 22 6.95 21.63 6.88 21.14L5 8H19L17.12 21.14C17.05 21.63 16.63 22 16.13 22Z"
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#2249B3"
          d="M3.5 8H20.5"
          style={strokeColor}
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#2249B3"
          d="M10 12V18"
          style={strokeColor}
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#2249B3"
          d="M14 12V18"
          style={strokeColor}
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#2249B3"
          fill="none"
          d="M16 5H8L9.7 2.45C9.89 2.17 10.2 2 10.54 2H13.47C13.8 2 14.12 2.17 14.3 2.45L16 5Z"
          style={strokeColor}
        ></path>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="1"
          stroke="#2249B3"
          d="M3 5H21"
          style={strokeColor}
        ></path>
      </svg>
    </TrashButton>
  );
};

export default TrashBin;

const TrashButton = styled.button`
  background: none;
  border: none;
`;

// const Path = styled.path``
