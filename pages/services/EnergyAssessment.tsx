import React from 'react';
import { Leaf, DollarSign, CheckCircle, Star, Phone, ArrowRight, Shield, Award, AlertTriangle, ExternalLink } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export const EnergyAssessment: React.FC = () => {
    return (
        <div className="bg-white">

            {/* 1. HERO */}
            <section className="relative min-h-[92vh] flex items-center justify-center bg-brand-navy text-white overflow-hidden pt-20">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
                        alt="Energy assessment Massachusetts"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 to-brand-navy/95" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-20">
                    <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4 border border-brand-gold/40 px-4 py-1 rounded-full">Mass Save® Certified Partner</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Mass Save® Energy<br />
                        <span className="text-brand-gold">Assessment, Boston MA</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        A free home energy assessment through the{' '}
                        <a href="https://www.masssave.com/" target="_blank" rel="noopener noreferrer" className="underline text-brand-gold hover:opacity-80">
                            Mass Save® program
                        </a>{' '}
                        can unlock thousands in rebates on insulation, heat pumps, and equipment upgrades. A.W. Puma is your certified local partner.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16176183366">
                            <Button size="lg" variant="primary" className="flex items-center gap-2">
                                <Phone size={18} /> Call (617) 618-3366
                            </Button>
                        </a>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="flex items-center gap-2 border-white text-white hover:bg-white hover:text-brand-navy">
                                Schedule My Assessment <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Assessment Is Free</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> Up to $16,000 in Rebates</span>
                        <span className="flex items-center gap-2"><CheckCircle size={16} className="text-brand-gold" /> We Handle the Paperwork</span>
                    </div>
                </div>
            </section>

            {/* 2. WHAT IS MASS SAVE */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">What Is Mass Save®?</h2>
                        <p className="text-brand-gray text-lg leading-relaxed mb-6">
                            <a href="https://www.masssave.com/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline font-semibold">Mass Save®</a> is a statewide energy efficiency program offered through Massachusetts gas and electric utilities. It provides free home energy assessments, rebates, and 0% financing for energy-efficiency improvements — including insulation, air sealing, heat pumps, smart thermostats, and more.
                        </p>
                        <p className="text-brand-gray text-lg leading-relaxed mb-6">
                            As a <strong>Mass Save® certified contractor</strong>, A.W. Puma can schedule your free assessment, identify your eligible upgrades, install the qualifying equipment, and file your rebate paperwork — all in one seamless process.
                        </p>
                        <a href="https://www.masssave.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:underline">
                            Learn more at masssave.com <ExternalLink size={16} />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'Heat Pump Systems', amount: 'Up to $16,000' },
                            { label: 'Insulation & Air Sealing', amount: 'Up to $2,000' },
                            { label: 'Heat Pump Water Heaters', amount: 'Up to $750' },
                            { label: 'Smart Thermostats', amount: 'Up to $100' },
                        ].map((item) => (
                            <div key={item.label} className="bg-brand-light border border-gray-100 rounded-sm p-6 text-center">
                                <div className="text-2xl font-bold text-brand-gold mb-2">{item.amount}</div>
                                <div className="text-sm font-bold text-brand-navy">{item.label}</div>
                                <div className="text-xs text-brand-gray mt-1">Mass Save® Rebate</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. EMPATHY LAYER */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Most Massachusetts Homeowners Leave Thousands on the Table</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto text-lg">The Mass Save® program has been running for decades — but awareness remains low and the application process feels complicated.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: AlertTriangle, title: 'Not Knowing the Assessment Is Free', text: 'The home energy assessment itself costs nothing. Many homeowners assume there\'s a fee and never call.' },
                            { icon: AlertTriangle, title: 'Missing the Equipment Rebate Windows', text: 'Rebate amounts change annually. If you don\'t act this year, the incentive may be lower next year.' },
                            { icon: AlertTriangle, title: 'Confusing Paperwork & Utility Coordination', text: 'Getting a rebate requires coordinating with your utility, filing forms, and meeting spec requirements.' },
                            { icon: AlertTriangle, title: 'Hiring Non-Certified Contractors', text: 'Only certified Mass Save contractors can unlock rebates. An unlicensed installer disqualifies you.' },
                        ].map((item) => (
                            <div key={item.title} className="flex gap-4 p-5 rounded-sm border border-red-100 bg-white">
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

            {/* 4. COMPETENCE LAYER */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Why A.W. Puma as Your Mass Save® Partner</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">We're not just certified — we specialize in maximizing rebate outcomes for Greater Boston homeowners.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Award, title: 'Certified Mass Save® Installer', text: 'Our certification means you qualify for every available rebate when you use A.W. Puma. Non-certified contractors cannot unlock these incentives, regardless of the equipment installed.' },
                            { icon: DollarSign, title: 'Full Rebate Strategy', text: 'We look at your home holistically — insulation, air sealing, HVAC, water heating — and build a rebate plan that maximizes your total incentive across all eligible improvements.' },
                            { icon: Shield, title: 'End-to-End Paperwork', text: 'We gather utility data, complete the rebate applications, coordinate with Mass Save administrators, and track your payment. You don\'t lift a finger on paperwork.' },
                        ].map((pillar) => (
                            <div key={pillar.title} className="bg-brand-light p-8 rounded-sm shadow-sm border-t-4 border-brand-gold">
                                <pillar.icon className="w-12 h-12 text-brand-navy mb-6" />
                                <h3 className="text-xl font-bold text-brand-navy mb-3">{pillar.title}</h3>
                                <p className="text-brand-gray">{pillar.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SOCIAL PROOF */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-brand-navy text-center mb-12">What Our Mass Save® Customers Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'Christine W.', location: 'Wellesley, MA', text: 'A.W. Puma walked me through the entire Mass Save assessment, identified $9,000 in rebates I didn\'t know existed, and handled every form. Got my check in 8 weeks.' },
                            { name: 'David N.', location: 'Boston, MA', text: 'I called three contractors and A.W. Puma was the only one who actually knew the Mass Save program in detail. They got us the maximum rebate on our heat pump and insulation.' },
                            { name: 'Susan P.', location: 'Newton, MA', text: 'The assessment was genuinely free and there was zero pressure. They showed us exactly where our home was losing heat and gave us a clear, prioritized plan to fix it.' },
                        ].map((review) => (
                            <div key={review.name} className="bg-white p-8 rounded-sm">
                                <div className="flex text-brand-gold mb-4">{[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}</div>
                                <p className="text-brand-gray italic mb-6">"{review.text}"</p>
                                <div className="font-bold text-brand-navy">{review.name}</div>
                                <div className="text-sm text-brand-gray">{review.location}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. PROCESS */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-center mb-16">Your Mass Save® Assessment Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Schedule Your Assessment', text: 'Contact A.W. Puma or visit masssave.com to request your free home energy assessment.' },
                            { step: '02', title: 'Home Walkthrough', text: 'An energy specialist visits your home, assesses insulation, HVAC, windows, and identifies efficiency gaps.' },
                            { step: '03', title: 'Rebate Plan', text: 'We develop a prioritized plan showing your qualifying upgrades and exact rebate amounts.' },
                            { step: '04', title: 'Install & Get Paid', text: 'We install certified equipment and submit your rebate paperwork. Your check arrives in weeks.' },
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

            {/* 7. FAQ */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy text-center mb-12">Mass Save® FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: 'Is the Mass Save® home energy assessment really free?', a: 'Yes. The home energy assessment is completely free to Massachusetts residents who qualify. There is no cost for the assessment itself. Rebates are then applied against the cost of qualifying improvements.' },
                            { q: 'Who qualifies for Mass Save® in Massachusetts?', a: 'Most Massachusetts homeowners and renters qualify. Eligibility is based on your utility provider (National Grid, Eversource, Unitil, etc.). Visit masssave.com to confirm your utility participates.' },
                            { q: 'How long does a home energy assessment take?', a: 'Most home energy assessments take 2–3 hours. The specialist will use blower door tests and other diagnostic tools to assess air leakage and thermal performance.' },
                            { q: 'What rebates can I get from Mass Save®?', a: 'Rebates vary by improvement type: up to $16,000 for heat pump systems, up to $2,000 for insulation, up to $750 for heat pump water heaters, and more. Visit masssave.com for the current rebate schedule.' },
                            { q: 'Why use A.W. Puma instead of going directly through Mass Save®?', a: 'We are a certified Mass Save partner — meaning our installations automatically qualify for rebates. We also handle all paperwork, track your rebate payment, and can coordinate multiple improvements in one visit to maximize your total incentive.' },
                        ].map((faq) => (
                            <div key={faq.q} className="border-b border-gray-200 pb-6">
                                <h3 className="font-bold text-brand-navy mb-2">{faq.q}</h3>
                                <p className="text-brand-gray">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="py-24 bg-brand-gold text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-4">Your Free Assessment Is Waiting</h2>
                    <p className="text-xl mb-4 opacity-90">Don't leave thousands in rebates unclaimed. Schedule your free Mass Save® assessment with A.W. Puma today.</p>
                    <p className="mb-8 opacity-80 text-sm">
                        You can also visit{' '}
                        <a href="https://www.masssave.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">masssave.com</a>
                        {' '}to learn more about the program.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+16176183366">
                            <Button size="lg" className="bg-white text-brand-gold hover:bg-gray-100 font-bold flex items-center gap-2">
                                <Phone size={18} /> (617) 618-3366
                            </Button>
                        </a>
                        <Link to="/contact">
                            <Button size="lg" className="bg-brand-navy text-white hover:bg-opacity-90 flex items-center gap-2">
                                Schedule Assessment <ArrowRight size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
