import React from 'react';
import './base/main.scss';

import styled from 'styled-components';
import Navbar from './components/Navigation/Navigation';
import TaskBoard from './Pages/TaskBoard';
import TodoProsess from './Pages/TodoProsess';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function App() {
  return (
    <MainWrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <TodoProsess />
          </Route>
          <Route path="/taskBoard">
            <TaskBoard />
          </Route>
        </Switch>
      </Router>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background:  linear-gradient(47.03deg, #76E7E7 -3.73%, #6B16DB 93.84%);
  );
`;
