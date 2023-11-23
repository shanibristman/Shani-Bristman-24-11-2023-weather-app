import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  )
}

export default App;
