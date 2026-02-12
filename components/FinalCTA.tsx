import React from 'react';
import { Button } from './ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden flex items-center justify-center bg-brand-navy">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight mb-8">
          Ready to elevate your home?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Stop settling for average contractors. Experience the A.W. PUMA difference today. Schedule your consultation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="w-full sm:w-auto text-lg h-16 shadow-2xl">
            Book Online Now
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-16">
            Call (617) 555-0123
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-gray-400 font-medium">
          No obligation. Free estimates for major projects.
        </p>
      </div>
    </section>
  );
};