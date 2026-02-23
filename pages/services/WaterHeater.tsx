import React from 'react';
import { Droplets, Shield, CheckCircle, Star, Phone, ArrowRight, ThumbsUp, Award, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export const WaterHeater: React.FC = () => {
    return (
        <div className="bg-white">

            {/* 1. HERO */}
            <section className="relative min-h-[92vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2073&auto=format&fit=crop"
                        alt="Water heater installation"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 to-brand-navy/95" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
                    <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4 border border-brand-gold/40 px-4 py-1 rounded-full">Same-Day Replacement Available · Massachusetts</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Water Heater Installation<br />
                        <span className="text-brand-gold">& Replacement, Boston MA</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Tank or tankless — A.W. Puma installs and replaces water heaters across Greater Boston. Same-day service available. Licensed, permitted, and done right.
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
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Tank & Tankless Models</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Mass Save® Rebates Available</span>
                    </div>
                </div>
            </section>

            {/* 2. EMPATHY LAYER */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">No Hot Water Is a Household Emergency</h2>
                        <p className="text-brand-gray text-lg leading-relaxed mb-6">
                            A failed water heater disrupts showers, dishes, laundry — everything. And the older your tank, the more likely it is to fail without warning, often leaving you with a flooded utility room and a rushed, expensive repair call.
                        </p>
                        <p className="text-brand-gray text-lg leading-relaxed">
                            Most traditional tank water heaters last 8–12 years. If yours is approaching that age — or already past it — an unexpected failure is only a matter of time.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {[
                            { icon: AlertTriangle, title: 'Sudden Cold-Water Shocks', text: 'Inconsistent hot water is often a sign of a failing heating element or sediment buildup.' },
                            { icon: AlertTriangle, title: 'Rusty or Discolored Water', text: 'Rusty water from your hot tap means corrosion inside your tank — replace it before it leaks.' },
                            { icon: AlertTriangle, title: 'Utility Room Flooding Risk', text: 'An aging tank can fail catastrophically, causing thousands in water damage.' },
                            { icon: AlertTriangle, title: 'Paying to Heat Water You\'re Not Using', text: 'Traditional tanks keep 40–80 gallons hot 24/7. Tankless systems only heat on demand.' },
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">The A.W. Puma Water Heater Standard</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">We install the right unit for your home's demand — with full permits and no surprises.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Droplets, title: 'Tank vs. Tankless Guidance', text: 'We help you choose the right technology. Tankless delivers endless hot water and can cut water heating costs by up to 40%. We\'ll show you the real numbers for your household size.' },
                            { icon: Award, title: 'Heat Pump Water Heater Rebates', text: 'Heat pump water heaters qualify for significant Mass Save® rebates and federal tax credits. We identify your eligibility and maximize your savings at the time of purchase.' },
                            { icon: Shield, title: 'Same-Day Emergency Service', text: 'When your tank fails, we move fast. Most standard tank replacements can be completed the same day of your call — so your household is back to normal by evening.' },
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
                            { name: 'Nancy T.', location: 'Needham, MA', text: 'Our water heater failed on a Sunday morning. A.W. Puma had a technician here by noon and the new unit installed by 4pm. Unbelievable response time.' },
                            { name: 'Peter K.', location: 'Cambridge, MA', text: 'We switched to a tankless unit on their recommendation. The hot water is instant, the utility room has way more space, and our gas bill dropped noticeably. Best decision.' },
                            { name: 'Maria L.', location: 'Boston, MA', text: 'They told me about the Mass Save rebate for heat pump water heaters — I had no idea it existed. Saved $750 upfront. Very knowledgeable and honest team.' },
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
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">From Call to Hot Water in 4 Steps</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Call or Submit Online', text: 'Tell us your issue. We\'ll confirm availability for same-day service.' },
                            { step: '02', title: 'Quote & Unit Selection', text: 'Flat-rate pricing. We recommend the best unit for your home size and budget.' },
                            { step: '03', title: 'Installation', text: 'Permitted install with safe disposal of your old unit included.' },
                            { step: '04', title: 'Rebate Filing', text: 'We submit Mass Save® paperwork if your new unit qualifies.' },
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy text-center mb-12">Water Heater FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'How much does water heater replacement cost in Massachusetts?', a: 'Standard tank water heater replacement runs $900–$2,000 installed. Tankless water heaters range from $2,500–$5,000 installed. Heat pump water heaters may qualify for Mass Save® rebates of $750+.' },
                            { q: 'How long does water heater installation take?', a: 'A standard tank replacement takes 2–3 hours. Tankless installations typically take 4–6 hours with gas line work.' },
                            { q: 'Tank vs. tankless — which is right for me?', a: 'Tankless is ideal for larger households with high simultaneous demand or homeowners prioritizing energy efficiency. Standard tanks are more affordable upfront and work well for smaller households. We\'ll give you an honest comparison.' },
                            { q: 'Is a permit required for water heater replacement in Massachusetts?', a: 'Yes. Massachusetts requires permits for water heater installation. We pull all permits and handle the inspection process.' },
                            { q: 'Are there rebates for water heaters in Massachusetts?', a: 'Yes. Heat pump water heaters qualify for Mass Save® rebates and federal tax credits (up to 30% under the Inflation Reduction Act). We\'ll confirm your eligibility at the time of your appointment.' },
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
                    <h2 className="text-4xl font-serif font-bold mb-4">Hot Water Shouldn't Be a Luxury</h2>
                    <p className="text-xl mb-8 opacity-90">Call now for same-day water heater service throughout Greater Boston and 7 Massachusetts counties.</p>
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
