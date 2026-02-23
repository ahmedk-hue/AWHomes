import React from 'react';
import { Zap, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-navy pt-20 pb-10 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center">
                <Zap size={18} className="text-white" fill="currentColor" />
              </div>
              <span className="text-2xl font-serif font-bold text-white">A.W. PUMA</span>
            </div>
            <p className="mb-2 leading-relaxed font-semibold text-brand-gold italic">Always There. Always Fair.</p>
            <p className="mb-6 leading-relaxed">
              HVAC, heating, and cooling services for homeowners across Greater Boston and Massachusetts. Trusted, licensed, and always on time.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/awpumahomeservices" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2 rounded-full hover:bg-brand-gold hover:text-white transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              <li><a href="/services/furnace" className="hover:text-brand-gold transition-colors">Furnace</a></li>
              <li><a href="/services/mini-splits" className="hover:text-brand-gold transition-colors">Mini Splits</a></li>
              <li><a href="/services/heat-pump" className="hover:text-brand-gold transition-colors">Heat Pump</a></li>
              <li><a href="/services/ac" className="hover:text-brand-gold transition-colors">Air Conditioner</a></li>
              <li><a href="/services/boiler" className="hover:text-brand-gold transition-colors">Boiler</a></li>
              <li><a href="/services/water-heater" className="hover:text-brand-gold transition-colors">Water Heater</a></li>
              <li><a href="/services/energy" className="hover:text-brand-gold transition-colors">Mass Save® Energy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="font-bold text-gray-300">Office</span>
                <span>202 Washington St</span>
                <span>Brookline, MA 02445</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-300">Email Us</span>
                <a href="mailto:info@awpumahome.com" className="text-brand-gold hover:underline">info@awpumahome.com</a>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-300">Call Us</span>
                <a href="tel:+16176183366" className="hover:text-brand-gold transition-colors">(617) 618-3366</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} A.W. PUMA. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6 text-xs uppercase tracking-wide">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};