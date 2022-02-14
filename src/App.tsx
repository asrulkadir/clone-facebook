import React from 'react';
import { Routes } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Private from './components/Private';
import Home from './pages/home';
import LoginPage from './pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Private />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
