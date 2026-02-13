import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Hammer, FileText, Star, Plus, Minus } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const HomeRemodeling: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[80vh] flex flex-col justify-center items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1502005229766-939760a7cb0d?q=80&w=2070&auto=format&fit=crop"
                        alt="Luxury Home Remodeling"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Premier Design-Build</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Home Remodeling in <br />
                        <span className="text-brand-gold">Greater Boston</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Expand your living space and increase property value with a turnkey design-build process that eliminates budget surprises.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Request Feasibility Study
                        </Button>
                        <Button variant="outline" size="lg">
                            Download Cost Guide
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Why Is Remodeling So Stressful?</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            Most homeowners dread the renovation process. They fear the "money pit" scenario, ghosting contractors, and timelines that stretch months past the deadline.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">The "Low" Bid Trap</h3>
                            </div>
                            <p className="text-brand-gray">
                                Many contractors bid low to get the job, only to hit you with endless "change orders" once the walls are open. Your budget was never real.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Permit Nightmares</h3>
                            </div>
                            <p className="text-brand-gray">
                                Navigating local zoning and building codes in Massachusetts is complex. One mistake can shut down your project for weeks.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">The A.W. PUMA Antidote</h3>
                        <p className="text-gray-300 text-lg">
                            We operate on a <strong>Fixed-Price Promise</strong>. By front-loading the engineering and design work, we identify risks <em>before</em> we swing a hammer.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Operational Maturity</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">A System For Success</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Hammer className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Technical Precision</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Structural Engineering analysis included</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Master Plumbers & Electricians on staff</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>High-efficiency HVAC integration</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <FileText className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Financial Safety</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Detailed fixed-price contracts</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Transparent draw schedules</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Lien waivers provided</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Regulatory Compliance</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Full permit management</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>HOA & Historic District navigation</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Code compliance inspections</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE EVIDENCE LAYER (SOCIAL PROOF) */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">What Neighbors Are Saying</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"They transformed our 1950s cape into a modern family home. The team caught a structural issue early that would have caused major problems later. Worth every penny."</p>
                            <div className="font-bold">The Henderson Family</div>
                            <div className="text-sm text-gray-400">Newton, MA • Full Home Remodel</div>
                        </div>
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"A.W. Puma handled everything. I didn't have to chase plumbers or electricians because they work for the company. The coordination was seamless."</p>
                            <div className="font-bold">Mark & Sarah T.</div>
                            <div className="text-sm text-gray-400">Brookline, MA • Kitchen & Addition</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE SYSTEM LAYER (PROCESS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">The Roadmap</h2>
                        <p className="text-brand-gray">From concept to keys.</p>
                    </div>

                    <div className="border-l-2 border-brand-light pl-8 ml-4 md:ml-auto md:w-2/3 space-y-12 relative">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">1. Feasibility Study</h3>
                            <p className="text-brand-gray">We assess zoning, structural constraints, and budget alignment before drawing a single line. Small investment, low risk.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">2. Design & Engineering</h3>
                            <p className="text-brand-gray">Our architects and engineers create the blueprint. We select finishes and finalize the Fixed-Price Contract.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">3. Permits & Procurement</h3>
                            <p className="text-brand-gray">We pull permits and order materials early to avoid supply chain delays.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">4. Build</h3>
                            <p className="text-brand-gray">Execution by our licensed team. Regular site meetings keep you updated.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What is the cost per square foot?", a: "Residential remodeling in Greater Boston typically ranges from $250 - $450+ per square foot, depending on finishes and structural complexity. We provide a detailed range during our initial call." },
                            { q: "How long does a typical remodel take?", a: "A standard kitchen remodel takes 6-10 weeks. A large addition or whole-home renovation typically takes 4-8 months. We provide a guaranteed schedule before starting." },
                            { q: "Do you handle all the permits?", a: "Yes. We act as the applicant and manage all town inspections." },
                            { q: "Can I live in the house during construction?", a: "For large additions or whole-home projects, we often recommend moving out for safety and speed. For smaller focused remodels, we can section off the work area." }
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Not Ready to Build Yet?</h2>
                    <p className="text-brand-gray mb-8">Download our "Remodeling Budget Checklist" to see exactly where your money goes.</p>

                    <div className="bg-white p-8 rounded-sm shadow-md max-w-lg mx-auto">
                        <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 border border-gray-300 rounded-sm mb-4 outline-none focus:border-brand-gold" />
                        <Button className="w-full justify-center">Send Me The Guide</Button>
                        <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};
