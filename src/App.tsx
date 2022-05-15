import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/view/home';
import Quiz from './components/view/quiz';

const App: React.FC = () => (

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:name" element={<Quiz />} />
  </Routes>

);

export default App;
