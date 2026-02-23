import React from 'react';
import { Hammer, CheckCircle, ShieldCheck, ArrowRight, Star, FileText, Ruler, HardHat, Phone } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SEO } from '../../components/SEO';
import { Link } from 'react-router-dom';

export const HomeRemodeling: React.FC = () => {
    return (
        <div className="bg-white">
            <SEO
                title="Custom Home Renovations in Boston & Metro West | A.W. Puma Home Services"
                description="Elevating Massachusetts homes with expert craftsmanship and transparent project management. From custom carpentry to full-scale remodeling, we build the space you’ve been waiting for."
                canonical="/services/custom-remodeling"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Custom Home Renovations & Remodeling",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "A.W. Puma Home Services",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "202 Washington St",
                            "addressLocality": "Brookline",
                            "addressRegion": "MA",
                            "postalCode": "02445",
                            "addressCountry": "US"
                        }
                    },
                    "areaServed": ["Boston", "Newton", "Brookline", "Cambridge", "Wellesley", "Needham", "Winchester"],
                    "description": "Elevating Massachusetts homes with expert craftsmanship and transparent project management."
                }}
            />

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 bg-brand-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
                        alt="Custom Home Remodeling"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                            Custom Home <br />
                            <span className="text-brand-gold">Renovations & Remodeling</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                            Elevating Massachusetts homes with expert craftsmanship and transparent project management. From custom carpentry to full-scale remodeling, we build the space you’ve been waiting for.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact">
                                <Button size="lg" className="w-full sm:w-auto text-lg h-16 shadow-2xl">
                                    Get a Free Project Estimate
                                </Button>
                            </Link>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg h-16 border-white text-white hover:bg-white hover:text-brand-navy">
                                Download Our 2026 Remodeling Cost Guide
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. PAS FRAMEWORK (Empathy Layer) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">The Problem</h2>
                            <p className="text-brand-gray leading-relaxed">
                                Your home should be your sanctuary, but an outdated layout or a lack of functional space can make it feel like a source of stress. Finding a contractor in Massachusetts who actually answers the phone—and follows through on their promises—is harder than it should be.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">The Agitation</h2>
                            <p className="text-brand-gray leading-relaxed">
                                We’ve heard the horror stories: "The 'handyman' disappeared mid-project," "The quote doubled after the walls were opened," or "The permit process has been stalled at City Hall for months." In the Greater Boston area, navigating historic codes, strict zoning, and complex MEP requirements can turn a dream renovation into a regulatory nightmare.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-brand-navy mb-4">The Solution</h2>
                            <p className="text-brand-gray leading-relaxed">
                                At <strong>A.W. Puma Home Services</strong>, we don’t just swing hammers; we manage the chaos. Our "Always There, Always Fair" philosophy means you get a dedicated partner who handles everything from architectural design plans to the final coat of paint.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. THE COMPETENCE LAYER (Pillars) */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">Experience the A.W. PUMA Difference</h2>
                        <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Pillar 1 */}
                        <div className="p-8 bg-white border-t-4 border-brand-gold shadow-lg">
                            <div className="bg-brand-navy/5 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                                <Hammer className="text-brand-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">Technical Mastery & Design</h3>
                            <p className="text-brand-gray mb-6">
                                We specialize in <strong>custom home designs</strong> that blend seamlessly with Massachusetts’ unique architectural heritage.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-brand-gray">
                                    <CheckCircle size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <span><strong>Custom Carpentry:</strong> Built-ins, finish work, and structural framing.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-brand-gray">
                                    <CheckCircle size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <span><strong>Mechanical Integration:</strong> Backed by high-efficiency HVAC and Plumbing experts.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-brand-gray">
                                    <CheckCircle size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <span><strong>Design-Build:</strong> Custom plans prioritizing aesthetics and integrity.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 2 */}
                        <div className="p-8 bg-white border-t-4 border-brand-gold shadow-lg">
                            <div className="bg-brand-navy/5 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                                <ShieldCheck className="text-brand-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">Financial Transparency</h3>
                            <p className="text-brand-gray mb-6">
                                No "guesstimate" games. We provide a detailed scope of work so you aren't blindsided by costs.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-brand-gray">
                                    <CheckCircle size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <span><strong>Fixed-Price Agreements:</strong> Clear contracts protecting your investment.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-brand-gray">
                                    <CheckCircle size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <span><strong>Mass Save® Integration:</strong> Navigating incentives for energy efficiency.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-brand-gray">
                                    <CheckCircle size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <span><strong>Lien Waivers:</strong> Protecting your property title from subcontractor issues.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Pillar 3 */}
                        <div className="p-8 bg-white border-t-4 border-brand-gold shadow-lg">
                            <div className="bg-brand-navy/5 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                                <Ruler className="text-brand-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-brand-navy mb-4">Regulatory & Local Expertise</h3>
                            <p className="text-brand-gray mb-6">
                                Navigating the permit office as a full-time job. We handle the paperwork for Norfolk, Suffolk, and Middlesex counties.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-sm text-brand-gray">
                                    <CheckCircle size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <span><strong>Permit Management:</strong> Complete handling of building, electrical, and plumbing permits.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-brand-gray">
                                    <CheckCircle size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <span><strong>Zoning Compliance:</strong> Expert navigation of FAR and local ordinances.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-brand-gray">
                                    <CheckCircle size={16} className="text-brand-gold mt-1 flex-shrink-0" />
                                    <span><strong>Fully Insured:</strong> Licensed for high-value residential construction.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. EVIDENCE LAYER (Social Proof) */}
            <section className="py-24 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-brand-gold fill-brand-gold" />)}
                            </div>
                            <blockquote className="text-3xl font-serif italic mb-8 leading-relaxed">
                                "Albert and his team transformed our outdated Newton kitchen into a custom masterpiece. They were 'Always There' when they said they would be, and the quality of the custom carpentry is unmatched. They handled the permits, the plumbing, and the final details flawlessly."
                            </blockquote>
                            <cite className="text-xl font-bold not-italic">— Sarah J., Newton, MA</cite>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://images.unsplash.com/photo-1556911220-e2cb920199e1?q=80&w=2070&auto=format&fit=crop" alt="Kitchen Before" className="rounded-lg shadow-xl" />
                            <img src="https://images.unsplash.com/photo-1556911220-e461623209ca?q=80&w=2070&auto=format&fit=crop" alt="Kitchen After" className="rounded-lg shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. SYSTEM LAYER (Our Process) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-brand-navy mb-4">Our 4-Step Renovation Process</h2>
                        <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 shadow-md border-2 border-brand-gold text-2xl font-bold text-brand-navy">1</div>
                            <h3 className="font-serif font-bold mb-4">Discovery & Feasibility</h3>
                            <p className="text-sm text-brand-gray">We meet to discuss your vision, budget, and feasibility of your goals.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 shadow-md border-2 border-brand-gold text-2xl font-bold text-brand-navy">2</div>
                            <h3 className="font-serif font-bold mb-4">Design & Planning</h3>
                            <p className="text-sm text-brand-gray">Our team drafts custom house designs and secures engineeering approvals.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 shadow-md border-2 border-brand-gold text-2xl font-bold text-brand-navy">3</div>
                            <h3 className="font-serif font-bold mb-4">The Build Phase</h3>
                            <p className="text-sm text-brand-gray">Clean job sites, daily updates, and professional project management.</p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 shadow-md border-2 border-brand-gold text-2xl font-bold text-brand-navy">4</div>
                            <h3 className="font-serif font-bold mb-4">Final Walkthrough</h3>
                            <p className="text-sm text-brand-gray">We don't leave until every joint is perfect and the space is ready.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. DATA LAYER (FAQ) */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-brand-navy text-center mb-16">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        <div className="p-8 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-serif font-bold text-brand-navy mb-4">What is the average cost of a custom home renovation in Massachusetts?</h3>
                            <p className="text-brand-gray leading-relaxed">
                                While every project is unique, high-quality <strong>custom home remodeling</strong> in the Boston area typically ranges from <strong>$150 to $400+ per square foot</strong>, depending on finishes, structural changes, and mechanical upgrades.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-serif font-bold text-brand-navy mb-4">How long does a custom home addition take?</h3>
                            <p className="text-brand-gray leading-relaxed">
                                Most <strong>custom home additions</strong> take between 4 to 8 months from initial design to final inspection. We provide a detailed timeline before we break ground to ensure your life isn't disrupted longer than necessary.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-lg">
                            <h3 className="text-xl font-serif font-bold text-brand-navy mb-4">Do you handle all the permits?</h3>
                            <p className="text-brand-gray leading-relaxed">
                                Yes. From the initial filing to the final certificate of occupancy, A.W. Puma manages all interactions with local building departments in our service areas, including Boston, Cambridge, and Brookline.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. SOFT CONVERSION / FOOTER CTA */}
            <section className="py-24 bg-brand-gold text-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-6 italic">Planning a renovation but not sure where to start?</h2>
                    <p className="text-xl mb-10 opacity-90">Download our <strong>Massachusetts Homeowner’s Remodeling Checklist</strong>. It covers everything from budgeting to choosing finishes for New England weather.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button size="lg" className="bg-white !text-brand-gold hover:bg-gray-100 font-bold flex items-center gap-2 h-16 px-10">
                            <FileText size={20} /> Get the Checklist
                        </Button>
                        <a href="tel:+16176183366">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-gold font-bold flex items-center gap-2 h-16 px-10">
                                <Phone size={20} /> Call (617) 618-3366
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
