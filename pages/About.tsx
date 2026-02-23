import React from 'react';
import { SEO } from '../components/SEO';
import { Shield, Award, Users, Clock, CheckCircle, Hammer, HeartHandshake } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
    return (
        <div className="pt-20">
            <SEO
                title="About A.W. Puma | Our Legacy of Craftsmanship"
                description="Since 2010, A.W. Puma has been elevating Massachusetts homes with a unified team of HVAC and remodeling experts."
                keywords="about aw puma, hvac company boston, remodeling contractor massachusetts, high performance construction"
                canonical="/about"
            />
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
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Always There. Always Fair.</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Since 2010, A.W. Puma has been the premium choice for homeowners who refuse to compromise on quality, transparency, and technical expertise.
                    </p>
                </div>
            </section>

            {/* 2. THE STORY */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-6">Building a Legend in Boston</h2>
                        <p className="text-brand-gray mb-6 leading-relaxed">
                            What started as a specialized HVAC firm in Brookline has grown into a unified home services powerhouse. We realized that homeowners were tired of managing three different contractors who didn't talk to each other.
                        </p>
                        <p className="text-brand-gray mb-8 leading-relaxed">
                            By bringing master carpenters, licensed HVAC technicians, and expert project managers under one roof, we've eliminated the friction of home improvement.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <div className="text-4xl font-serif font-bold text-brand-gold mb-1">15+</div>
                                <div className="text-sm font-bold text-brand-navy uppercase tracking-widest">Years of Excellence</div>
                            </div>
                            <div>
                                <div className="text-4xl font-serif font-bold text-brand-gold mb-1">5,000+</div>
                                <div className="text-sm font-bold text-brand-navy uppercase tracking-widest">Homes Served</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" alt="Craftsmanship" className="rounded-sm shadow-md" />
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" alt="HVAC Tech" className="rounded-sm shadow-md mt-8" />
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUES */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-brand-navy mb-16 text-center">The Puma Standard</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Shield className="text-brand-gold" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4 text-center">Unwavering Integrity</h3>
                            <p className="text-brand-gray text-center">
                                We believe in "The Fair Price." No hidden fees, no change-order traps, and no cutting corners when the inspector isn't looking.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Hammer className="text-brand-gold" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4 text-center">Master Craftsmanship</h3>
                            <p className="text-brand-gray text-center">
                                Good enough isn't enough. From the hidden ductwork to the final coat of paint, our work is built to last for generations.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <HeartHandshake className="text-brand-gold" size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-brand-navy mb-4 text-center">Direct Communication</h3>
                            <p className="text-brand-gray text-center">
                                You will never be left wondering. We provide weekly project updates and clear timelines for every phase of construction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
