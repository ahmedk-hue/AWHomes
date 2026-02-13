import React from 'react';
import { ArrowRight, Star, ShieldCheck, Hammer } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32">

      {/* Background Image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop"
          alt="Modern Home Construction"
          className="w-full h-full object-cover"
        />
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-brand-navy/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center">

        <div className="text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-brand-gold/10 border-l-4 border-brand-gold backdrop-blur-md mb-8">
            <Star size={16} className="text-brand-gold fill-brand-gold" />
            <span className="text-sm font-bold text-white tracking-wide uppercase">Top Rated in Massachusetts</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            Built to Last. <br />
            <span className="text-brand-gold">Designed for Life.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-gray-200 mb-10 max-w-xl leading-relaxed font-light">
            A.W. PUMA brings over 20 years of engineering precision to plumbing, HVAC, electrical, and full-scale home remodeling.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <Button size="lg" icon={<ArrowRight size={18} />}>
              Start Your Project
            </Button>
            <Button variant="outline" size="lg">
              Our Portfolio
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <ShieldCheck className="text-brand-gold" size={24} />
              </div>
              <div className="text-sm">
                <div className="text-white font-bold">Fully Licensed</div>
                <div className="text-gray-400">CSL & HIC</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <Hammer className="text-brand-gold" size={24} />
              </div>
              <div className="text-sm">
                <div className="text-white font-bold">Expert Team</div>
                <div className="text-gray-400">In-House Pros</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <Star className="text-brand-gold" size={24} />
              </div>
              <div className="text-sm">
                <div className="text-white font-bold">5.0 Rating</div>
                <div className="text-gray-400">100+ Reviews</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Card / Form Placeholder - Adds visual weight */}
        <div className="hidden md:block bg-white p-8 rounded-sm shadow-2xl border-t-8 border-brand-gold max-w-md ml-auto">
          <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2">Request Service</h3>
          <p className="text-gray-600 mb-6">Fill out the form below for a free estimate on your next project.</p>

          <div className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none bg-gray-50" />
            <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none bg-gray-50" />
            <select className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none bg-gray-50 text-gray-600">
              <option>Service Required</option>
              <option>Remodeling</option>
              <option>Plumbing/HVAC</option>
              <option>Electrical</option>
            </select>
            <Button className="w-full justify-center">Get Free Quote</Button>
          </div>
        </div>

      </div>
    </section>
  );
};