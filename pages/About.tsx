import React from 'react';
import { Shield, Users, Clock, Award, Hammer, HeartHandshake } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-24 bg-brand-navy text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                        alt="Construction Site"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Building Trust, Not Just Houses.</h1>
                    <p className="text-xl text-brand-gold max-w-2xl mx-auto font-light">
                        Since 2005, A.W. Puma has been the quiet force behind some of Greater Boston's most enduring homes.
                    </p>
                </div>
            </section>

            {/* 2. THE FOUNDER'S LETTER (SOP-08: Section 1) */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                                alt="Alberto Puma, Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-brand-gold p-6 rounded-sm shadow-lg text-brand-navy hidden md:block">
                            <div className="text-4xl font-bold">18+</div>
                            <div className="text-sm font-bold uppercase tracking-wider">Years Active</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy">A Letter from the Founder</h2>
                        <h3 className="text-xl text-brand-gray italic">"We don't build for the photo. We build for the next 50 years."</h3>

                        <div className="prose prose-lg text-brand-gray">
                            <p>
                                When I started A.W. Puma in 2005, the construction industry had a reputation problem. Hidden costs, ghosting contractors, and corners cut behind drywall. I wanted to build a company that was radically transparent.
                            </p>
                            <p>
                                My promise to you is simple: <strong>Financial Honesty</strong>. You will see every invoice, every receipt, and every trade bid. We treat your budget with the same respect we treat your home.
                            </p>
                            <p>
                                This isn't just a business to me; it's my family name on the sign.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <div className="font-serif text-2xl text-brand-navy">Alberto Puma</div>
                            <div className="text-sm text-brand-gray uppercase tracking-widest font-bold">Founder & Principal</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. VALUES THAT COST MONEY (SOP-08: Section 2) */}
            <section className="py-24 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">The Price of Excellence</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">
                            Real values aren't just words on a wall. They are decisions that cost us money but earn us trust.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-gold">
                            <Shield className="w-12 h-12 text-brand-navy mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Longevity Over Speed</h3>
                            <p className="text-brand-gray">
                                We don't rush the cure time on concrete. We don't skip the second coat of waterproofing. If it takes an extra week to do it right, we take the week.
                            </p>
                        </div>
                        {/* Value 2 */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-navy">
                            <HeartHandshake className="w-12 h-12 text-brand-navy mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Radical Transparency</h3>
                            <p className="text-brand-gray">
                                Our clients see the raw bids from subcontractors. We don't markup materials without telling you. Our fixed-fee structure aligns our incentives with yours.
                            </p>
                        </div>
                        {/* Value 3 */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-brand-gold">
                            <Hammer className="w-12 h-12 text-brand-navy mb-6" />
                            <h3 className="text-xl font-bold text-brand-navy mb-3">Craftsmanship First</h3>
                            <p className="text-brand-gray">
                                We employ Master Carpenters, not just laborers. We scribe moldings to the wall. We align screw heads. The details you don't see matter the most.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THE TIMELINE (SOP-08: Section 3) */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy">A History of Reliability</h2>
                    </div>

                    <div className="space-y-12 border-l-2 border-gray-200 ml-6 md:ml-auto pl-8 relative">
                        {/* 2005 */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-gold border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">2005</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">Foundation</h3>
                            <p className="text-brand-gray">Alberto Puma starts the company with a single truck, focusing on high-end kitchen remodels in Newton.</p>
                        </div>
                        {/* 2012 */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">2012</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">Expansion to Commercial</h3>
                            <p className="text-brand-gray">The company completes its first major restaurant build-out in Boston's North End, proving our ability to hit strict deadlines.</p>
                        </div>
                        {/* 2018 */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">2018</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">Best of Boston</h3>
                            <p className="text-brand-gray">Awarded "Best Renovation Contractor" by local industry peers for our work on historic Victorian restorations.</p>
                        </div>
                        {/* 2024 */}
                        <div className="relative">
                            <div className="absolute -left-[43px] top-1 w-6 h-6 rounded-full bg-brand-navy border-4 border-white shadow-sm"></div>
                            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest">Today</span>
                            <h3 className="text-2xl font-bold text-brand-navy mb-2">Full-Service Design Build</h3>
                            <p className="text-brand-gray">Now a team of 15+, managing multi-million dollar custom builds and comprehensive property maintenance plans across Greater Boston.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TEAM SECTION (SOP-08: Section 4) */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-4">Meet The Team</h2>
                        <p className="text-brand-gray">The people who will be in your home.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {/* Team Member 1 */}
                        <div className="group">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Alberto Puma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy">Alberto Puma</h3>
                            <div className="text-sm text-brand-gold uppercase tracking-widest">Principal</div>
                        </div>
                        {/* Team Member 2 */}
                        <div className="group">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Sarah Jenkins" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy">Sarah Jenkins</h3>
                            <div className="text-sm text-brand-gold uppercase tracking-widest">Head of Design</div>
                        </div>
                        {/* Team Member 3 */}
                        <div className="group">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" alt="Michael Ross" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy">Michael Ross</h3>
                            <div className="text-sm text-brand-gold uppercase tracking-widest">Project Manager</div>
                        </div>
                        {/* Team Member 4 */}
                        <div className="group">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm mb-4">
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" alt="David Chen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-lg font-bold text-brand-navy">David Chen</h3>
                            <div className="text-sm text-brand-gold uppercase tracking-widest">Lead Super</div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-brand-gray mb-6">Want to join a team that takes pride in the craft?</p>
                        <Button variant="outline">View Career Openings</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};
