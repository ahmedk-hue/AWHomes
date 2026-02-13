import React from 'react';
import { Droplets, Zap, Wrench, Home, ThermometerSun, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'remodel',
    title: 'Home Remodeling',
    description: 'Transform your living space with our turnkey design-build process. Kitchens, baths, and additions.',
    icon: Home,
    link: '/services/remodeling',
  },
  {
    id: 'hvac',
    title: 'HVAC Solutions',
    description: 'High-efficiency heating and cooling systems installed by certified technicians.',
    icon: ThermometerSun,
    link: '/services/hvac',
  },
  {
    id: 'plumbing',
    title: 'Precision Plumbing',
    description: 'From leak detection to complete repiping. Reliable solutions for your water systems.',
    icon: Droplets,
    link: '/services/plumbing',
  },
  {
    id: 'electrical',
    title: 'Electrical & Smart Home',
    description: 'Panel upgrades, lighting design, and modern smart home integration.',
    icon: Zap,
    link: '/services/electrical',
  },
  {
    id: 'energy',
    title: 'Energy Assessment',
    description: 'Mass Save® certified assessments to reduce your carbon footprint and bills.',
    icon: Wrench,
    link: '/services/energy',
  },
  {
    id: 'maintenance',
    title: 'Property Maintenance',
    description: 'Scheduled upkeep to ensure your home systems run smoothly year-round.',
    icon: Wrench, // Reusing wrench for now
    link: '/services/maintenance',
  },
];

export const ServiceGrid: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-light relative">
      <div className="absolute inset-0 bg-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">Mastery Across Every Trade</h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg">
            Don't juggle multiple contractors. A.W. PUMA delivers a unified, expert team for every aspect of your home improvement needs.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-sm shadow-card hover:shadow-card-hover transition-all duration-300 border border-gray-100 group flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-full bg-brand-navy/5 flex items-center justify-center mb-6 text-brand-navy group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                <service.icon size={32} />
              </div>

              <h3 className="text-2xl font-serif font-bold text-brand-navy mb-3 group-hover:text-brand-gold transition-colors">{service.title}</h3>
              <p className="text-brand-gray mb-6 leading-relaxed flex-grow">{service.description}</p>

              <a href={service.link} className="inline-flex items-center text-brand-navy font-bold text-sm uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};