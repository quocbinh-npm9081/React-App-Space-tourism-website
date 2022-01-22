import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes_S from './config/routers/Routes_S';
import './App.scss';


import Header from './components/header/Header';

function App() {
  // actual :that su
  const [actualPage, setActurePage] = useState('home');
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header actualPage={actualPage} />
        <Routes_S setActurePage={setActurePage} />
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App
