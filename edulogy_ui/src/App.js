import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage';
import DiscussionsPage from './pages/discussionsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <HomePage/> */}
      <DiscussionsPage/>
    </BrowserRouter>
  );
}

export default App;
