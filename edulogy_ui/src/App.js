import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import ToeicInfoPage from './pages/toeicInfoPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/thong-tin" component={ToeicInfoPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
