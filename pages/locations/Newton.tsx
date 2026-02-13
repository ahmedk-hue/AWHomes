import React, { useState } from 'react';
import { ArrowRight, MapPin, Building, Waves, FileQuestion, Download, Plus, Minus } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const NewtonLocation: React.FC = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION (SOP-02: Section 1) */}
            <section className="relative min-h-[70vh] flex flex-col justify-center items-center pt-32">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1549643276-fbc2cbd0289c?q=80&w=2070&auto=format&fit=crop"
                        alt="Newton, MA Residential Street"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 border border-brand-gold/50 backdrop-blur-md mb-8">
                        <MapPin size={16} className="text-brand-gold" />
                        <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">The Garden City Expert</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
                        A.W. Puma <br />
                        <span className="text-brand-gold">Newton Construction</span>
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        From historic renovations in Newton Centre to modern additions in Waban. We know the code, the inspectors, and the soil.
                    </p>

                    <Button size="lg" icon={<ArrowRight size={18} />}>
                        Discuss Your Newton Project
                    </Button>
                </div>
            </section>

            {/* 2. THE RELEVANCE LAYER (SOP-02: Section 2) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Building in Newton is Different</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">
                            Every city has its quirks. In Newton, ignoring these three factors can delay a project by months.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Vector 1: Soil */}
                        <div className="bg-gray-50 p-8 rounded-sm border-b-4 border-brand-navy">
                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                <Building size={24} className="text-brand-navy" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">The Rock Ledge</h3>
                            <p className="text-brand-gray">
                                Many parts of Newton (especially Chestnut Hill) sit on shallow bedrock. We perform test pits <strong>before</strong> quoting a foundation to avoid expensive blasting surprises later.
                            </p>
                        </div>
                        {/* Vector 2: Water */}
                        <div className="bg-gray-50 p-8 rounded-sm border-b-4 border-brand-gold">
                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                <Waves size={24} className="text-brand-navy" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Stormwater Management</h3>
                            <p className="text-brand-gray">
                                Newton Engineering Department is strict about runoff. Any addition over 500 sq. ft. often requires engineered infiltration systems (Cultec chambers) to keep water on-site.
                            </p>
                        </div>
                        {/* Vector 3: Code */}
                        <div className="bg-gray-50 p-8 rounded-sm border-b-4 border-brand-navy">
                            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                <FileQuestion size={24} className="text-brand-navy" />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Historic Districts</h3>
                            <p className="text-brand-gray">
                                If you are in a Local Historic District (like Newton Upper Falls), exterior changes need approval. We prepare the packets and present to the Historic Commission for you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE PROOF LAYER (SOP-02: Section 3) */}
            <section className="py-24 bg-gray-50 leading-relaxed">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">We Are Your Neighbors</h2>
                        <p className="text-brand-gray mb-6">
                            We don't just work here; we live here. You'll see our trucks parked at Wegmans on Route 9 and stopped for coffee at George Howell.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-brand-navy font-bold">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                15+ Projects completed in Newton last year
                            </li>
                            <li className="flex items-center gap-3 text-brand-navy font-bold">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                Familiar with Newton City Hall permitting
                            </li>
                            <li className="flex items-center gap-3 text-brand-navy font-bold">
                                <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
                                References available in Waban, Oak Hill, and West Newton
                            </li>
                        </ul>
                        <Button variant="outline">View Newton Portfolio</Button>
                    </div>
                    <div className="h-[400px] bg-gray-300 rounded-sm overflow-hidden relative shadow-lg">
                        {/* Placeholder for Google Map Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47156.46781427506!2d-71.24430485642646!3d42.33704153359654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e382f5b3a3c1e7%3A0x6e9389280d8f564!2sNewton%2C%20MA!5e0!3m2!1sen!2sus!4v1707930000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Newton Service Area"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* 4. THE DATA LAYER (FAQ) (SOP-02: Section 4) */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12 text-center">Newton Permitting FAQ</h2>
                    <div className="space-y-4">
                        {[
                            { q: "How long does a building permit take in Newton?", a: "As of 2024, standard building permits are taking 4-6 weeks for review. Historic reviews can add 2+ months. We submit everything electronically to speed this up." },
                            { q: "Can I build an ADU (Accessory Dwelling Unit)?", a: "Yes, Newton passed a progressive ADU ordinance. Detached structures are allowed in most residential zones with specific setback and height limits. We specialize in these." },
                            { q: "What is the 'Stretch Code'?", a: "Newton has adopted the Specialized Opt-in Code. This means new construction typically needs to be Passive House certified or fully electric/solar-ready. We are certified in these standards." },
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

            {/* 5. THE FUNNEL (SOP-02: Section 5) */}
            <section className="py-20 bg-brand-light">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white p-12 rounded-sm shadow-xl border border-gray-100">
                        <Download size={48} className="text-brand-gold mx-auto mb-6" />
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Download the 2025 Newton Cost Guide</h2>
                        <p className="text-brand-gray mb-8 max-w-lg mx-auto">
                            Stop guessing. Get real price per square foot ranges for remodels, additions, and new builds in Newton, minus the contractor fluff.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border border-gray-300 rounded-sm outline-none focus:border-brand-gold" />
                            <Button>Download PDF</Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
