import React from 'react';
import styled from 'styled-components';
import todo from '../Image/todo.svg';
import lists from '../Image/tasks.svg';

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <List>
          <Link href="#">
            <LinkButton>
              <Image src={todo} alt="A list icon" />
              <Paragraph>Todo</Paragraph>
            </LinkButton>
          </Link>
        </List>
        <List>
          <Link href="#">
            <LinkButton>
              <Image src={lists} alt="A list icon" />
              <Paragraph> Task Board</Paragraph>
            </LinkButton>
          </Link>
        </List>
      </Ul>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 10rem;
  max-width: 1234px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.6rem;
`;

const List = styled.li``;

const LinkButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  text-decoration: none;
  color: #fafafa;
  background: none;
  padding: 12px 2.4rem;
  border-radius: 1.4rem;
  transition: 0.3s ease-in;
  border: none;
  cursor: pointer;
  background-blend-mode: overlay;

  &:hover {
    background: rgba(250, 250, 250, 0.2);
    filter: blur(40);
    box-shadow: rgba(31, 47, 71, 0.25) 0px 20px 40px,
      rgba(0, 0, 0, 0.1) 0px 1px 5px,
      rgba(255, 255, 255, 0.4) 0px 0px 0px 0.5px inset;
  }
`;
const Link = styled.a`
  text-decoration: none;
`;
const Image = styled.img`
  width: 2rem;
  height: 2rem;
`;

const Paragraph = styled.p`
  margin-left: 1rem;
`;
