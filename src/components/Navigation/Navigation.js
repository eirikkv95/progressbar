import React from 'react';
import styled from 'styled-components';
import todo from '../Image/todo.svg';
import lists from '../Image/tasks.svg';
import ProgressBar from '../Progress/Progress';
import { Link } from 'react-router-dom';
import ThemeToggler from './ThemeToggler';

const Navbar = (props) => {
  let progressBarSize = 55;
  if (!props.top) {
    progressBarSize = 50;
  }

  return (
    <Nav top={props.top}>
      <Ul>
        <List>
          <LinkStyle to="/">
            <LinkButton>
              <Image src={todo} alt="A list icon" />
              <Paragraph>Todo</Paragraph>
            </LinkButton>
          </LinkStyle>
        </List>
        <List>
          <LinkStyle to="/taskBoard">
            <LinkButton>
              <Image src={lists} alt="A list icon" />
              <Paragraph> Task Board</Paragraph>
            </LinkButton>
          </LinkStyle>
        </List>
      </Ul>
      <ThemeToggler />
      <ProgressBar size={progressBarSize} top={props.top} />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: ${(props) => (props.top ? '10rem' : '7rem')};
  width: 100%;
  position: ${(props) => (props.top ? 'absolute' : 'fixed')};
  background: ${(props) => (props.top ? 'none' : 'rgba(0,0,0,35%)')};
  backdrop-filter: ${(props) => (props.top ? 'none' : 'blur(250px)')};
  z-index: 9999;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.6rem;
  max-width: 1234px;
  margin-left: 2rem;
  margin-right: auto;
  @media (max-width: 980px) {
    margin-left: 6rem;
  }

  @media (max-width: 660px) {
    margin-left: 0rem;
  }
`;

const List = styled.li`
  &:not(last-child) {
    margin-right: 4.2rem;
  }

  @media (max-width: 660px) {
    &:not(last-child) {
      margin-right: 1.2rem;
    }
  }
`;
const LinkStyle = styled(Link)`
  text-decoration: none;
`;

const LinkButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  text-decoration: none;
  color: #fafafa;
  background: none;
  border: none;
  cursor: pointer;
  background-blend-mode: overlay;
  @media (max-width: 660px) {
    font-size: 1.2rem;
  }
`;

const Image = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Paragraph = styled.p`
  margin-left: 1rem;
`;
