import React, { useState, useEffect } from 'react';
import './base/main.scss';

import styled from 'styled-components';
import Navbar from './components/Navigation/Navigation';
import TaskBoard from './Pages/TaskBoard';
import TodoProsess from './Pages/Todo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LineWave from './components/Image/lineWaves.svg';

export default function App() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 90;
      if (isTop !== top) {
        setTop(!top);
      }
    });
  });
  return (
    <MainWrapper>
      <Router>
        <Navbar top={top} />
        <Switch>
          <Route exact path="/">
            <TodoProsess />
          </Route>
          <Route path="/taskBoard">
            <TaskBoard />
          </Route>
        </Switch>
      </Router>
      <Image src={LineWave} alt="lines that form a wave" />
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background:  var(--colors-linear);
  );
`;

const Image = styled.img`
  width: 100%;
  position: fixed;
  bottom: 2%;
  z-index: 0;
  @@media (min-width: 980px) {
    display: none;
  }
`;
