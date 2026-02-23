import React from 'react';
import { SEO } from '../components/SEO';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
    return (
        <div className="pt-20">
            <SEO
                title="Contact Us | Book Your Free Estimate | A.W. Puma"
                description="Ready to start your project? Contact A.W. Puma today for a free estimate on HVAC or remodeling services in Boston and Metro West."
                keywords="contact aw puma, hvac estimate boston, book contractor massachusetts"
                canonical="/contact"
            />
            {/* HEADER */}
            <section className="bg-brand-navy text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Start Your Project</h1>
                    <p className="text-xl text-gray-300">Tell us about your home. We reply within 24 hours.</p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
                    {/* INFO */}
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-brand-navy mb-8">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="bg-brand-light p-3 rounded-sm h-fit">
                                    <Phone className="text-brand-gold" size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-brand-navy uppercase tracking-widest text-sm mb-1">Call Us</div>
                                    <a href="tel:+16176183366" className="text-xl font-serif font-bold text-brand-navy hover:text-brand-gold transition-colors">(617) 618-3366</a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-brand-light p-3 rounded-sm h-fit">
                                    <Mail className="text-brand-gold" size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-brand-navy uppercase tracking-widest text-sm mb-1">Email Us</div>
                                    <a href="mailto:office@awpumahome.com" className="text-xl font-serif font-bold text-brand-navy hover:text-brand-gold transition-colors">office@awpumahome.com</a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-brand-light p-3 rounded-sm h-fit">
                                    <MapPin className="text-brand-gold" size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-brand-navy uppercase tracking-widest text-sm mb-1">Our Office</div>
                                    <div className="text-lg text-brand-gray">202 Washington St, Brookline, MA 02445</div>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-brand-light p-3 rounded-sm h-fit">
                                    <Clock className="text-brand-gold" size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-brand-navy uppercase tracking-widest text-sm mb-1">Hours</div>
                                    <div className="text-lg text-brand-gray">Mon - Fri: 8am - 6pm<br />24/7 Emergency Service</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <div className="bg-gray-50 p-8 md:p-12 rounded-sm shadow-sm border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-gold outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-gold outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-gold outline-none transition-colors" placeholder="(617) 000-0000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Service Type</label>
                                    <select className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-gold outline-none transition-colors">
                                        <option>HVAC Installation</option>
                                        <option>HVAC Repair</option>
                                        <option>Custom Remodeling</option>
                                        <option>Home Addition</option>
                                        <option>Energy Assessment</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-white border border-gray-200 focus:border-brand-gold outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <Button className="w-full flex items-center justify-center gap-2" icon={<Send size={18} />}>
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
