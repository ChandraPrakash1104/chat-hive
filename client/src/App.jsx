import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import DashBoard from './Dashboard/DashBoard';
import './App.css';
import AlertNotification from './shared/components/AlertNotification';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/' element={<Navigate replace to='/dashboard' />} />
      </Routes>
      <AlertNotification />
    </>
  );
}

export default App;
