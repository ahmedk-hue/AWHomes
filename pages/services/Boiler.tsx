import React from 'react';
import { Flame, Shield, CheckCircle, Star, Phone, ArrowRight, ThumbsUp, Award, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export const Boiler: React.FC = () => {
    return (
        <div className="bg-white">

            {/* 1. HERO */}
            <section className="relative min-h-[92vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
                        alt="Boiler installation"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 to-brand-navy/95" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
                    <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4 border border-brand-gold/40 px-4 py-1 rounded-full">Licensed & Insured · Massachusetts</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Boiler Installation<br />
                        <span className="text-brand-gold">& Repair, Boston MA</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Expert boiler service for Greater Boston homeowners. Installation, repair, and replacement of gas, oil, and electric boilers — done right and fully permitted.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16176183366">
                            <Button size="lg" variant="primary" className="flex items-center gap-2">
                                <Phone size={18} /> Call (617) 618-3366
                            </Button>
                        </a>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="flex items-center gap-2 border-white text-white hover:bg-white hover:text-brand-navy">
                                Get Free Estimate <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Emergency Service Available</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Gas, Oil & Electric Boilers</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Fully Permitted & Inspected</span>
                    </div>
                </div>
            </section>

            {/* 2. EMPATHY LAYER */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">A Failing Boiler Is a Whole-Home Emergency</h2>
                        <p className="text-brand-gray text-lg leading-relaxed mb-6">
                            In Massachusetts, your boiler doesn't just heat air — it heats radiators, baseboards, or in-floor systems throughout your entire home. When it fails mid-winter, there's no partial fix. You need the right contractor fast.
                        </p>
                        <p className="text-brand-gray text-lg leading-relaxed">
                            Many Greater Boston homes have aging oil or gas boilers that are 20+ years old. These systems run less efficiently every year — and when they fail, they often fail at the worst possible moment.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { icon: AlertTriangle, title: 'Banging, Kettling, or Leaking', text: 'Unusual boiler sounds are warnings. Ignoring them leads to complete failure.' },
                            { icon: AlertTriangle, title: 'Uneven Heat Across Radiators', text: 'Some rooms freezing while others are fine points to a circulation or pressure issue.' },
                            { icon: AlertTriangle, title: 'Skyrocketing Heating Bills', text: 'An aging, inefficient boiler can cost 40–60% more to run than a modern high-efficiency unit.' },
                            { icon: AlertTriangle, title: 'Unlicensed Boiler Work Risk', text: 'Boiler work without permits is illegal in Massachusetts and voids insurance coverage.' },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4 p-5 rounded-sm border border-red-100 bg-red-50">
                                <item.icon className="text-red-500 shrink-0 mt-1" size={20} />
                                <div>
                                    <div className="font-bold text-brand-navy mb-1">{item.title}</div>
                                    <div className="text-brand-gray text-sm">{item.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. COMPETENCE LAYER */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">The A.W. Puma Boiler Standard</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">Three things that set our boiler work apart from every other contractor in Massachusetts.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: 'System Diagnosis First', text: 'We never recommend replacement before exhausting repair options. A full diagnostic tells us exactly what\'s wrong — so you only pay for what you need.' },
                            { icon: Award, title: 'Efficiency Upgrades Included', text: 'Modern condensing boilers run at 95%+ efficiency vs. 70–75% for older models. We help you compare the math — and access any available Mass Save® rebates.' },
                            { icon: ThumbsUp, title: 'Permitted & Pressure-Tested', text: 'Every boiler installation includes a pressure test, combustion analysis, and city permit inspection. Safety is not optional on this job.' },
                        ].map((pillar) => (
                            <div key={pillar.title} className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-gold">
                                <pillar.icon className="w-12 h-12 text-brand-navy mb-6" />
                                <h3 className="text-xl font-bold text-brand-navy mb-3">{pillar.title}</h3>
                                <p className="text-brand-gray">{pillar.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. SOCIAL PROOF */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-brand-navy text-center mb-12">Greater Boston Homeowners Trust A.W. Puma</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Helen G.', location: 'Brookline, MA', text: 'Our 25-year-old oil boiler died in February. A.W. Puma installed a new high-efficiency gas boiler within 48 hours. The heat is more consistent than it\'s ever been and the gas bills are dramatically lower.' },
                            { name: 'Stephen M.', location: 'Newton, MA', text: 'A.W. Puma diagnosed a circulation pump issue that two other companies had told us required a full boiler replacement. Saved us thousands. That\'s integrity.' },
                            { name: 'Carol P.', location: 'Wellesley, MA', text: 'Professional, respectful, and thorough. They pulled the permits, passed inspection the first time, and explained every step of the process. Highly recommend.' },
                        ].map((review) => (
                            <div key={review.name} className="bg-brand-light p-8 rounded-sm">
                                <div className="flex text-brand-gold mb-4">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}</div>
                                <p className="text-brand-gray italic mb-6">"{review.text}"</p>
                                <div className="font-bold text-brand-navy">{review.name}</div>
                                <div className="text-sm text-brand-gray">{review.location}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PROCESS */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">Our Boiler Service Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Diagnose', text: 'We assess your boiler and identify the root cause — not just the symptom.' },
                            { step: '02', title: 'Honest Quote', text: 'Repair vs. replace analysis with flat-rate pricing. No pressure either way.' },
                            { step: '03', title: 'Permitted Work', text: 'Installation with all permits and a pressure/combustion test.' },
                            { step: '04', title: 'City Inspection', text: 'We coordinate and pass the mandatory inspection before calling the job done.' },
                        ].map((s) => (
                            <div key={s.step} className="text-center">
                                <div className="text-5xl font-bold text-brand-gold opacity-60 mb-2">{s.step}</div>
                                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                                <p className="text-gray-300 text-sm">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy text-center mb-12">Boiler FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'How much does boiler replacement cost in Massachusetts?', a: 'A new boiler installation in Greater Boston typically ranges from $4,500–$9,000 for gas, and $6,000–$12,000 for oil-to-gas conversions. High-efficiency condensing boilers may qualify for Mass Save® rebates.' },
                            { q: 'How long do boilers last?', a: 'Well-maintained gas boilers last 15–25 years. Oil boilers typically last 15–20 years. Annual maintenance significantly extends lifespan.' },
                            { q: 'Should I repair or replace my boiler?', a: 'If your boiler is over 15 years old, requires repeated repairs, or is running significantly less efficiently, replacement is usually more cost-effective. We provide an honest comparison before recommending anything.' },
                            { q: 'Do you need a permit to replace a boiler in Massachusetts?', a: 'Yes. Massachusetts requires permits for boiler replacement. We pull all permits, conduct pressure and combustion testing, and pass the city inspection as standard practice.' },
                            { q: 'Is there a Mass Save rebate for boilers?', a: 'Certain high-efficiency gas condensing boilers (≥90% AFUE) may qualify for Mass Save® rebates. We\'ll check your eligibility during the consultation.' },
                        ].map((faq) => (
                            <div key={faq.q} className="border-b border-gray-200 pb-6">
                                <h3 className="font-bold text-brand-navy mb-2">{faq.q}</h3>
                                <p className="text-brand-gray">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FINAL CTA */}
            <section className="py-24 bg-brand-gold text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-4">Boiler Problems? We're Ready.</h2>
                    <p className="text-xl mb-8 opacity-90">Same-day emergency service available. Get a free estimate from a licensed Massachusetts boiler contractor.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16176183366">
                            <Button size="lg" className="bg-white text-brand-gold hover:bg-gray-100 font-bold flex items-center gap-2">
                                <Phone size={18} /> (617) 618-3366
                            </Button>
                        </a>
                        <Link to="/contact">
                            <Button size="lg" className="bg-brand-navy text-white hover:bg-opacity-90 flex items-center gap-2">
                                Get Free Estimate <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
