import React from 'react';
import { Zap, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';

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
            <p className="mb-6 leading-relaxed">
              Premium home services and remodeling for discerning homeowners in Massachusetts. Quality you can trust, built to last.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-gold hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-gold hover:text-white transition-all"><Facebook size={18} /></a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-gold hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-brand-gold hover:text-white transition-all"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-white mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Full Home Remodeling</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Precision Plumbing</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">HVAC Solutions</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Electrical Works</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Energy Assessment</a></li>
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
                <span className="font-bold text-gray-300">Headquarters</span>
                <span>123 Construction Way</span>
                <span>Waltham, MA 02453</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-300">Email Us</span>
                <span className="text-brand-gold">hello@awpuma.com</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-gray-300">Call Us</span>
                <span>(617) 555-0123</span>
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