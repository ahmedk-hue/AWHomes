import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Locations } from './pages/Locations';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { ScrollToTop } from './components/ScrollToTop';

// HVAC Service Pages
import { Furnace } from './pages/services/Furnace';
import { MiniSplits } from './pages/services/MiniSplits';
import { HeatPump } from './pages/services/HeatPump';
import { AirConditioner } from './pages/services/AirConditioner';
import { Boiler } from './pages/services/Boiler';
import { WaterHeater } from './pages/services/WaterHeater';
import { EnergyAssessment } from './pages/services/EnergyAssessment';

// Location Pages - Counties
import {
  MiddlesexCounty,
  NorfolkCounty,
  SuffolkCounty,
  EssexCounty,
  PlymouthCounty,
  WorcesterCounty,
  BristolCounty,
} from './pages/locations/CountyLocations';

// Legacy location
import { NewtonLocation } from './pages/locations/Newton';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-800 font-sans">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />

            {/* HVAC Service Pages */}
            <Route path="/services/furnace" element={<Furnace />} />
            <Route path="/services/mini-splits" element={<MiniSplits />} />
            <Route path="/services/heat-pump" element={<HeatPump />} />
            <Route path="/services/air-conditioner" element={<AirConditioner />} />
            <Route path="/services/boiler" element={<Boiler />} />
            <Route path="/services/water-heater" element={<WaterHeater />} />
            <Route path="/services/energy-assessment" element={<EnergyAssessment />} />

            {/* County Location Pages */}
            <Route path="/locations/middlesex-county" element={<MiddlesexCounty />} />
            <Route path="/locations/norfolk-county" element={<NorfolkCounty />} />
            <Route path="/locations/suffolk-county" element={<SuffolkCounty />} />
            <Route path="/locations/essex-county" element={<EssexCounty />} />
            <Route path="/locations/plymouth-county" element={<PlymouthCounty />} />
            <Route path="/locations/worcester-county" element={<WorcesterCounty />} />
            <Route path="/locations/bristol-county" element={<BristolCounty />} />

            {/* Legacy Location */}
            <Route path="/locations/newton" element={<NewtonLocation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;