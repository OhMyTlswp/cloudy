import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Box from './components/Box/Box';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Room from './pages/Room/Room';
import Rooms from './pages/Rooms/Rooms';
import Signin from './pages/Signin/Signin';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/rooms">
          <Header />
          <Rooms />
        </Route>
        <Route path="/room/:id">
          <Header />
          <Room />
        </Route>
        <Route exact path="/">
          <Signin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
