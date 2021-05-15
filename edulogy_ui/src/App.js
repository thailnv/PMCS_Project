import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import TestPage from './pages/testPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/kiem-tra" component={TestPage}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
