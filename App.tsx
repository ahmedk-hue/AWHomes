import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HomeRemodeling } from './pages/services/HomeRemodeling';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-800 font-sans">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/remodeling" element={<HomeRemodeling />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;