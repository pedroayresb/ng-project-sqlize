import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Startpage from './pages/Startpage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Homepage from './pages/Homepage';
import TransferPage from './pages/TransferPage';
import HistoryPage from './pages/HistoryPage';
import AyrProvider from './context/AyrProvider';
import FlagContainer from './components/FlagContainer';
import './App.css';

function App() {
  return (
    <AyrProvider>
      <BrowserRouter>
        <FlagContainer />
        <Routes>
          <Route path="/" element={ <Startpage /> } />
          <Route path="/login" element={ <LoginPage /> } />
          <Route path="/register" element={ <RegisterPage /> } />
          <Route path="/home" element={ <Homepage /> } />
          <Route path="/transfer" element={ <TransferPage /> } />\
          <Route path="/history" element={ <HistoryPage /> } />
        </Routes>
      </BrowserRouter>
    </AyrProvider>
  );
}

export default App;
