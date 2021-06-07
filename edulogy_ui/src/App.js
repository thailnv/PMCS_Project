import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AdminPage } from './pages/adminPage/adminPage';

function App() {
  return (
    <BrowserRouter>
      <AdminPage/>
    </BrowserRouter>
  );
}

export default App;
