import React from 'react';
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
