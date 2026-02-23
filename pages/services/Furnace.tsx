import React from 'react';
import { Flame, Shield, Clock, CheckCircle, Star, Phone, ArrowRight, ThumbsUp, Award, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

export const Furnace: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Furnace Installation & Repair | Boston & Metro West | A.W. Puma"
                description="Professional furnace installation and repair in Greater Boston. Mass Save® certified experts. Same-day emergency service."
                keywords="furnace repair boston, furnace installation MA, heating contractor, mass save furnace rebates"
                canonical="/services/furnace"
            />

            {/* 1. HERO */}
            <section className="relative min-h-[92vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                        alt="Furnace installation"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 to-brand-navy/95" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
                    <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4 border border-brand-gold/40 px-4 py-1 rounded-full">Licensed & Insured · Massachusetts</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Furnace Installation<br />
                        <span className="text-brand-gold">& Repair, Boston MA</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Fast, expert furnace service from a Mass Save® certified team. We keep Greater Boston homes warm — on time and on budget.
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
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Same-Day Emergency Available</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Mass Save® Certified</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> 10-Year Labor Warranty</span>
                    </div>
                </div>
            </section>

            {/* 2. EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">A Broken Furnace Is More Than an Inconvenience</h2>
                        <p className="text-brand-gray text-lg leading-relaxed mb-6">
                            When your furnace fails on a cold January night in Massachusetts, every hour matters. Yet many homeowners get stuck with contractors who don't show up, overcharge for parts, or install the wrong system for their home's load requirements.
                        </p>
                        <p className="text-brand-gray text-lg leading-relaxed">
                            The result? Skyrocketing energy bills, inconsistent heat, and a furnace that fails again next season — or worse, a carbon monoxide risk you can't see.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { icon: AlertTriangle, title: 'No-shows & Broken Commitments', text: 'You took a day off work. Nobody came.' },
                            { icon: AlertTriangle, title: 'Overpriced "Diagnostic Fees"', text: 'Charged $200 just to tell you what you already knew.' },
                            { icon: AlertTriangle, title: 'Wrong System Sizing', text: 'A furnace too large or small wastes fuel and wears out fast.' },
                            { icon: AlertTriangle, title: 'Carbon Monoxide Risk', text: 'A cracked heat exchanger is invisible — and deadly.' },
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

            {/* 3. COMPETENCE LAYER (3 Pillars) */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">The A.W. Puma Furnace Standard</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">Three things we do differently — and why they matter to your family's comfort and safety.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: 'Load Calculation First',
                                text: 'We run a Manual J load calculation on every job. No guessing. The right BTU for your home\'s square footage, insulation, and window count means maximum efficiency and no short-cycling.'
                            },
                            {
                                icon: Award,
                                title: 'Mass Save® Rebate Access',
                                text: 'As a certified Mass Save partner, we help you access up to $2,500 in rebates on qualifying high-efficiency furnaces. We handle the paperwork so you don\'t have to.'
                            },
                            {
                                icon: ThumbsUp,
                                title: 'Safety-First Installation',
                                text: 'Every furnace installation includes a CO test, flue inspection, and pressure test. We pull permits and get the city inspection — because cutting corners on safety is not an option.'
                            },
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
                    <h2 className="text-2xl font-bold text-brand-navy text-center mb-12">What Greater Boston Homeowners Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Patricia M.', location: 'Wellesley, MA', text: 'Our 20-year-old furnace died on a Friday night. A.W. Puma had a new Carrier system in by Saturday afternoon. The Mass Save rebate saved us $1,800. Incredible team.' },
                            { name: 'David R.', location: 'Newton, MA', text: 'First time a HVAC company ran actual load calcs before recommending a size. They were right — our old unit was oversized and that\'s why the bills were so high. Night and day difference.' },
                            { name: 'Linda K.', location: 'Brookline, MA', text: 'Professional, punctual, and honest. They found a cracked heat exchanger I didn\'t know about and replaced it safely. I trust A.W. Puma completely.' },
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
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">How It Works</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Book Your Call', text: 'Call or submit online. We confirm a same-day or next-day visit.' },
                            { step: '02', title: 'Diagnosis & Quote', text: 'We assess your system and give you a flat-rate quote — no surprises.' },
                            { step: '03', title: 'Permitted Install', text: 'We pull permits, install correctly, and schedule the city inspection.' },
                            { step: '04', title: 'Rebate Paperwork', text: 'We file the Mass Save® rebate forms on your behalf.' },
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'How much does furnace installation cost in Massachusetts?', a: 'A new gas furnace installation in Greater Boston typically ranges from $3,500–$7,500 depending on efficiency rating, brand, and home size. Mass Save® rebates can offset $500–$2,500 for qualifying high-efficiency units (95%+ AFUE).' },
                            { q: 'What brands do you install?', a: 'We install Carrier, Bryant, Trane, Lennox, and other leading manufacturers. We\'ll recommend the right brand and model for your home\'s specific needs and budget.' },
                            { q: 'Do you offer emergency furnace repair?', a: 'Yes. We offer same-day emergency service for heating failures. Call us at (617) 618-3366 and we\'ll get someone to you fast.' },
                            { q: 'Is a permit required for furnace replacement in MA?', a: 'Yes. Massachusetts state code requires permits for furnace replacements. We pull all required permits and coordinate the city inspection as part of every installation.' },
                            { q: 'How long does furnace installation take?', a: 'Most straight furnace replacements take 4–6 hours. More complex work involving ductwork modifications may take 1–2 days.' },
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
                    <h2 className="text-4xl font-serif font-bold mb-4">Ready to Stay Warm This Winter?</h2>
                    <p className="text-xl mb-8 opacity-90">Get a free estimate from a Mass Save® certified furnace expert. We serve 7 counties across Massachusetts.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16176183366">
                            <Button size="lg" className="bg-white !text-brand-gold hover:bg-gray-100 font-bold flex items-center gap-2">
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
