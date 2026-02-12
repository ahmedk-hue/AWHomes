import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "Do you service my town in Massachusetts?",
    answer: "We primarily serve the Greater Boston area, including Newton, Brookline, Wellesley, Cambridge, and surrounding suburbs. Contact us to verify coverage for your specific location."
  },
  {
    question: "Are you fully licensed and insured?",
    answer: "Yes, absolutely. We hold all necessary state licenses for Plumbing, Electrical, and General Construction (CSL & HIC). We also carry full liability and workers' compensation insurance for your peace of mind."
  },
  {
    question: "Do you handle the permitting process?",
    answer: "Yes. We handle the entire permitting process from application to final inspection. You do not need to visit town hall; we act as your agent."
  },
  {
    question: "How do you charge for estimates?",
    answer: "We offer free initial consultations for major remodeling projects. For diagnostic service calls (plumbing/HVAC/electrical repair), there is a standard dispatch fee which is waived if you proceed with the work."
  },
  {
    question: "Can I stay in my home during a remodel?",
    answer: "For most projects (kitchens/baths), yes. We set up dust containment barriers and air scrubbers to keep the rest of your home livable. For whole-home renovations, we can discuss the best logistics during planning."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif font-bold text-brand-navy mb-12 text-center">Common Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-sm transition-all duration-200 ${openIndex === index ? 'border-brand-gold bg-brand-light' : 'border-gray-200 bg-white'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-navy' : 'text-brand-gray'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-brand-gold" size={24} />
                ) : (
                  <Plus className="text-gray-400" size={24} />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-brand-gray leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};