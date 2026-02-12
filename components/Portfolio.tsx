import React from 'react';
import { Button } from './ui/Button';

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-gray-200 pb-8">
          <div>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Our Portfolio</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">Recent Transformations</h2>
            <p className="text-brand-gray max-w-xl text-lg">
              A curated selection of our recent work across Massachusetts. We prioritize timeless design and durable materials.
            </p>
          </div>
          <Button variant="navy">View Full Portfolio</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="group rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2670&auto=format&fit=crop" 
                alt="Kitchen Remodel" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-300"></div>
            </div>
            <div className="p-6 bg-white border border-t-0 border-gray-100">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block">Newton, MA</span>
              <h3 className="text-xl font-serif font-bold text-brand-navy mb-2">Modern Kitchen Expansion</h3>
              <p className="text-gray-500 text-sm">Full gut renovation including plumbing relocation and custom cabinetry.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1620626012053-1c16e71e9215?q=80&w=2670&auto=format&fit=crop" 
                alt="Luxury Bathroom" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-300"></div>
            </div>
            <div className="p-6 bg-white border border-t-0 border-gray-100">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block">Brookline, MA</span>
              <h3 className="text-xl font-serif font-bold text-brand-navy mb-2">Master Bath Spa</h3>
              <p className="text-gray-500 text-sm">Steam shower installation, radiant floor heating, and custom vanity.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2670&auto=format&fit=crop" 
                alt="HVAC Installation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
               <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/20 transition-colors duration-300"></div>
            </div>
            <div className="p-6 bg-white border border-t-0 border-gray-100">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block">Wellesley, MA</span>
              <h3 className="text-xl font-serif font-bold text-brand-navy mb-2">High-Efficiency HVAC</h3>
              <p className="text-gray-500 text-sm">Ducted heat pump system installation for a 4,000 sq ft historic home.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};