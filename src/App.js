import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

import './styles.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <div className="global-container">
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
