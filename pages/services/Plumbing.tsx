import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Droplets, FileText, Star, Plus, Minus } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const Plumbing: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[80vh] flex flex-col justify-center items-center pt-32">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop"
                        alt="Professional Plumbing"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Master Plumbers On Call</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Reliable Plumbing. <br />
                        <span className="text-brand-gold">Zero Stress.</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        From emergency leak detection to luxury bathroom rough-ins. We protect your home from water damage with licensed expertise.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Request Service
                        </Button>
                        <Button variant="outline" size="lg">
                            Emergency Call
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Water Waits For No One</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            A small leak today is a mold disaster tomorrow. Yet, finding a plumber who actually picks up the phone feels impossible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">The Ghosting Plumber</h3>
                            </div>
                            <p className="text-brand-gray">
                                You take time off work, wait all day, and nobody shows up. Meanwhile, the drip gets worse.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Code Violations</h3>
                            </div>
                            <p className="text-brand-gray">
                                Improper venting or piping can release sewer gas into your home or fail inspections when you try to sell.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">The A.W. PUMA Promise</h3>
                        <p className="text-gray-300 text-lg">
                            We answer the phone. We show up on time. We send <strong>licensed professionals</strong>, not apprentices, to diagnose your issue.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Technical Excellence</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">Complete Water Solutions</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Droplets className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Advanced Diagnostics</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Camera line inspections</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Leak detection technology</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>High-efficiency boiler tuning</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Transparent Pricing</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Upfront quotes, no surprises</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Detailed water usage audit</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Warranty on parts & labor</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Code Compliance</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Pulling all necessary permits</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Backflow prevention testing</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Gas fitting certification</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE EVIDENCE LAYER (SOCIAL PROOF) */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">Trusted by Local Families</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"We had a pipe burst in the basement at 2 AM. A.W. Puma had a crew there within an hour to shut off the water and start repairs. Saved us thousands in damage."</p>
                            <div className="font-bold">The Morrisons</div>
                            <div className="text-sm text-gray-400">Waltham, MA • Emergency Repair</div>
                        </div>
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"They repiped our entire Victorian home. The crew was respectful, clean, and careful with the original plaster walls. True craftsmen."</p>
                            <div className="font-bold">James L.</div>
                            <div className="text-sm text-gray-400">Newton, MA • Whole Home Repipe</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE SYSTEM LAYER (PROCESS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">How We Operate</h2>
                        <p className="text-brand-gray">Diagnostic precision, not guessing games.</p>
                    </div>

                    <div className="border-l-2 border-brand-light pl-8 ml-4 md:ml-auto md:w-2/3 space-y-12 relative">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">1. The Dispatch</h3>
                            <p className="text-brand-gray">You call, we schedule a specific window. We call you 30 minutes before arrival so you aren't stuck waiting.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">2. Diagnosis</h3>
                            <p className="text-brand-gray">We investigate the root cause, not just the symptom. We provide a clear explanation and a flat-rate price.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">3. Resolution</h3>
                            <p className="text-brand-gray">We fix it right the first time, using high-quality copper, PEX, and fixtures that last.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">4. Clean Up</h3>
                            <p className="text-brand-gray">We treat your home with respect. We clean the work area thoroughly before we leave.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Plumbing FAQ</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Why is my water bill so high?", a: "High bills often indicate a silent leak, typically in a toilet flapper or an underground pipe. We can perform a leak audit to find it fast." },
                            { q: "Do you install tankless water heaters?", a: "Yes. Tankless units (like Navien or Rinnai) offer endless hot water and higher efficiency. We can assess if your gas line sizing supports one." },
                            { q: "What is your hourly rate?", a: "We work on a flat-rate basis for most jobs. This means you know the exact price before we start, regardless of how long it takes. No watching the clock." },
                            { q: "Do you handle gas leaks?", a: "Yes. We are licensed gas fitters. If you smell gas, leave the house immediately and call 911, then call us for the repair." }
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Avoid The Emergency</h2>
                    <p className="text-brand-gray mb-8">Download our "Home Plumbing Checklist" to spot leaks before they become floods.</p>

                    <div className="bg-white p-8 rounded-sm shadow-md max-w-lg mx-auto">
                        <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 border border-gray-300 rounded-sm mb-4 outline-none focus:border-brand-gold" />
                        <Button className="w-full justify-center">Get The Checklist</Button>
                        <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};
