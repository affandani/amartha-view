import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Fasilitas from './pages/Fasilitas';
import TipeUnit from './pages/TipeUnit';
import Kontak from './pages/Kontak';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-surface text-on-surface">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fasilitas" element={<Fasilitas />} />
            <Route path="/tipe-unit" element={<TipeUnit />} />
            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
