import React from 'react';
import { MessageSquare, FileText, Hammer, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "1. Discovery & Quote",
    desc: "We listen to your needs and provide a transparent, detailed estimate. No hidden fees."
  },
  {
    icon: FileText,
    title: "2. Planning & Permitting",
    desc: "We handle all town permits, designs, and material sourcing. You approve every detail."
  },
  {
    icon: Hammer,
    title: "3. Execution",
    desc: "Our uniformed, licensed team arrives on time. We protect your home and keep a clean site."
  },
  {
    icon: CheckCircle2,
    title: "4. Final Walkthrough",
    desc: "We don't leave until you're 100% satisfied. Includes warranty documentation."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-2 block">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Complex Projects, Simplified</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Construction creates anxiety. Our process is designed to eliminate it. Here is exactly what happens when you hire A.W. PUMA.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-0.5 bg-brand-gold/30 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-brand-navy border-4 border-brand-gold rounded-full flex items-center justify-center text-white mb-6 shadow-xl relative z-10">
                  <step.icon size={36} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Guarantee Box */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-lg p-8 max-w-4xl mx-auto text-center backdrop-blur-sm">
          <h4 className="text-2xl font-serif font-bold text-white mb-2">The A.W. PUMA Guarantee</h4>
          <p className="text-gray-300">We stand behind our work with a 5-year labor warranty on all remodeling projects.</p>
        </div>
      </div>
    </section>
  );
};