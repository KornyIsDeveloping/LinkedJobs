import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
      <Navbar /> 
      {/* </Routes> */}
    </div>
  );
}

export default App;
