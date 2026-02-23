import React from 'react';
import { Thermometer, Shield, CheckCircle, Star, Phone, ArrowRight, ThumbsUp, Award, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export const HeatPump: React.FC = () => {
    return (
        <div className="bg-white">

            {/* 1. HERO */}
            <section className="relative min-h-[92vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
                        alt="Heat pump system"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 to-brand-navy/95" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
                    <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4 border border-brand-gold/40 px-4 py-1 rounded-full">Up to $16,000 in Mass Save® Rebates</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Heat Pump Installation<br />
                        <span className="text-brand-gold">Greater Boston, MA</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        One system for heating and cooling. Lower utility bills and up to $16,000 in Mass Save® rebates — installed by A.W. Puma, Massachusetts' certified heat pump experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16176183366">
                            <Button size="lg" variant="primary" className="flex items-center gap-2">
                                <Phone size={18} /> Call (617) 618-3366
                            </Button>
                        </a>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="flex items-center gap-2 border-white text-white hover:bg-white hover:text-brand-navy">
                                Check My Rebate <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Heats & Cools Year-Round</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Mass Save® Certified Partner</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Works in New England Winters</span>
                    </div>
                </div>
            </section>

            {/* 2. EMPATHY LAYER */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Two Systems. Double the Maintenance. Double the Bills.</h2>
                        <p className="text-brand-gray text-lg leading-relaxed mb-6">
                            Most Greater Boston homes have a separate furnace or boiler for heating and a central AC unit for cooling. That means two systems aging at the same time — and massive utility bills from an aging oil or gas setup.
                        </p>
                        <p className="text-brand-gray text-lg leading-relaxed">
                            A modern heat pump replaces both. It heats in winter and cools in summer using electricity — often at 2–3x the efficiency of gas. And Massachusetts will pay you significantly to make the switch.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { icon: AlertTriangle, title: 'Dual-System Maintenance Costs', text: 'Two aging units means double the service calls and replacement risk.' },
                            { icon: AlertTriangle, title: 'High Oil & Gas Heating Costs', text: 'Energy costs keep rising. Old fossil fuel systems get less efficient over time.' },
                            { icon: AlertTriangle, title: 'Skepticism About Cold-Climate Performance', text: 'Older heat pumps couldn\'t handle Massachusetts winters. Modern cold-climate models can.' },
                            { icon: AlertTriangle, title: 'Unclaimed Rebates', text: 'Most homeowners leave thousands in Mass Save® rebates on the table.' },
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">The A.W. Puma Heat Pump Advantage</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">We're one of Massachusetts' top certified Mass Save® heat pump installers. Here's what makes us different.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Award, title: 'Maximum Rebate Strategy', text: 'We design your system to maximize Mass Save® rebates — up to $16,000 for whole-home air source heat pump systems. We handle every piece of paperwork.' },
                            { icon: Thermometer, title: 'Cold-Climate Engineering', text: 'We only install cold-climate rated systems (rated to -13°F or lower) that perform reliably through Massachusetts winters. No "good enough" compromises.' },
                            { icon: ThumbsUp, title: 'Clean Transition Planning', text: 'Whether you\'re replacing oil, gas, or electric, we design a transition plan that keeps you comfortable through the changeover — with no heating gaps.' },
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
                    <h2 className="text-2xl font-bold text-brand-navy text-center mb-12">Homeowners Who Made the Switch</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Michael P.', location: 'Dover, MA', text: 'We replaced our 20-year-old oil boiler with a heat pump system. A.W. Puma got us $12,000 back in Mass Save rebates. Heating costs dropped by 40% in the first winter.' },
                            { name: 'Rachel S.', location: 'Winchester, MA', text: 'I was nervous about whether a heat pump could handle our cold winters. The team explained exactly how cold-climate heat pumps work. We\'ve had zero issues even during the January cold snap.' },
                            { name: 'Tom B.', location: 'Lowell, MA', text: 'The rebate paperwork would have been a nightmare on my own. A.W. Puma handled every form and got our check in 6 weeks. Outstanding service.' },
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
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">Your Heat Pump Journey</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Energy Assessment', text: 'We review your home\'s energy data and size the perfect system.' },
                            { step: '02', title: 'Rebate Qualification', text: 'We confirm your Mass Save® eligibility and incentive amount.' },
                            { step: '03', title: 'Expert Installation', text: 'Permitted, inspected, and done right — in as little as one day.' },
                            { step: '04', title: 'Rebate Filed & Paid', text: 'We submit rebate paperwork and track your payment.' },
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy text-center mb-12">Heat Pump FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'Do heat pumps work in Massachusetts winters?', a: 'Yes. Modern cold-climate air source heat pumps (like Mitsubishi Hyper-Heat, Bosch Compress, and Carrier Infinity) are rated to operate efficiently at -13°F — well below typical Massachusetts winter temperatures.' },
                            { q: 'How much is the Mass Save® heat pump rebate?', a: 'Up to $16,000 for whole-home air source heat pump systems. The exact amount depends on your system type, efficiency rating, and utility provider. We confirm your eligibility before any work begins.' },
                            { q: 'What\'s the typical payback period for a heat pump in Massachusetts?', a: 'With Mass Save® rebates and lower operating costs compared to oil heat, most homeowners see payback in 4–7 years. After that, it\'s pure savings.' },
                            { q: 'Do I need to keep my existing heating system?', a: 'Many homeowners keep a backup oil or gas system for extreme cold. We\'ll help you determine whether a full transition or hybrid approach makes more sense for your situation.' },
                            { q: 'Is a permit required?', a: 'Yes. We pull all required permits and pass city/town inspection as part of every installation.' },
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
                    <h2 className="text-4xl font-serif font-bold mb-4">Find Out How Much You Can Get Back</h2>
                    <p className="text-xl mb-8 opacity-90">Free heat pump consultation — we'll calculate your exact Mass Save® rebate and projected energy savings.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16176183366">
                            <Button size="lg" className="bg-white !text-brand-gold hover:bg-gray-100 font-bold flex items-center gap-2">
                                <Phone size={18} /> (617) 618-3366
                            </Button>
                        </a>
                        <Link to="/contact">
                            <Button size="lg" className="bg-brand-navy text-white hover:bg-opacity-90 flex items-center gap-2">
                                Check My Rebate <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
