import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Zap, FileText, Star, Plus, Minus, Smartphone } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const Electrical: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            {/* 1. THE PROMISE (HERO) */}
            <section className="relative min-h-[80vh] flex flex-col justify-center items-center pt-32">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
                        alt="Modern Smart Home Lighting"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-90" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Electrical & Smart Home</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        Powering the <br />
                        <span className="text-brand-gold">Modern Home.</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        From 200A panel upgrades to fully integrated smart home automation. Safe, licensed, and future-proof.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Button size="lg" icon={<ArrowRight size={18} />}>
                            Get a Quote
                        </Button>
                        <Button variant="outline" size="lg">
                            Smart Home Ideas
                        </Button>
                    </div>
                </div>
            </section>

            {/* 2. THE EMPATHY LAYER (PAS) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-6">Are You Living in the Past?</h2>
                        <p className="text-lg text-brand-gray leading-relaxed">
                            Flickering lights, tripping breakers, and a tangle of extension cords aren't just annoying—they are fire hazards in waiting.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">Fire Hazards</h3>
                            </div>
                            <p className="text-brand-gray">
                                Old "knob and tube" wiring or overloaded cloth-wrapped wires in vintage homes are a leading cause of electrical fires.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm border-l-4 border-red-500">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-red-500" size={24} />
                                <h3 className="text-xl font-bold text-brand-navy">The "Handyman" Special</h3>
                            </div>
                            <p className="text-brand-gray">
                                Unlicensed electrical work is illegal and dangerous. One bad connection can destroy thousands in electronics.
                            </p>
                        </div>
                    </div>

                    <div className="bg-brand-navy text-white p-8 rounded-sm text-center">
                        <h3 className="text-2xl font-serif font-bold mb-4">Safety First, Always</h3>
                        <p className="text-gray-300 text-lg">
                            We employ only <strong>Master and Journeyman Electricians</strong>. Every job is tested, labeled, and code-compliant.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (3 PILLARS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Wired For Success</span>
                        <h2 className="text-4xl font-serif font-bold text-brand-navy">Comprehensive Expertise</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1: Technical */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Zap className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Heavy Upgrades</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Service panel upgrades (200A+)</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>EV Charger installation</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Generator transfer switches</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2: Financial */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <Smartphone className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Smart Integration</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Lutron Caséta & RA2 lighting</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Sonos audio systems</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Smart thermostat wiring</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3: Regulatory */}
                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                                <ShieldCheck className="text-brand-navy" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-navy">Strict Compliance</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Permit & Inspection management</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Smoke/CO detector certification</span>
                                </li>
                                <li className="flex gap-3 text-brand-gray">
                                    <CheckCircle2 size={20} className="text-brand-gold shrink-0" />
                                    <span>Knob & Tube remediation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE EVIDENCE LAYER (SOCIAL PROOF) */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center text-white">Light Up The Review Section</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"We bought an older home with questionable wiring. A.W. Puma did a full safety audit and upgraded our panel. Now we sleep soundly effectively. Clean, polite, and very knowledgeable."</p>
                            <div className="font-bold">Robert F.</div>
                            <div className="text-sm text-gray-400">Cambridge, MA • Panel Upgrade</div>
                        </div>
                        <div className="bg-white/10 p-8 rounded-sm backdrop-blur-sm">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="fill-brand-gold text-brand-gold" size={16} />)}
                            </div>
                            <p className="text-gray-200 italic mb-6">"They installed our EV charger and some recessed lighting. The placement advice was perfect—the room looks totally different now. Highly recommend."</p>
                            <div className="font-bold">Sarah T.</div>
                            <div className="text-sm text-gray-400">Lexington, MA • Lighting & EV</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE SYSTEM LAYER (PROCESS) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">The Workflow</h2>
                        <p className="text-brand-gray">Safety doesn't happen by accident.</p>
                    </div>

                    <div className="border-l-2 border-brand-light pl-8 ml-4 md:ml-auto md:w-2/3 space-y-12 relative">
                        {/* Step 1 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-gold border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">1. Safety Audit</h3>
                            <p className="text-brand-gray">We inspect your current load, grounding, and panel health before adding any new circuits.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">2. Design & Scope</h3>
                            <p className="text-brand-gray">For lighting or automation, we help you plan zones and switches for maximum convenience.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">3. Installation</h3>
                            <p className="text-brand-gray">Wire pulling, fishing walls, and device install. We minimize dryway damage whenever possible.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="relative">
                            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <h3 className="text-xl font-bold text-brand-navy mb-2">4. Testing & Labelling</h3>
                            <p className="text-brand-gray">We test every circuit and clearly label your panel so you know what switch does what.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. THE DATA LAYER (FAQ) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Electrical FAQ</h2>
                    <div className="space-y-4">
                        {[
                            { q: "Do I need a panel upgrade for an EV charger?", a: "Often, yes. EV chargers draw significant power. If your panel is full or only 100A, an upgrade is recommended for safety and future-proofing." },
                            { q: "Can you install 'smart' switches in an old house?", a: "Yes. Even if you lack neutral wires in switch boxes, modern systems like Lutron Caséta can be installed without rewiring your whole house." },
                            { q: "Why do my breakers keep tripping?", a: "This usually means the circuit is overloaded. Modern lifestyles use more power. We can run new dedicated circuits for heavy appliances." },
                            { q: "Do you install standby generators?", a: "Yes. We install Generac and Kohler whole-home standby generators with automatic transfer switches." }
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
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Plan Your Smart Home</h2>
                    <p className="text-brand-gray mb-8">Download our "Smart Home Starter Guide" for inspiration and compatibility tips.</p>

                    <div className="bg-white p-8 rounded-sm shadow-md max-w-lg mx-auto">
                        <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 border border-gray-300 rounded-sm mb-4 outline-none focus:border-brand-gold" />
                        <Button className="w-full justify-center">Get The Guide</Button>
                        <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe anytime.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};
