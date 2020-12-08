import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../Progress/Progress';

import ThemeToggler from './ThemeToggler';

const Navbar = (props) => {
  let progressBarSize = 55;
  if (!props.top) {
    progressBarSize = 50;
  }

  return (
    <Nav top={props.top}>
      <ThemeToggler />
      <ProgressBar size={progressBarSize} top={props.top} />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.25s linear;
  padding: 0 2rem;
  height: ${(props) => (props.top ? '10rem' : '7rem')};
  width: 100%;
  position: ${(props) => (props.top ? 'absolute' : 'fixed')};
  background: ${(props) => (props.top ? 'none' : 'rgba(0,0,0,35%)')};
  backdrop-filter: ${(props) => (props.top ? 'none' : 'blur(250px)')};
  z-index: 9999;
`;
