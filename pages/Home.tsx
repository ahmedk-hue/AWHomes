import React from 'react';
import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { ServiceGrid } from '../components/ServiceGrid';
import { Process } from '../components/Process';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="A.W. Puma | Premium Home Services | Boston & Metro West"
        description="Greater Boston's trusted partner for HVAC and custom remodeling. Mass Save® certified heating, cooling, and high-performance renovations."
        keywords="hvac boston, home remodeling massachusetts, furnace repair, ac installation, custom home builder MA"
        canonical="/"
      />
      <Hero />
      <ServiceGrid />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
};
