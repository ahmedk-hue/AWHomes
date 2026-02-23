import React from 'react';
import { Flame, Wind, Thermometer, AirVent, Droplets, Zap, ArrowRight, Leaf, Home } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'furnace',
    title: 'Furnace',
    description: 'Expert furnace installation, repair, and replacement across Greater Boston. Mass Save® certified.',
    icon: Flame,
    link: '/services/furnace',
  },
  {
    id: 'mini-splits',
    title: 'Mini Splits',
    description: 'Ductless mini split systems with up to $10,000 in Mass Save® rebates. Heating and cooling in one.',
    icon: AirVent,
    link: '/services/mini-splits',
  },
  {
    id: 'heat-pump',
    title: 'Heat Pump',
    description: 'Cold-climate heat pumps for New England winters. Up to $16,000 in Mass Save® rebates.',
    icon: Thermometer,
    link: '/services/heat-pump',
  },
  {
    id: 'air-conditioner',
    title: 'Air Conditioner',
    description: 'Central and ductless AC installation and repair. Same-day service available. Manual J sizing.',
    icon: Wind,
    link: '/services/air-conditioner',
  },
  {
    id: 'boiler',
    title: 'Boiler',
    description: 'Gas, oil, and electric boiler installation and replacement. Fully permitted and inspected.',
    icon: Zap,
    link: '/services/boiler',
  },
  {
    id: 'water-heater',
    title: 'Water Heater',
    description: 'Tank and tankless water heater replacement. Same-day emergency service available.',
    icon: Droplets,
    link: '/services/water-heater',
  },
  {
    id: 'energy-assessment',
    title: 'Mass Save® Energy',
    description: 'Free home energy assessments and rebate coordination. Up to $16,000 in available incentives.',
    icon: Leaf,
    link: '/services/energy-assessment',
  },
  {
    id: 'custom-remodeling',
    title: 'Custom Remodeling',
    description: 'Expert home renovations, custom carpentry, and full-scale remodeling. High-performance craftsmanship.',
    icon: Home,
    link: '/services/custom-remodeling',
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