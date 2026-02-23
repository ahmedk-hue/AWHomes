import React from 'react';
import { Wind, Shield, CheckCircle, Star, Phone, ArrowRight, ThumbsUp, Award, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

export const AirConditioner: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Central AC Installation & Repair | Boston MA | A.W. Puma"
                description="Professional air conditioning services in Greater Boston. Manual J sizing, expert installation, and reliable repairs."
                keywords="ac repair boston, central air installation MA, hvac contractor, air conditioning maintenance"
                canonical="/services/air-conditioner"
            />

            {/* 1. HERO */}
            <section className="relative min-h-[92vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1631545806610-8a8e7a0bef9c?q=80&w=2070&auto=format&fit=crop"
                        alt="Air conditioning installation"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 to-brand-navy/95" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
                    <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4 border border-brand-gold/40 px-4 py-1 rounded-full">Licensed & Insured · Massachusetts</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Air Conditioner Installation<br />
                        <span className="text-brand-gold">& Repair, Boston MA</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Beat the New England humidity. A.W. Puma installs and services central AC, ductless systems, and high-efficiency units — with same-day service available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16176183366">
                            <Button size="lg" variant="primary" className="flex items-center gap-2">
                                <Phone size={18} /> Call (617) 618-3366
                            </Button>
                        </a>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="flex items-center gap-2 border-white text-white hover:bg-white hover:text-brand-navy">
                                Get Free Quote <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Same-Day Service Available</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Central & Ductless AC</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> 10-Year Equipment Warranty</span>
                    </div>
                </div>
            </section>

            {/* 2. EMPATHY LAYER */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">A Sweltering Boston Summer Shouldn't Happen Inside Your Home</h2>
                        <p className="text-brand-gray text-lg leading-relaxed mb-6">
                            Massachusetts summers are short — but they're humid. When your AC breaks down in July, or your home never had central cooling, every day is a battle against the heat. Yet many homeowners either overpay for rushed installs or end up with an undersized unit that runs constantly.
                        </p>
                        <p className="text-brand-gray text-lg leading-relaxed">
                            A properly sized, correctly installed air conditioning system should keep your home consistently comfortable — quietly, efficiently, and without the monthly shock of an elevated electric bill.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { icon: AlertTriangle, title: 'Wrong System Sizing', text: 'An oversized AC short-cycles, leaving your home humid and inefficient.' },
                            { icon: AlertTriangle, title: 'Refrigerant Leaks Going Undetected', text: 'A system blowing warm air may have a refrigerant leak — not just a thermostat issue.' },
                            { icon: AlertTriangle, title: 'Rushed Emergency Installs', text: 'Peak summer demand means corners get cut. You deserve a proper installation regardless of the season.' },
                            { icon: AlertTriangle, title: 'Skipped Permits & Inspections', text: 'Unpermitted AC work can void warranties and create insurance problems.' },
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">The A.W. Puma AC Standard</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">We install air conditioning systems that last, perform, and pass inspection — every time.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: 'Manual J Sizing Every Time', text: 'We never guess at system size. Our load calculations ensure your AC is perfectly matched to your home — eliminating short-cycling, humidity problems, and wasted energy.' },
                            { icon: Award, title: 'Central & Ductless Options', text: 'Whether you need a central split system, a ductless multi-zone setup, or a hybrid solution, we design the right cooling configuration for your specific home.' },
                            { icon: ThumbsUp, title: 'Permitted & Inspected', text: 'Every installation includes permits and a city inspection sign-off. We do the paperwork, you get the peace of mind. No shortcuts — ever.' },
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
                    <h2 className="text-2xl font-bold text-brand-navy text-center mb-12">What Our Customers Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Robert F.', location: 'Wellesley, MA', text: 'Our central AC died on the hottest week of the year. A.W. Puma had a technician out the same afternoon and a replacement unit installed by end of week. Couldn\'t be happier.' },
                            { name: 'Angela C.', location: 'Boston, MA', text: 'Three quotes, and A.W. Puma was the only contractor who did an actual load calculation. The system they installed is quieter and more efficient than anything I\'ve had before.' },
                            { name: 'Mark H.', location: 'Newton, MA', text: 'The ductless system they installed cools our addition perfectly. Professional team, clean work area, and they pulled the permit without me asking. Will use again.' },
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
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">How We Install Your AC</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Free In-Home Quote', text: 'We assess your home\'s layout, insulation, and cooling needs.' },
                            { step: '02', title: 'System Selection', text: 'We recommend the right brand, size, and configuration for your budget.' },
                            { step: '03', title: 'Permitted Installation', text: 'Clean, professional install with all permits and city inspection.' },
                            { step: '04', title: 'System Test & Walkthrough', text: 'We verify performance and walk you through your new system.' },
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy text-center mb-12">AC Installation FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'How much does central AC installation cost in Massachusetts?', a: 'Central AC installation in Greater Boston typically ranges from $4,000–$9,000 depending on system size, brand, and any ductwork modifications required. We provide flat-rate quotes with no hidden fees.' },
                            { q: 'How do I know if my AC needs repair or replacement?', a: 'If your system is over 12 years old, requires frequent repairs, or your energy bills have increased significantly, replacement is usually more cost-effective. We\'ll give you an honest assessment.' },
                            { q: 'Do you offer AC maintenance plans?', a: 'Yes. We offer annual tune-up plans that include coil cleaning, refrigerant check, filter replacement, and a full system inspection — extending your equipment\'s life significantly.' },
                            { q: 'What AC brands do you install?', a: 'We install Carrier, Bryant, Trane, Lennox, Mitsubishi, and other leading brands. We\'ll recommend the best option for your home and budget.' },
                            { q: 'Is a permit required for AC installation in Massachusetts?', a: 'Yes. Massachusetts requires permits for new central AC installations and major replacements. We handle all permits and inspections as standard practice.' },
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
                    <h2 className="text-4xl font-serif font-bold mb-4">Don't Wait Until the Heat Wave Hits</h2>
                    <p className="text-xl mb-8 opacity-90">Get a free AC estimate now. We serve 7 counties across Greater Boston and Massachusetts.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16176183366">
                            <Button size="lg" className="bg-white !text-brand-gold hover:bg-gray-100 font-bold flex items-center gap-2">
                                <Phone size={18} /> (617) 618-3366
                            </Button>
                        </a>
                        <Link to="/contact">
                            <Button size="lg" className="bg-brand-navy text-white hover:bg-opacity-90 flex items-center gap-2">
                                Get Free Quote <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
