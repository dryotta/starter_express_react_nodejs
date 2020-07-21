import React from 'react';
import { BrowserRouter, MemoryRouter, Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import MainMenu from './core/MainMenu'
import Home from './core/Home'
import ApiTest from './ui_test/ApiTest'
import CarouselsTest from './ui_test/CarouselsTest'
import './App.css';

function App() {
  let Router = (process.env.REACT_APP_USE_MEMORY_ROUTER) ? MemoryRouter : BrowserRouter;
  return (
    <Router>
      <MainMenu />
      <Container className="mt-3">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/carousels_test" component={CarouselsTest} />
          <Route path="/api_test" component={ApiTest} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
