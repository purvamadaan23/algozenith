// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Upskill from './components/Upskill';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <Upskill />
      </div>
    </div>
  );
}

export default App;

