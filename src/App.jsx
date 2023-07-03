import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Tasks from './pages/Tasks';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
