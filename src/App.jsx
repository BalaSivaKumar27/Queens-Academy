import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Admission from './pages/Admission';
import About from './pages/About';
import Academics from './pages/Academics';
import Research from './pages/Research';
import Placements from './pages/Placement';
import Alumni from './pages/Alumni';
import CareerGuidance from './pages/CareerGuidance';
import Infrastructure from './pages/Infrastructure';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E1B4B] via-[#6B46C1] to-[#D53F8C]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/research" element={<Research />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/careerguidance" element={<CareerGuidance />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;