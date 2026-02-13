import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, ThermometerSun, FileText, Star, Plus, Minus, Fan } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const HVAC: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[80vh] flex flex-col justify-center items-center pt-20">
                <div className="absolute inset-0 z-0">
                    {/* HVAC/Mechanical background */}
                    <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                        alt="Modern HVAC Systems"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">High-Efficiency Climate Control</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Precision HVAC for <br />
                        <span className="text-brand-gold">New England Homes</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Engineering-grade heating and cooling solutions designed to reduce bills and eliminate uneven temperatures in older homes.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Schedule Free Assessment
                        </Button>
                        <Button variant="outline" size="lg">
                            See Mass Save® Rebates
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Why Is Your Home So Uncomfortable?</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            Many Boston-area homes suffer from "hot upstairs, cold downstairs" syndrome, skyrocketing utility bills, and noisy, outdated systems.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">The Band-Aid Fix</h3>
                            </div>
                            <p className="text-brand-gray">
                                Most contractors just swap boxes—putting a new unit on bad ductwork. This leads to early failure and wasted energy.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Emergency Failures</h3>
                            </div>
                            <p className="text-brand-gray">
                                Systems always break on the coldest night of the year. Finding a reliable technician during a freeze is a nightmare.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">The A.W. PUMA Standard</h3>
                        <p className="text-gray-300 text-lg">
                            We perform a <strong>Manual J Load Calculation</strong> on every install to ensure your system is perfectly sized for your home's unique footprint.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">System Mastery</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">More Than Just Installation</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Fan className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Airflow Dynamics</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Ductwork redesign & sealing</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Hyper-heat heat pump specialists</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Indoor Air Quality (IAQ) testing</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Rebate Maximization</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Mass Save® paperwork handling</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>0% Interest financing options</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>ROI calculation provided</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Certified Safety</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>EPA Certified Technicians</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Gas fitting licenses on file</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Carbon monoxide safety checks</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE EVIDENCE LAYER (SOCIAL PROOF) */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">Comfort You Can Feel</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"Our oil bill was killing us. A.W. Puma switched us to a heat pump system that kept us warm even in the -10 degree snap last winter. The rebate process was seamless."</p>
                            <div className="font-bold">David Chen</div>
                            <div className="text-sm text-gray-400">Brookline, MA • Heat Pump Conversion</div>
                        </div>
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"Finally, I can sleep in my upstairs bedroom in July without sweating. They redid the ductwork design that the original builder messed up."</p>
                            <div className="font-bold">Emily V.</div>
                            <div className="text-sm text-gray-400">Natick, MA • Central AC Install</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE SYSTEM LAYER (PROCESS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">The Deployment Process</h2>
                        <p className="text-brand-gray">Swift, clean, and engineered for longevity.</p>
                    </div>

                    <div className="border-l-2 border-brand-light pl-8 ml-4 md:ml-auto md:w-2/3 space-y-12 relative">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">1. Load Calculation</h3>
                            <p className="text-brand-gray">We measure windows, insulation, and square footage to scientifically size your unit. No guessing.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">2. System Design</h3>
                            <p className="text-brand-gray">We present options (Good/Better/Best) with clear ROI and rebate estimates.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">3. Precision Install</h3>
                            <p className="text-brand-gray">Our techs use drop cloths and wear booties. We respect your home like it's our own.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">4. Support & Warranty</h3>
                            <p className="text-brand-gray">We file your warranty paperwork and set up your yearly maintenance plan.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">HVAC Questions Answered</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Do heat pumps really work in Massachusetts winters?", a: "Yes. Modern 'Hyper-Heat' / 'Cold Climate' heat pumps are efficient down to -13°F. Many of our clients have completely removed their oil/gas boilers." },
                            { q: "How much can I save with Mass Save rebates?", a: "As of 2024, rebates can be up to $10,000 for whole-home heat pump conversions. We handle the application process for you." },
                            { q: "How long does an installation take?", a: "A standard changeout takes 1 day. A full system with new ductwork takes 3-5 days. We never leave you without heat overnight in winter." },
                            { q: "What brands do you install?", a: "We are authorized dealers for Mitsubishi, Carrier, and Bosch, but we can service any make or model." }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-sm border border-gray-200">
                                <button
                                    className="w-full flex items-center justify-between p-6 text-left font-bold text-brand-navy focus:outline-none"
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                >
                                    {faq.q}
                                    {openFaqIndex === index ? <Minus size={20} className="text-brand-gold" /> : <Plus size={20} className="text-gray-400" />}
                                </button>
                                {openFaqIndex === index && (
                                    <div className="p-6 pt-0 text-brand-gray leading-relaxed border-t border-gray-100">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. SOFT CONVERSION (CTA) */}
            <section className="py-20 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Is Your System Wasting Money?</h2>
                    <p className="text-brand-gray mb-8">Download our "Efficiency Checklist" to see if you qualify for thousands in rebates.</p>

                    <div className="bg-white p-8 rounded-sm shadow-md max-w-lg mx-auto">
                        <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 border border-gray-300 rounded-sm mb-4 outline-none focus:border-brand-gold" />
                        <Button className="w-full justify-center">Send Me The Checklist</Button>
                        <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};
