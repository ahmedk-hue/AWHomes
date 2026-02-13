import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
    return (
        <div className="bg-white">
            {/* HEADER */}
            <section className="pt-32 pb-20 bg-brand-navy text-white text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Start Your Project</h1>
                <p className="text-xl text-gray-300">Tell us about your home. We reply within 24 hours.</p>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-16">
                {/* LEFT: INFO & MAP */}
                <div className="space-y-12">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-brand-navy mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <Phone className="text-brand-gold shrink-0" size={24} />
                                <div>
                                    <div className="font-bold text-brand-navy">Phone</div>
                                    <a href="tel:+16175550123" className="text-brand-gray hover:text-brand-gold transition-colors">(617) 555-0123</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="text-brand-gold shrink-0" size={24} />
                                <div>
                                    <div className="font-bold text-brand-navy">Email</div>
                                    <a href="mailto:hello@awpuma.com" className="text-brand-gray hover:text-brand-gold transition-colors">hello@awpuma.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="text-brand-gold shrink-0" size={24} />
                                <div>
                                    <div className="font-bold text-brand-navy">Office</div>
                                    <p className="text-brand-gray line-clamp-2">
                                        123 Newbury Street, Suite 400<br />
                                        Newton Centre, MA 02459
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="text-brand-gold shrink-0" size={24} />
                                <div>
                                    <div className="font-bold text-brand-navy">Hours</div>
                                    <p className="text-brand-gray">Mon-Fri: 7:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-64 bg-gray-200 rounded-sm overflow-hidden shadow-lg border border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94356.59363065666!2d-71.25883584179686!3d42.3370415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e382f5b3a3c1e7%3A0x6e9389280d8f564!2sNewton%2C%20MA!5e0!3m2!1sen!2sus!4v1707930000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Map"
                        ></iframe>
                    </div>
                </div>

                {/* RIGHT: FORM */}
                <div className="bg-gray-50 p-8 md:p-10 rounded-sm shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-serif font-bold text-brand-navy mb-8">Send a Message</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">First Name</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm outline-none focus:border-brand-gold" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-sm outline-none focus:border-brand-gold" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Email</label>
                            <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-sm outline-none focus:border-brand-gold" placeholder="jane@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Phone</label>
                            <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-sm outline-none focus:border-brand-gold" placeholder="(555) 123-4567" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Service Needed</label>
                            <select className="w-full px-4 py-3 border border-gray-300 rounded-sm outline-none focus:border-brand-gold bg-white">
                                <option>Home Remodeling</option>
                                <option>HVAC Install / Repair</option>
                                <option>Plumbing Service</option>
                                <option>Electrical Work</option>
                                <option>Energy Assessment</option>
                                <option>Property Maintenance</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-brand-navy uppercase tracking-wider">Message</label>
                            <textarea className="w-full px-4 py-3 border border-gray-300 rounded-sm outline-none focus:border-brand-gold h-32" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <Button className="w-full justify-center text-lg py-4">Send Request</Button>
                        <p className="text-xs text-center text-gray-400">
                            By submitting this form, you agree to receive automated text messages. Reply STOP to cancel.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
