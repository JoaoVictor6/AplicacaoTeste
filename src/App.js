import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './Components/Header';
import Footer from './Components/Footer';

import Login from './page/Login';

import Routes from './routes';

import './App.css';

function App() {

  const [user, setUser] = useState({
    id:1,
    name:'Jose',
    avatar: ''
  });

  if(user === null) {
    return (
      <Login />
    );
  
  }

  return (
    <BrowserRouter>
         <Header />

         <Routes />

    </BrowserRouter>
  );

}

export default App;