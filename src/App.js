import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Scoreboard } from './components/Scoreboard/Scoreboard';
import { Achievements } from './components/Achievements/Achievements';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Scoreboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
