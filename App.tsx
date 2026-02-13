import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HomeRemodeling } from './pages/services/HomeRemodeling';
import { HVAC } from './pages/services/HVAC';
import { Plumbing } from './pages/services/Plumbing';
import { Electrical } from './pages/services/Electrical';
import { EnergyAssessment } from './pages/services/EnergyAssessment';
import { Maintenance } from './pages/services/Maintenance';
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
            <Route path="/services/hvac" element={<HVAC />} />
            <Route path="/services/plumbing" element={<Plumbing />} />
            <Route path="/services/electrical" element={<Electrical />} />
            <Route path="/services/energy" element={<EnergyAssessment />} />
            <Route path="/services/maintenance" element={<Maintenance />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;