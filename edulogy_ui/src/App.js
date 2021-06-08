import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './pages/homepage';
import DiscussionsPage from './pages/discussionsPage';
import './App.css';
import DiscussionDetailPage from './pages/discussionDetailPage';

function App() {
  return (
    <BrowserRouter>
      {/* <HomePage/> */}
      <DiscussionsPage/>
      {/* <DiscussionDetailPage /> */}
    </BrowserRouter>
  );
}

export default App;
