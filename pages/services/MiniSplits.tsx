import React from 'react';
import { Wind, Shield, CheckCircle, Star, Phone, ArrowRight, ThumbsUp, Award, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

export const MiniSplits: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Ductless Mini Split Installation | Massachusetts | A.W. Puma"
                description="Energy-efficient ductless mini split systems. Up to $10,000 in Mass Save® rebates. Expert installation in Greater Boston."
                keywords="ductless mini splits boston, mini split installation MA, heat pump rebates, ductless ac massachusetts"
                canonical="/services/mini-splits"
            />

            {/* 1. HERO */}
            <section className="relative min-h-[92vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2073&auto=format&fit=crop"
                        alt="Mini split installation"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 to-brand-navy/95" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
                    <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4 border border-brand-gold/40 px-4 py-1 rounded-full">Mass Save® Rebates Available</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Ductless Mini Split<br />
                        <span className="text-brand-gold">Systems in Boston, MA</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Heat and cool any room without ductwork. Qualify for up to $10,000 in Mass Save® rebates with a high-efficiency mini split from A.W. Puma.
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
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Year-Round Comfort</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Up to $10,000 Mass Save® Rebate</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> No Ductwork Required</span>
                    </div>
                </div>
            </section>

            {/* 2. EMPATHY LAYER */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">One Hot Room Is All It Takes to Ruin Summer</h2>
                        <p className="text-brand-gray text-lg leading-relaxed mb-6">
                            Room additions, converted attics, historic homes without ductwork — these spaces become uninhabitable in summer or winter. Window units are loud, inefficient, and an eyesore. Extending ductwork costs thousands and disturbs walls and ceilings.
                        </p>
                        <p className="text-brand-gray text-lg leading-relaxed">
                            Meanwhile, oil and gas heating costs continue to rise. There's a smarter solution — and Massachusetts will pay you to install it.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { icon: AlertTriangle, title: 'Stuffy, Unusable Rooms', text: 'Rooms above garages or converted spaces become unusable half the year.' },
                            { icon: AlertTriangle, title: 'Window Unit Noise & Inefficiency', text: 'Window ACs cool one room while your electric bill climbs.' },
                            { icon: AlertTriangle, title: 'Rising Oil & Gas Costs', text: 'Heating a New England home on oil keeps getting more expensive.' },
                            { icon: AlertTriangle, title: 'Missed Rebates', text: 'Most homeowners don\'t know Mass Save® pays up to $10,000 for cold-climate heat pumps.' },
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Why Choose A.W. Puma for Mini Splits</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">We're not just installers — we're your rebate guides, system designers, and long-term HVAC partners.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Award, title: 'Mass Save® Rebate Experts', text: 'We\'re a certified Mass Save contractor. We identify the right equipment for maximum rebates — up to $10,000 for cold-climate ducted mini splits — and handle all the paperwork.' },
                            { icon: Shield, title: 'Proper Sizing & Design', text: 'We calculate the exact BTU capacity for each zone. An oversized mini split short-cycles and fails prematurely. Correct sizing means comfort, efficiency, and longevity.' },
                            { icon: ThumbsUp, title: 'Clean, Non-Invasive Install', text: 'Mini split installation requires only a small hole through the wall. No ductwork. No major renovation. Most jobs are completed in a single day with minimal disruption.' },
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
                    <h2 className="text-2xl font-bold text-brand-navy text-center mb-12">Results From Real Customers</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Karen T.', location: 'Needham, MA', text: 'The bonus room over our garage was unusable for years. A.W. Puma installed a Mitsubishi mini split in one day — the room is now my favorite in the house. And the Mass Save rebate made it incredibly affordable.' },
                            { name: 'James W.', location: 'Cambridge, MA', text: 'Our Victorian home has no ductwork and we didn\'t want to tear up plaster walls. The mini split solution was perfect. A.W. Puma designed a multi-zone setup that covers the whole house. Professional from start to finish.' },
                            { name: 'Susan L.', location: 'Boston, MA', text: 'The team explained every step, helped with the Mass Save rebate application, and the installation was spotless. Best home improvement investment we\'ve made.' },
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
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">From Quote to Comfort in 4 Steps</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Free Consultation', text: 'We assess your space and energy goals to design the ideal solution.' },
                            { step: '02', title: 'Rebate Check', text: 'We confirm your Mass Save® eligibility and maximum incentive amount.' },
                            { step: '03', title: 'Clean Installation', text: 'Certified technicians install your system in a single day, usually.' },
                            { step: '04', title: 'Rebate Filed', text: 'We submit your Mass Save paperwork so you get the money back fast.' },
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy text-center mb-12">Mini Split FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'How much is the Mass Save® rebate for mini splits in Massachusetts?', a: 'Mass Save® offers rebates of up to $10,000 for cold-climate ductless heat pumps and up to $16,000 for whole-home heat pump systems in Massachusetts. The exact amount depends on the system type, SEER2 rating, and your utility provider.' },
                            { q: 'Can a mini split heat my home in winter?', a: 'Yes — modern cold-climate mini splits (like Mitsubishi\'s Hyper-Heat) operate efficiently down to -13°F. They are an excellent heating source for Massachusetts winters.' },
                            { q: 'How long does mini split installation take?', a: 'A single-zone installation typically takes 4–6 hours. Multi-zone systems with 3–5 heads may take a full day or two.' },
                            { q: 'Do you need a permit for mini split installation in Massachusetts?', a: 'Yes. A permit is required for refrigerant line installation. We pull all permits and pass inspection as part of our standard process.' },
                            { q: 'What brands do you install?', a: 'We install Mitsubishi, Daikin, LG, Bosch, and other leading brands. We\'ll recommend the best option for your home\'s needs and rebate eligibility.' },
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
                    <h2 className="text-4xl font-serif font-bold mb-4">Get Comfortable. Get Paid to Do It.</h2>
                    <p className="text-xl mb-8 opacity-90">Claim your free mini split consultation and we'll show you exactly how much the Mass Save® program will cover.</p>
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
