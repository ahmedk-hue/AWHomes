import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Calendar, FileText, Star, Plus, Minus, Wrench } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const Maintenance: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[80vh] flex flex-col justify-center items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                        alt="Property Maintenance"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">A.W. Puma Care Plan</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Set It and <br />
                        <span className="text-brand-gold">Forget It.</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Comprehensive seasonal maintenance for your home's vital systems. Prevent costly breakdowns before they happen.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            View Plans
                        </Button>
                        <Button variant="outline" size="lg">
                            Schedule One-Time Service
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Homeownership Is Hard Work</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            Keeping track of filter changes, gutter cleaning, and boiler tune-ups is a full-time job. Ignoring them is expensive.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Deferred Costs</h3>
                            </div>
                            <p className="text-brand-gray">
                                A $150 annual boiler tune-up can prevent a $8,000 replacement. Neglect destroys ROI.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Weekend Warrior</h3>
                            </div>
                            <p className="text-brand-gray">
                                Do you really want to spend your Saturday on a ladder cleaning gutters? Or trying to figure out why the pilot light is out?
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">Your "House Manager"</h3>
                        <p className="text-gray-300 text-lg">
                            Our <strong>Care Plan</strong> puts your home on autopilot. We track the schedule, we bring the parts, we do the work.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Proactive Care</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">What We Cover</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Wrench className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Systems Tune-Up</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>HVAC filter & coil cleaning</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Water heater flushing</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Electrical panel thermal scan</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Plan Perks</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>15% Discount on all repairs</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>No emergency dispatch fees</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Transferable to new owner</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Safety Checks</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Smoke/CO detector battery swap</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Dryer vent cleaning (fire safety)</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Sump pump testing</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE EVIDENCE LAYER (SOCIAL PROOF) */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">Peace of Mind</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"I travel for work, and I used to worry about the house constantly. Knowing A.W. Puma comes twice a year to check everything is a huge relief."</p>
                            <div className="font-bold">Greg M.</div>
                            <div className="text-sm text-gray-400">Boston, MA • Gold Plan Member</div>
                        </div>
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"During the routine visit, the tech noticed a small radiator leak I hadn't seen. Fixed it on the spot before it ruined my floors. The plan paid for itself right there."</p>
                            <div className="font-bold">Julia S.</div>
                            <div className="text-sm text-gray-400">Dedham, MA • Silver Plan Member</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE SYSTEM LAYER (PROCESS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">How It Works</h2>
                        <p className="text-brand-gray">Simple, automatic, transparent.</p>
                    </div>

                    <div className="border-l-2 border-brand-light pl-8 ml-4 md:ml-auto md:w-2/3 space-y-12 relative">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">1. Onboarding</h3>
                            <p className="text-brand-gray">We do an initial walkthrough to catalog your equipment (filters sizes, model numbers) so we always bring the right parts.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">2. Scheduling</h3>
                            <p className="text-brand-gray">We call you to book your Spring and Fall visits. You don't have to remember.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">3. The Visit</h3>
                            <p className="text-brand-gray">Our uniformed tech spends 2-4 hours performing a 100-point inspection and cleaning.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">4. Digital Report</h3>
                            <p className="text-brand-gray">You receive a PDF report with photos of everything we checked and any recommendations.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Plan FAQ</h2>
                    <div className="space-y-4">
                        {[
                            { q: "How much does the plan cost?", a: "Plans start at $29/month. We offer Silver, Gold, and Platinum tiers depending on the size of your home and complexity of systems." },
                            { q: "What if I sell my house?", a: "The plan is transferable to the new owner, which is a great selling point! Or you can transfer it to your new local home." },
                            { q: "Are parts included?", a: "Standard maintenance parts like filters and batteries are included. Repair parts (like a new motor) are not, but you get a 15% discount on them." },
                            { q: "Do I get priority service?", a: "Yes. Plan members get 'Front of the Line' status for emergency calls, even during blizzards or heat waves." }
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">See What You're Missing</h2>
                    <p className="text-brand-gray mb-8">Download sample "Home Health Report" to see the level of detail we provide.</p>

                    <div className="bg-white p-8 rounded-sm shadow-md max-w-lg mx-auto">
                        <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 border border-gray-300 rounded-sm mb-4 outline-none focus:border-brand-gold" />
                        <Button className="w-full justify-center">Send Me A Sample Report</Button>
                        <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};
