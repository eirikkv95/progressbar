import React from 'react';
import styled from 'styled-components';

export const Note = () => {
  return (
    <NoteWrapper>
      <p>Write in the inputfield above and the notes will pop up here</p>
    </NoteWrapper>
  );
};

const NoteWrapper = styled.div`
  font-size: 2rem;
  padding: 2rem;
  background: radial-gradient(
    72.38% 108.23% at 82.58% 82.27%,
    rgba(217, 31, 120, 0.5) 9.9%,
    rgba(159, 32, 137, 0.5) 52.08%,
    rgba(94, 30, 174, 0.5) 100%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  transform: skew(14deg, 3deg);
  transition: all 0.4s ease;
  &:hover {
    transform: skew(0deg, 0deg);
  }
`;
